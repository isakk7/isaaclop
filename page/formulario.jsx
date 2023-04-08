import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Pressable,
    ImageBackground,
    Button,
    TouchableHighlight,
    
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { firebase } from "../config";
  import { FontAwesome } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  
  const Formulario = () => {
    const [todos, setTodos] = useState([]);
    const todoRef = firebase.firestore().collection("todos");
    const [addData, setAddData] = useState("");
    const navigation = useNavigation();
    const [todoText, setTodoText] = useState('');
    
    useEffect(() => {
      // listen for changes to todos collection in Firebase
      todoRef.orderBy("createdAt", "desc").onSnapshot(querySnapshot => {
        const todos = [];
        querySnapshot.forEach(doc => {
          const { heading } = doc.data();
          todos.push({
            id: doc.id,
            heading,
          });
        });
        setTodos(todos);
      });
    }, []);
  
    const deleteTodo = todoId => {
      todoRef
        .doc(todoId)
        .delete()
        .then(() => {
          alert("Deleted Successfully");
        })
        .catch(error => {
          alert(error);
        });
    };
  
    const addTodo = () => {
      if (addData && addData.length > 0) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
          heading: addData,
          createdAt: timestamp,
        };
        todoRef
          .add(data)
          .then(() => {
            setAddData("");
            Keyboard.dismiss();
          })
          .catch(error => {
            alert(error);
          });
      }
    };
  
    return (
      
      <View style={styles.container1}>
      <ImageBackground
            source={require("../assets/back4.jpeg")}
            resizeMode="cover"
            style={styles.image1}
          >
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new note"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setAddData(text)}
            value={addData}
            autoCapitalize="none"
            multiline={true}
                      numberOfLines={10}
          />
  
          <TouchableOpacity style={styles.button} onPress={addTodo}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          numColumns={1}
          renderItem={({ item }) => (
            <View>
              <Pressable
                style={styles.container}
                onPress={() => navigation.navigate("Detail", { item })}
              >
                <FontAwesome
                  name="trash-o"
                  color="red"
                  onPress={() => deleteTodo(item.id)}
                  style={styles.todoIcon}
                />
                <View style={styles.innerContainer}>
                  <Text style={styles.itemHeading}>
                    {item.heading[0].toUpperCase() + item.heading.slice(1)}
                  </Text>
                </View>
              </Pressable>
        
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        </ImageBackground>
      </View>
      
    );
  }
  
  export default Formulario;
  
  const styles = StyleSheet.create({
    container: {
     backgroundColor: "#f1efef85",
      padding: 15,
      borderRadius: 10,
      margin: 5,
      marginTop:20,
      marginLeft: 30,
      marginRight: 30,
      marginHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    container1: {
      flex: 1,
    
    },
    innerContainer: {
      alignItems: "center",
      flexDirection: "column",
      marginLeft: 45,
    },
    itemHeading: {
      fontWeight: "bold",
      fontSize: 18,
      marginRight: 22,
    },
    formContainer: {
      flexDirection: "row",
      height: 80,
      marginLeft: 30,
      marginRight: 10,
      marginTop: 80,
    },
    input: {
      height: 48,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: "white",
      paddingLeft: 16,
      flex: 1,
      marginRight: 5,
    },
    button: {
      height: 47,
      borderRadius: 5,
      backgroundColor: "#788ee",
      width: 80,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "black",
      fontSize: 20,
    },
    todoIcon: {
      marginTop: 5,
      fontSize: 20,
      marginLeft: 14,
    },
    image1: {
      flex: 1,
      justifyContent: "center",
    },
  });
  