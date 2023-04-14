import React, { useState, useEffect } from 'react';
import { TextInput, Button, StyleSheet, View, ImageBackground, TouchableOpacity, Text, TouchableHighlight,  } from 'react-native';
import { firebase } from "../config";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core'

const DoctorCardForm = () => {
  const [name, setName] = useState('');
  const [rol, setRol] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [photoURL, setPhotoURL] = useState(null);
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('DoctorList');
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      name,
      rol,
      phoneNumber,
      specialty,
      photoURL,
      createdAt: timestamp,
    };
    firebase.firestore().collection('doctorCards').add(data)
      .then(() => {
        setName('');
        setRol('');
        setPhoneNumber('');
        setSpecialty('');
        setPhotoURL(null);
        alert("Doctor card added successfully!");
      })
      .catch(error => {
        alert(error);
      });
  };

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please grant permission to access photos in order to choose a profile picture.');
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
      firebase.auth().currentUser.updateProfile({
        photoURL: result.uri,
      }).catch(error => alert(error.message));
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/lupe1.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
            {photoURL ? (
              <ImageBackground
                source={{ uri: photoURL }}
                resizeMode="cover"
                style={styles.photo}
              />
            ) : (
              <Text style={styles.photoText}>Choose Photo</Text>
            )}
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setName(text)}
            value={name}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Rol"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setRol(text)}
            value={rol}
   
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            keyboardType="phone-pad"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Specialty"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setSpecialty(text)}
            value={specialty}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#80808085",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    marginTop:-200,
    marginLeft: 30,
    marginRight: 30,
    marginHorizontal: 10,
    width:"80%",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#1d9421",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    width:"100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  photoButton:{
    backgroundColor: "#21dbe5",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width:"100%",
    alignItems: "center"
  }
});

export default DoctorCardForm;