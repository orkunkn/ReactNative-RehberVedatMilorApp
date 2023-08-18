import React from "react";
import MapView, { Marker } from 'react-native-maps';

export default function Map({ route }) {

    const { lat, lng } = route.params;

    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            minZoomLevel={30}
        >
            <Marker
                coordinate={{latitude: lat,
                    longitude: lng}}
                title={"map"}
                description={"location"}
            />
        </MapView>
    )
}