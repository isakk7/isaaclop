import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';

export default function AllPages({ navigation }) {
  return (
    <View style={styles.container1}>
    <ImageBackground
      source={require("../assets/back4.jpeg")}
      resizeMode="cover"
      style={styles.image1}
    >
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Formulario")}
      >
        <Text style={styles.buttonText}>Quick Notes</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CardForm")}
      >
        <Text style={styles.buttonText}>Add Patient</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DoctorCardForm")}
      >
        <Text style={styles.buttonText}>Add Doctor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DoctorCardForm")}
      >
        <Text style={styles.buttonText}>Add Doctor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DoctorList")}
      >
        <Text style={styles.buttonText}>Doctors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PatientForm")}
      >
        <Text style={styles.buttonText}>Daily Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PatientResult")}
      >
        <Text style={styles.buttonText}>Patient's Records</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SurgeryForm")}
      >
        <Text style={styles.buttonText}>Surgery Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SurgeryResult")}
      >
        <Text style={styles.buttonText}>Surgery Records</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container1: {
        flex: 1,
      },
      image1: {
        flex: 1,
        justifyContent: "center",
      },
      
      button: {
        marginTop: 20,
        backgroundColor: "#e4e8e8",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "bold",
        marginLeft: 10,
        justifyContent: "center",
        
      },
      buttonForm: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: 'center',
      },
      ButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 10,
        justifyContent: "center",
      },
      input: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#fff",
        fontWeight:"bold",
        width: "80%",
        padding: 20,
        paddingBottom: 22,
        borderRadius: 20,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 20,
      },
});