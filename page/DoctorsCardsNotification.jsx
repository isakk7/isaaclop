// import { View } from 'react-native';
// import React from 'react';
// import CardsDoctors from '../components/CardsDoctors';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const DoctorsCardsNotification = () => {
// 	return (
// 		<KeyboardAwareScrollView>
// 			<View>
// 				<CardsDoctors />
// 			</View>
// 		</KeyboardAwareScrollView>
// 	);
// };

// export default DoctorsCardsNotification;

import {
    View,
    StyleSheet,
    TouchableHighlight,
    ImageBackground,
    Image,
    ScrollView,
    SafeAreaView,
  
    Linking
  } from "react-native";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { Text, Card, Button, Icon } from "@rneui/themed";
  
  const Home = () => {
    const navigation = useNavigation();
    const handleWhatsappPress = () =>{
      Linking.openURL("https://wa.me/+524494690881?text=Es Necesaria su presencia urgente");
    };
    const handleCallPress = () =>{
      Linking.openURL("tel:+524494690881");
    };
    const handleWhatsapp1Press = () =>{
      Linking.openURL("https://wa.me/+524494147993?text=Es Necesaria su presencia urgente");
    };
    const handleCall1Press = () =>{
      Linking.openURL("tel:+524494147993");
    };
    const handleWhatsapp2Press = () =>{
      Linking.openURL("https://wa.me/+524499202216?text=Es Necesaria su presencia urgente");
    };
    const handleCall2Press = () =>{
      Linking.openURL("tel:+524499202216");
    };
    
    return (
      <>
        <View style={styles.container1}>
          <ImageBackground
            source={require("../assets/back4.jpeg")}
            resizeMode="cover"
            style={styles.image1}
          >
            <View>
              <Text style={styles.inputRed1} >Doctors</Text>
            </View>
            <ScrollView>
              <View style={styles.container}>
                <Card>
                  <Card.Title>Francisco Hernandez </Card.Title>
                  <Card.Divider />
                  <View style={{ position: "relative", alignItems: "center" }}>
                    <Image
                      style={{ width: "100%", height: 100 }}
                      resizeMode="contain"
                      source={require("../assets/docM.png")}
                    />
                    <Text>FranHernandez@gmail.com</Text>
                    <Text>Speciality: Oncologist</Text>
                    <Text>4492341234</Text>
                  </View>
                  {/* <TouchableHighlight
                    style={styles.buttonForm}
                    onPress={() => navigation.navigate("Notifications")}
                  >
                    <Text style={styles.textStyle}>Send Notification</Text>
                  </TouchableHighlight> */}
                  <TouchableHighlight style={styles.buttonForm} title="whatsapp" onPress={handleWhatsappPress}><Text style={styles.textStyle}>Enviar msg</Text></TouchableHighlight>
                  <TouchableHighlight style={styles.buttonForm1} title="Call" onPress={handleCallPress}><Text style={styles.textStyle}>Llamar</Text></TouchableHighlight>
                </Card>
  
                <Card>
                  <Card.Title>Marcela Jones </Card.Title>
                  <Card.Divider />
                  <View style={{ position: "relative", alignItems: "center" }}>
                    <Image
                      style={{ width: "100%", height: 100 }}
                      resizeMode="contain"
                      source={require("../assets/docW.png")}
                    />
                    <Text>Jones.Marcela@gmail.com</Text>
                    <Text>Speciality: Oncologist</Text>
                    <Text>4492341324</Text>
                  </View>
                  {/* <TouchableHighlight
                    style={styles.buttonForm}
                    onPress={() => navigation.navigate("Notifications")}
                  >
                    <Text style={styles.textStyle}>Send Notification</Text>
                  </TouchableHighlight> */}
                  <TouchableHighlight style={styles.buttonForm} title="whatsapp" onPress={handleWhatsapp1Press}><Text style={styles.textStyle}>Enviar msg</Text></TouchableHighlight>
                  <TouchableHighlight style={styles.buttonForm1} title="Call" onPress={handleCall1Press}><Text style={styles.textStyle}>Llamar</Text></TouchableHighlight>
                </Card>
                <Card>
                  <Card.Title>Maria De la Luz </Card.Title>
                  <Card.Divider />
                  <View style={{ position: "relative", alignItems: "center" }}>
                    <Image
                      style={{ width: "100%", height: 100 }}
                      resizeMode="contain"
                      source={require("../assets/docW.png")}
                    />
                    <Text>maria.luz@gmail.com</Text>
                    <Text>Speciality: Oncologist</Text>
                    <Text>4492341345</Text>
                  </View>
                  {/* <TouchableHighlight
                    style={styles.buttonForm}
                    onPress={() => navigation.navigate("Notifications")}
                  >
                    <Text style={styles.textStyle}>Send Notification</Text>
                  </TouchableHighlight> */}
                  <TouchableHighlight style={styles.buttonForm} title="whatsapp" onPress={handleWhatsapp2Press}><Text style={styles.textStyle}>Enviar msg</Text></TouchableHighlight>
                  <TouchableHighlight style={styles.buttonForm1} title="Call" onPress={handleCall2Press}><Text style={styles.textStyle}>Llamar</Text></TouchableHighlight>
                  
                </Card>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: "20%",
      margin: "10%",
      marginBottom: "30%",
    },
    container1: {
      flex: 1,
    },
    inputRed1: {
          width: "100%",
          height: 60,
          fontSize: "20%",
          fontWeight: "bold",
          marginRight: "50%",
          marginTop: "15%",
          marginBottom:"-15%",
          marginLeft:"37%",
        },
    card: {
      backgroundColor: "rgba(153, 151, 151, 0.422)",
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: "row",
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 20,
      marginRight: 10,
    },
    image1: {
      flex: 1,
      justifyContent: "center",
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    buttonForm: {
      backgroundColor: "green",
      width: "70%",
      alignItems: "center",
      backgroundColor: "#22f7d485",
      borderRadius: 4,
      margin: "5%",
      marginLeft: "15%",
      padding: 10,
    },
    buttonForm1: {
      backgroundColor: "green",
      width: "70%",
      alignItems: "center",
      backgroundColor: "#43e5f78f",
      borderRadius: 4,
      margin: "5%",
      marginLeft: "15%",
      padding: 10,
    },
  });
  
  export default Home;
  