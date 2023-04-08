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
  TextInput,
} from "react-native";
import { firebase } from "../config";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

const SurgeryResult = () => {
  const [cards, setCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("surgeryForm")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const cards = snapshot.docs.map((doc) => ({
          id: doc.id,
          createdAt: doc.data().createdAt,
          ...doc.data(),
        }));
        setCards(cards);
        setFilteredCards(cards);
      });

    return unsubscribe;
  }, []);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      {item.photoURL && (
        <Image source={{ uri: item.photoURL }} style={styles.image} />
      )}
      <Text style={styles.commentText1}>
        Created At: {item.createdAt.toDate().toLocaleString()}
      </Text>
      <Text style={styles.text}>Name: <Text style={styles.commentText}>{item.name}</Text></Text>
      <Text style={styles.text}>Birth Day: <Text style={styles.commentText}>{item.bd}</Text></Text>
<Text style={styles.text}>Alergies: <Text style={styles.commentText}>{item.alergies}</Text></Text>
<Text style={styles.text}>Blood Type: <Text style={styles.commentText}>{item.bloodT}</Text></Text>
<Text style={styles.text}>Pressure: <Text style={styles.commentText}>{item.pressure}</Text></Text>
<Text style={styles.text}>Insurance: <Text style={styles.commentText}>{item.insurance}</Text></Text>
<Text style={styles.text}>Ocologicdx: <Text style={styles.commentText}>{item.ocologicdx}</Text></Text>
<Text style={styles.text}>Palliative: <Text style={styles.commentText}>{item.palliative}</Text></Text>
<Text style={styles.text}>Num. Surgeries: <Text style={styles.commentText}>{item.nsurgery}</Text></Text>
<Text style={styles.text}>Last Surgery: <Text style={styles.commentText}>{item.lsurgery}</Text></Text>
<Text style={styles.text}>Intervention: <Text style={styles.commentText}>{item.intervantion}</Text></Text>
<Text style={styles.text}>CN: <Text style={styles.commentText}>{item.cn}</Text></Text>
<Text style={styles.text}>CV: <Text style={styles.commentText}>{item.cv}</Text></Text>
<Text style={styles.text}>R: <Text style={styles.commentText}>{item.r}</Text></Text>
<Text style={styles.text}>PE: <Text style={styles.commentText}>{item.pe}</Text></Text>
<Text style={styles.text}>Consult: <Text style={styles.commentText}>{item.consult}</Text></Text>
<Text style={styles.text}>Duration: <Text style={styles.commentText}>{item.duration}</Text></Text>
<Text style={styles.text}>Mortality: <Text style={styles.commentText}>{item.mortality}</Text></Text>
<Text style={styles.text}>Emergency Contact: <Text style={styles.commentText}>{item.econtact}</Text></Text>
      <Text style={styles.text}>Comment: <Text style={styles.commentText}>{item.comment}</Text></Text>

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
          onPress={() => navigation.navigate("DailyForm")}
        >
          <Text style={styles.textStyle}>Daily form</Text>
        </TouchableHighlight>
      </View>
    </View>
  );

  const handleUpdate = (id) => {
    navigation.navigate("SurgeryResultUpdate", { id });
  };

  const handleDelete = (id) => {
    firebase
      .firestore()
      .collection("surgeryForm")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
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
        source={require("../assets/back4.jpeg")}
        resizeMode="cover"
        style={styles.image1}
      >
        <View style={styles.container}>
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
          {/* <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => navigation.navigate("CardForm")}
          >
            <Text style={styles.ButtonText1}>Add</Text>
          </TouchableOpacity> */}
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
    padding: 20,
    marginBottom: 80,
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
  text: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "left",
  },
  buttonForm1: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    backgroundColor: "#4285f4",
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
    marginTop: -30,
    marginLeft: -10,
    width: "105%",
  },
   commentText: {
    color: "#0a15f6",
  },
  commentText1:{
    color: "#f60a0a",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom:12
  }
});

export default SurgeryResult;
