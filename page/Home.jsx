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
  TextInput,
} from "react-native";
import { firebase } from "../config";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("cards")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const cards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCards(cards);
        setFilteredCards(cards);
      });

    return unsubscribe;
  }, []);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <TouchableHighlight
        style={styles.buttonForm2}
        onPress={() => navigation.navigate("DoctorList")}
      >
        <Text style={styles.textStyle5}>Doctor</Text>
      </TouchableHighlight>
      {item.photoURL && (
        <Image source={{ uri: item.photoURL }} style={styles.image} />
      )}
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>DOB: {item.bd}</Text>
      <Text style={styles.text}>Age: {item.age}</Text>
      <Text style={styles.text}>Cell: {item.phoneNumber}</Text>
      <Text style={styles.text}>Room: {item.roomNumber}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleUpdate(item.id)}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonDelete]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={[styles.buttonText, styles.buttonDeleteText]}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.buttonForm1}
          onPress={() => navigation.navigate("PatientForm")}
        >
          <Text style={styles.textStyle}>DailyForm</Text>
        </TouchableHighlight>
      </View>
    </View>
  );

  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection("cards")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleUpdate = (id) => {
    navigation.navigate("CardUpdateForm", { id });
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredData = cards.filter((card) =>
      card.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCards(filteredData);
  };

  const handleClearSearch = () => {
    setSearchText("");
    setFilteredCards(cards);
  };
  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require("../assets/lupe2.jpg")}
        resizeMode="cover"
        style={styles.image1}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => navigation.navigate("CardForm")}
          >
            <Text style={styles.ButtonText1}>Add</Text>
          </TouchableOpacity>
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
    marginTop: 10,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50
  },
  card: {
    backgroundColor: "#eaf5f3bb",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    marginTop:30
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
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    backgroundColor: "#4285f4",
  },
  buttonDelete: {
    backgroundColor: "#ea4335",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  ButtonText1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 20,
    marginTop: 5,
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
    borderRadius: 25,
    width: "30%",
    backgroundColor: "#55555589",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textStyle5:{
    textAlign:"center",
    fontWeight:"bold"
  },
  textStyle:{
    textAlign:"center",
    color:"white"
  },
  buttonForm1: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    marginRight:1,
    backgroundColor: "#fcc100fa",
  },
  buttonForm2: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    marginTop:-5,
    backgroundColor: "#3af407ae",
  },
  searchBar: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  clearSearchButton: {
    position: "absolute",
    top: 20,
    right: 25,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  clearSearchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchBarContainer: {
    marginTop: -70,
    marginLeft: -10,
    width: "75%",
  },
});

export default CardList;
