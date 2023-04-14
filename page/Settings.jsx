import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import { firebase } from "../config";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

const Settings = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Please grant permission to access photos in order to choose a profile picture."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoURL(result.uri);
      firebase
        .auth()
        .currentUser.updateProfile({
          photoURL: result.uri,
        })
        .catch((error) => alert(error.message));
    }
  };

  const handleUpdateEmail = () => {
    firebase
      .auth()
      .currentUser.updateEmail(newEmail)
      .then(() => {
        setEmail(newEmail);
        setNewEmail("");
        setIsEditEmail(false);
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      setName(user.displayName);
      setEmail(user.email);
      setPhotoURL(user.photoURL);
      setPhoneNumber(user.phoneNumber); // added this line to set phone number
      if (user.email === "bartadan@gmail.com") {
        setIsAuthorized(true);
      }
    }
  }, []);

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require("../assets/bac1.png")}
        resizeMode="cover"
        style={styles.image1}
      >
        <View style={styles.container}>
          <View style={styles.photoContainer}>
            {photoURL ? (
              <Image source={{ uri: photoURL }} style={styles.photo} />
            ) : (
              <Text>No photo</Text>
            )}

<TouchableOpacity
  onPress={handleChoosePhoto}
  style={styles.choosePhotoButton}
>
  <MaterialIcons name="add-a-photo" size={40} color="black" />
</TouchableOpacity>
          </View>
          <ScrollView  style={styles.scroll}>
            <TouchableOpacity style={styles.input2} onPress={() => setIsEditEmail(true)}>
            <MaterialIcons style={styles.icon} name="email" size={25} color="#000" />
              <Text style={styles.input3}>{email}</Text>   
            </TouchableOpacity>
            {isEditEmail && (
              <>
              <TextInput
              style={[styles.input, {color: 'red'}]}
              placeholder="New email"
              value={newEmail}
              onChangeText={(text) => setNewEmail(text)}
            />
                <TouchableOpacity
                  onPress={handleUpdateEmail}
                  style={styles.button6}
                >
                  <Text style={styles.buttonText}>Update email</Text>
                </TouchableOpacity>
              </>
            )}
                <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Formulario")}
            >
              <Text style={styles.buttonText}>Add Note</Text>
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
              disabled={!isAuthorized}
            >
              <Text style={styles.buttonText}>
                {isAuthorized ? "Add Doctor" : "Unauthorized"}
              </Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("DoctorList")}
            >
              <Text style={styles.buttonText}>Doctors</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CardList")}
            >
              <Text style={styles.buttonText}>Patients</Text>
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
            {/* <TouchableOpacity
              style={styles.button1}
              onPress={() => navigation.navigate("UsersScreen")}
            >
              <Text style={styles.buttonText}>Users</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.button1}
              onPress={() => navigation.navigate("Map")}
            >
              <Text style={styles.buttonText}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut} style={styles.buttonOut}>
              <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 200,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginTop: -100,
  },
  image1: {
    flex: 1,
    justifyContent: "center",
  },
  choosePhotoButton: {
    marginTop: 10,
    marginTop: 30,
    marginBottom: 10
  },
  choosePhotoButtonText: {
    color: "#f5f2f28",
    fontSize:120
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ffffffd0",
    padding: 10,
    borderRadius: 5,
    width: "97%",
    alignItems: "center",
  },
  button1: {
    marginTop: 20,
    backgroundColor: "#0032f8b3",
    padding: 10,
    borderRadius: 5,
    width: "97%",
    alignItems: "center",
  },
  button6: {
    marginTop: 20,
    backgroundColor: "#25f800b3",
    padding: 10,
    borderRadius: 5,
    width: "97%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#090909",
    fontWeight: "bold",
    marginLeft: 10,
    justifyContent: "center",
  },
  buttonOut: {
    marginTop: 20,
    marginBottom:100,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    width: "97%",
    alignItems: "center",
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
    backgroundColor: "#9d9f9fee",
    fontWeight: "bold",
    width: "95%",
    padding: 15,
    fontSize:12,
    paddingBottom: 15,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 15,
    marginRight:10
  },
  input2:{
    alignSelf: "center",
    backgroundColor: "#fdf637f6",
    fontWeight: "bold",
    width: "95%",
    padding: 5,
    fontSize:12,
    paddingBottom: 15,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 15,
    marginRight:10
  },
  input3:{
    fontSize: 13,
    fontWeight:"bold",
    marginTop: -22,
    marginLeft:30
  },
  scroll:{
    width:"80%",
    marginLeft:13,
   
  },
  icon:{
    marginTop:12
  }

});

export default Settings;
