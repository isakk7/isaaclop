import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
  } from "react-native";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import useFetch from "../hooks/useFetch";
  import useFetchData from "../hooks/useFetchData";
  
  const CardsDoctors = () => {
    const { getDoctors } = useFetch();
    const { data } = useFetchData(getDoctors);
    const navigation = useNavigation();
    return data.map(doctor => (
      <View style={styles.cardContainer}>
        <MaterialCommunityIcons
          name="doctor"
          size={50}
          color="#F2CD5C"
          onPress={() => navigation.navigate("PatientInformation")}
        />
        <Text style={styles.infText}>Name: {doctor.name} </Text>
        <Text style={styles.infText}>Email: {doctor.email} </Text>
        <Text style={styles.infText}>Phone: {doctor.phone}</Text>
        <Text style={styles.infText}>Specialty: {doctor.specialty}</Text>
        <TouchableHighlight
          style={styles.buttonForm}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Text style={styles.textStyle}>Send Notification</Text>
        </TouchableHighlight>
      </View>
    ));
  };
  
  const styles = StyleSheet.create({
    container: {},
    cardContainer: {
      alignItems: "center",
      width: "70%",
      borderRadius: 4,
      marginTop: "20%",
      marginLeft: "15%",
      padding: 1,
      elevation: 8,
      backgroundColor: "white",
    },
    buttonForm: {
      backgroundColor: "green",
      width: "50%",
      alignItems: "center",
      backgroundColor: "#F2CD5C",
      borderRadius: 4,
      margin: "6%",
      padding: 10,
    },
    textStyle: {
      color: "white",
      fontSize: 15,
    },
    infText: {
      fontSize: 15,
      marginTop: "1%",
    },
  });
  
  export default CardsDoctors;
  