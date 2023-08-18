import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";

export function City({ route, navigation }) {
    const { cityData, jsonData } = route.params;

    const restaurants = jsonData[0][cityData]; // Access restaurants for the selected city

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{cityData}</Text>
            <FlatList
                data={Object.keys(restaurants)}
                renderItem={({ item }) => {
                    const restaurant = restaurants[item];
                    return (
                        <TouchableHighlight
                            activeOpacity={0.7}
                            underlayColor="#DDDDDD"
                            onPress={() => {
                                navigation.navigate('Restaurant', { data: restaurant, name: item });
                            }}
                        >
                            <View style={styles.restaurantContainer}>
                                <Image source={{ uri: restaurant.photoUrl }} style={styles.image} />
                                <Text style={styles.restaurantName}>{item}</Text>
                            </View>
                        </TouchableHighlight>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1E1E1',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    restaurantContainer: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#E1E1E1',
        borderRadius: 15,
        margin: 10,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 200,
        borderRadius: 5,
        marginBottom: 10,
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
