import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { FlatList, ScrollView, TouchableHighlight } from "react-native-gesture-handler";

export function Restaurant({ route, navigation }) {

    const { data, name } = route.params;

    return (
        <ScrollView style={{ backgroundColor: '#D2D2D2' }}>
            <ImageBackground source={{ uri: data.photoUrl }} style={styles.image}>
                <View style={styles.innerContainer}>
                    <TouchableHighlight
                        activeOpacity={0.5}
                        underlayColor="#A3A5FA"
                        style={styles.harita}
                        onPress={() => {
                            navigation.navigate('Map', { lat: data.lat, lng: data.lng });
                        }}
                    >
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 20
                        }}>Haritada Göster</Text>
                    </TouchableHighlight>
                    <View style={styles.restaurantContainer}>
                        <Text style={styles.restaurantName}>{name}</Text>
                        <Text style={styles.location}>{data.konum}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.box}>
                <Text style={styles.yazi}>{data.yazi}</Text>
            </View>
            <View style={styles.box}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 5,
                    marginRight: 5,
                    fontWeight: 'bold'
                }}
                >Tavsiyeler:</Text>
                <FlatList
                    data={data.tavsiyeler}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.yazi}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.header}>Adres:</Text>
                <Text style={styles.text}>{data.adres}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.header}>Telefon:</Text>
                <Text style={styles.text}>{data.telefon}</Text>
            </View>
            <View >
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginLeft: 10,
                    marginBottom: 10
                }}>İncelemeler</Text>
                <FlatList
                    data={data.yorumlar}
                    renderItem={({ item }) => (
                        <View >
                            {Object.entries(item).map(([yazar, yorum], index) => (
                                <View key={index} style={styles.box}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginRight: 5
                                    }}>{yazar}</Text>
                                    <Text style={{
                                        fontSize: 15
                                    }}>{yorum}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '25%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        width: '75%',
        fontSize: 20
    },
    harita: {
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: "flex-end"
    },
    restaurantContainer: {
        margin: 10,
        padding: 10,
        alignItems: "flex-start"
    },
    restaurantName: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: 5
    },
    location: {
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 5
    },
    yazi: {
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)',
        padding: 10,
    }
});