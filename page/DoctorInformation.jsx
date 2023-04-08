import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  TouchableHighlight,
  Linking,
  TextInput
} from "react-native";
import { firebase } from "../config";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

const DoctorCardList = () => {
  const [cards, setCards] = useState([]);
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('doctorCards')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const cards = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCards(cards);
        setFilteredCards(cards);
      });

    return unsubscribe;
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredData = cards.filter(card => card.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredCards(filteredData);
  };

  const handleClearSearch = () => {
    setSearchText('');
    setFilteredCards(cards);
  };

  const renderCard = ({ item }) => {
    const currentUserEmail = firebase.auth().currentUser.email;
    
    const handleDelete = (id) => {
      firebase
        .firestore()
        .collection("doctorCards")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    };
  
    const deleteButton =
    currentUserEmail === "bartadan@gmail.com" ? (
      <TouchableOpacity
        style={styles.button1}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    ) : null;

  const updateButton =
    currentUserEmail === "bartadan@gmail.com" ? (
      <TouchableOpacity
        style={styles.button2}
        onPress={() => handleUpdate(item.id)}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    ) : null;
    return (
      <View style={styles.card}>
        {item.photoURL && (
          <Image source={{ uri: item.photoURL }} style={styles.image} />
        )}
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Rol: {item.rol}</Text>
        <Text style={styles.text}>Cell: {item.phoneNumber}</Text>
        <Text style={styles.text}>Speciality: {item.specialty}</Text>
        <View style={styles.buttonContainer}>
       
          <TouchableOpacity
            style={styles.buttonForm3}
            onPress={() =>
              Linking.openURL(
                `https://api.whatsapp.com/send?phone=${item.phoneNumber}`
              )
            }
          >
            <Feather name="message-circle" style={styles.icon1} size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonForm4}
            onPress={() =>
              Linking.openURL(
                `tel:${item.phoneNumber}`
              )
            }
          >
            <Feather name="phone-call" style={styles.icon2} size={30} color="white" />
          </TouchableOpacity>
          
        </View>
        <View style={styles.buttonContainer}>
        {deleteButton}
        {updateButton}
      </View>
      </View>
    );
  };


  
  const handleUpdate = (id) => {
    navigation.navigate('DoctorUpdate', { id });
  };

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require("../assets/back4.jpeg")}
        resizeMode="cover"
        style={styles.image1}
      >
        <View style={styles.container}>
        <TouchableHighlight
          style={styles.buttonForm1}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textStyle}>Home</Text>
        </TouchableHighlight>
        <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search by name"
              value={searchText}
              onChangeText={handleSearch}
            />
            {searchText ? (
              <TouchableOpacity
                style={styles.clearSearchButton}
                onPress={handleClearSearch}
              >
                <Feather name="x" size={20} color="#333" />
              </TouchableOpacity>
            ) : null}
          </View>
        {filteredCards.length > 0 ? (
            <FlatList
              data={filteredCards}
              renderItem={renderCard}
              keyExtractor={(item) => item.id}
              style={styles.list}
            />
          ) : (
            <Text style={styles.empty}>No cards found.</Text>
          )}
        
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  card: {
    backgroundColor: "#eaf5f3bb",
    borderRadius: 10,
    padding: 15,
    marginBottom: 60,
    marginTop:20
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    borderRadius: 150,
    marginTop: 10,
    marginLeft: 45,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },

  button1: {
    marginTop:-55,
    marginBottom: 20,
    marginRight: "25%",
    borderRadius: 8,
    width: "25%",
    backgroundColor: "#e23030d2",
  },
  button2: {
    marginTop:-55,
    marginBottom: 20,
    marginRight: "-3%",
    marginLeft:"30%",
    borderRadius: 8,
    width: "25%",
    backgroundColor: "#13a8e3e8",
  },
  buttonDelete: {
    backgroundColor: "#ea4335",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    margin: 5
  },
  ButtonText1: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  buttonDeleteText: {
    color: "#fff",
  },
  image1: {
    flex: 1,
    justifyContent: "center",
  },
  buttonForm: {
    marginBottom: "5%",
    marginTop: "15%",
    marginLeft: "70%",
    borderRadius: 8,
    width: "30%",
    backgroundColor: "#e2ddddd3",
  },
  buttonForm1:{
    marginTop:-35,
    marginBottom: -1,
    marginLeft: 250,
    borderRadius: 8,
    width: "25%",
    backgroundColor: "#06fcd3e7",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    
  },
  
  buttonForm3: {
    borderRadius: 50,
    width:"20%",
    padding: 10,
    margin: 8,
    marginRight:10,
    backgroundColor: "#29fe04",
    marginBottom:-10
  },
  buttonForm4: {
    borderRadius: 50,
    padding: 10,
    margin: 8,
    marginRight:85,
    backgroundColor: "#29fe04",
    marginBottom:-10
  },
  textStyle:{
    fontSize:15,
    margin:7,
    fontWeight:"bold",
    marginLeft:12
  },
  searchBar: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  clearSearchButton: {
    position: 'absolute',
    top: 20,
    right: 25,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSearchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBarContainer:{
    marginTop:-50,
    marginLeft:-10,
    width:"80%"
  },
  icon1:{
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    marginBottom:5
  },
  icon2:{
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    marginBottom:5
  }
});

export default DoctorCardList;
