import React, { useState, useEffect } from 'react';
import { TextInput, Button, StyleSheet, View, ImageBackground, TouchableOpacity, Text, } from 'react-native';
import { firebase } from "../config";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const CardForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bd, setBD] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [photoURL, setPhotoURL] = useState(null);
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Home');
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      name,
      age,
      bd,
      phoneNumber,
      roomNumber,
      photoURL,
      createdAt: timestamp,
    };
    firebase.firestore().collection('cards').add(data)
      .then(() => {
        setName('');
        setAge('');
        setBD('');
        setPhoneNumber('');
        setRoomNumber('');
        setPhotoURL(null);
        alert("Card added successfully!");
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
        source={require("../assets/back2.png")}
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
            placeholder="Age"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setAge(text)}
            value={age}
            keyboardType="numeric"
            autoCapitalize="none"
          />
 <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setBD(text)}
            value={bd}
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
            placeholder="Room Number"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setRoomNumber(text)}
            value={roomNumber}
            keyboardType="phone-pad"
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
    backgroundColor: "#f1efef85",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    marginTop:-250,
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

export default CardForm;