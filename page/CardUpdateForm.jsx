import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { firebase } from '../config';

const CardUpdateForm = ({ route, navigation }) => {
  const { id } = route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bd, setBD] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  const handleUpdate = () => {
    firebase.firestore().collection('cards').doc(id).update({
      name,
      age,
      bd,
      phoneNumber,
      roomNumber,
    })
    .then(() => {
      console.log('Document successfully updated!');
      navigation.goBack();
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
  };

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require("../assets/back2.png")}
        resizeMode="cover"
        style={styles.image}
      >
    <View style={styles.container}>
      <TextInput
       placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
     
      <TextInput
       placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
     
      <TextInput
       placeholder="Birth Date"
        style={styles.input}
        value={bd}
        onChangeText={setBD}
        
      />
      
      <TextInput
       placeholder="Cell"
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
    
      <TextInput
       placeholder="Room"
        style={styles.input}
        value={roomNumber}
        onChangeText={setRoomNumber}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdate}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
     
    </View>
    </ImageBackground>
     
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  container1: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
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
    backgroundColor: "#1cbd3ad5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 12,
    alignItems: "center",
    width: "100%"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
   
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardUpdateForm;