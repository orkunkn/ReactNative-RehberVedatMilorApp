import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export function Cities({ navigation }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      const response = require('../../data.json');
      setData(response);
      setFilteredData(response[0] ? Object.keys(response[0]) : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const filteredCities = data[0]
      ? Object.keys(data[0]).filter(city =>
        city.toLowerCase().includes(filterText.toLowerCase())
      )
      : [];
    setFilteredData(filteredCities);
  }, [filterText, data]);

  return (
    <View style={styles.body}>
      <TextInput
        style={{ fontSize: 15 }}
        placeholder="Şehir arayın"
        onChangeText={text => setFilterText(text)}
        value={filterText}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#A3A5FA"
            onPress={() => {
              navigation.navigate('City', { cityData: item, jsonData: data });
            }}
          >
            <View style={styles.box}>
              <Text style={styles.text}>{item}</Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffffff',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
    margin: 7,
    width: 350,
    height: 100,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1E1E1'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  }
});
