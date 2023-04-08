import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Modal, SafeAreaView,  ScrollView,
  Alert,
  Pressable, } from 'react-native'
import { firebase } from '../config'
import Checkbox from "expo-checkbox";
import useAuthService from "../hooks/useAuthService";
import text from "./text";


const LoginScreen = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuthService();
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password,)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email, 'and name:', name, phone);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require("../assets/back.jpeg")}
        resizeMode="cover"
        style={styles.image1}
      >
        <ScrollView>
    <View
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
      <View style={styles.box1}>
      <Image
        style={styles.image}
        source={require("../assets/logo1.png")}
      ></Image>
    </View>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
         <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
  
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.buttonForm}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text>Acepto</Text>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <SafeAreaView>
                  <ScrollView>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>{text}</Text>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(!modalVisible)}
                        > 
                          <Text style={styles.textView}>Continuar</Text>
                        </Pressable>
                      </View>
                    </View>
                  </ScrollView>
                </SafeAreaView>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle1}> Aviso de Privacidad</Text>
              </Pressable>
            </View>
      </View>
    </View>
    </ScrollView>
    </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
    marginTop: "20%",
    marginLeft: "7%",
    marginRight: "7%",
    borderRadius: 20,
    backgroundColor: "rgba(216, 216, 216, 0.422)",
    height: "90%",
    shadowColor: "#000",
  },
  container1: {
    flex: 1,
  },
 
  image1: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    borderColor: "#f6f8f9",
    width: "105%",
    borderWidth: 2,
    padding: 15,
    margin: 10,
    marginLeft:-10,
    marginRight: 0,
    borderRadius: 8,
    backgroundColor: "white",
  },
  input1: {
    borderColor: "#f6f8f9",
    width: "105%",
    borderWidth: 2,
    padding: 15,
    margin: 10,
    marginTop:55,
    marginLeft:-10,
    marginRight: 0,
    borderRadius: 8,
    backgroundColor: "white",
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "5%",
  },
  button: {
    backgroundColor: '#0782F9',
    width: "140%",
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#0782F9',
    width: "140%",
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonForm: {
    backgroundColor: "#22f7d485",
    marginBottom: "25%",
    marginTop: "10%",
    paddingHorizontal: 50,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
    width: "140%",
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    padding: 20,
    alignItems: "center",
  },
  modalComplianceTitle: {
    marginBottom: 20,
    color: "dodgerblue",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 30,
    alignItems: "center",
    marginTop: "-10%",
  },
  checkbox: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginTop: "-1%",
  },
  continueButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(255, 255, 255, 0.889)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    width:200
    
  },

  buttonClose: {
    backgroundColor: "#00baee78",
   
  },
  textStyle1: {
    color: "blue",
    fontSize: 12,
    fontWeight:"bold",
    textAlign: "center",
    marginTop: "-20%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textView:{
    textAlign:"center",
    fontWeight: "bold"
  },
  box1: {
    alignItems: "center",
    marginTop: 100,
    marginBottom:-100
    
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginTop: -100,
    marginBottom: 80,
   
  },
})
  