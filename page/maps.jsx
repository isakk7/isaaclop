import * as React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';
const carImage = require('../assets/car.png')

const Map = ({navigation}) => {

    const [origin, setOrigin] = React.useState({
        latitude: 21.960216,
        longitude: -102.345638,
    });
  
    const [destination, setDestination] = React.useState ({
        latitude: 21.839125,
        longitude: -102.353598
    });

    React.useEffect(() => {
        getLocationPermission();
    }, [])

    async function getLocationPermission() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if( status !== 'granted') {
            alert('Permission denied');
            return;
        } 
        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);
    }

    return (
        <View style={StyleSheet.container}>
              
            <MapView 
            style={styles.map}
             initialRegion={{
                 latitude: origin.latitude,
                 longitude: origin.longitude,
                 latitudeDelta: 0.09,
                 longitudeDelta: 0.04

             }}
            >
                <Marker
                draggable
                 coordinate={origin}
                image={carImage}
                 onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />
                <Marker
                draggable
                 coordinate={destination}
                 onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                />
               {/* { <Polyline
               coordinates={[ origin, destination]}
               strokeColor="black"
               strokeWidth={8}
               /> } */}
               <MapViewDirections
               origin={origin}
               destination={destination}
               apikey={GOOGLE_MAPS_KEY}
               strokeColor="black"
               strokeWidth={8}
               />
            </MapView>
            <TouchableOpacity
      style={styles.buttonOut}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: '100%',
        height: '100%'
    },
    buttonOut: {
        alignSelf: "left",
        justifyContent: "left",
        width: "100%",
        padding: 20,
        paddingBottom: 22,
        elevation: 15,
        marginTop: -65,
        marginBottom: 0,
        backgroundColor: "rgba(108, 108, 108, 0.629)",
        alignItems: "center",
      },
      buttonText: {
        fontSize: 20,
        color: "#030202",
        fontWeight: "bold",
        marginLeft: 10,
        justifyContent: "center",
        marginTop: -10
      }
});

export default Map;