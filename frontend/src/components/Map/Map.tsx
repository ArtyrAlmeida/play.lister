import { useEffect, useState } from "react";
import { LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location"
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
    const [location, setLocation] = useState<LocationObject | null>(null);

    const askPermissions = async () => {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted){
            const currentPos = await getCurrentPositionAsync();

            setLocation(currentPos)
        }
    }

    useEffect(()=> {askPermissions()},[])

    return( 
        <View>
            {location && 
            <MapView style={styles.map}
                initialRegion={{latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.05, longitudeDelta: 0.05}}>
                    <Marker
                    coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}}/>
            </MapView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    map:{
        width: 75,
        height: 75,
    },
})

export { Map }