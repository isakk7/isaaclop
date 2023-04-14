import { Text, View, TextInput, StyleSheet, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Detail = ({route}) => {
    const todoRef = firebase.firestore().collection('todos');
    const [textHeading, onChangeHeadingText] = useState(route.params.item.heading);
    const navigation = useNavigation();

    const updateTodo = () => {
        if (textHeading && textHeading.length > 0) {
            todoRef
            .doc(route.params.item.id)
            .update({
                heading: textHeading,
            }).then (() => {
                navigation.navigate('Home')
            }).catch((error) =>{
                alert(error.message)
            })
        }
    }
    
    return (
        <View style={styles.container1}>
            <ImageBackground
          source={require("../assets/back2.png")}
          resizeMode="cover"
          style={styles.image1}
        >
            <View style={styles.container}>
                
        <View style={styles.container2}>
            <View style={styles.container3}>
            <TextInput
                style={styles.textField}
                onChangeText={onChangeHeadingText}S
                value={textHeading}
                placeholder="Update Note"
                multiline={true}
					numberOfLines={100}
            />
            </View>
            <Pressable
            style={styles.buttonUpdate}
            onPress={() => {updateTodo()}}
            >
                <Text>UPDATE NOTE</Text>

            </Pressable>

        </View>
        </View>
        </ImageBackground>
        </View>
    )
  }
export default Detail

const styles = StyleSheet.create({
    container:{
        marginTop: -300,
        marginLeft: 15,
        marginRight: 15,
        
    },
    container1: {
        flex: 1,
      },
      container2:{
        padding: "10%",
		alignItems: "left",
		justifyContent: "center",
		width: "85%",
		margin: "10%",
    marginLeft: 30,
    marginTop: 90,
		backgroundColor: "rgba(216, 216, 216, 0.422)",
		borderRadius: 15,
		elevation: 8,
		marginBottom: "-30%",
      },
      container3:{
         width:"100%",
         marginBottom:30,

      },
      image1: {
        flex: 1,
        justifyContent: "center",
      },
    textField:{
        marginBottom: 10,
        padding: 10,
        fontSize: 15,
        color: '#000000',
        backgroundColor:'#e0e0e0',
        borderRadius: 5,
        height: 200,
    },
    buttonUpdate: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        width:"100%",
        backgroundColor: "#22f7d485",
    }
})