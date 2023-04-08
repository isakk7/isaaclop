import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, ScrollView, } from 'react-native'
import { firebase } from '../config'


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        console.log('Registered with:', user.email, 'and name:', name);
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
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input1}
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
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.buttonForm}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.ButtonText}>Registrar</Text>
            </TouchableOpacity>
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
    marginTop: "40%",
    marginLeft: "7%",
    marginRight: "7%",
    borderRadius: 20,
    backgroundColor: "rgba(216, 216, 216, 0.422)",
    height: "80%",
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
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
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
  box1: {
    alignItems: "center",
    marginTop: 100,
    marginBottom:-100
    
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginTop: -100,
    marginBottom: 40,
   
  },
})