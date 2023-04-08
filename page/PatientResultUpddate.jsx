import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { firebase } from "../config";
import { Picker } from "@react-native-picker/picker";

const PatientResultUpdate = ({ route, navigation }) => {
  const { id } = route.params;
  const [name, setName] = useState("");
  const [stat, setStat] = useState("Stat");
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pain, setPain] = useState("");
  const [rightPupil, setRightPupil] = useState("");
  const [leftPupil, setLeftPupil] = useState("");
  const [neuro, setNeuro] = useState("");
  const [cardio, setCardio] = useState("");
  const [resp, setResp] = useState("");
  const [nurseConcern, setNurseConcern] = useState("");
  const [familyConcern, setFamilyConcern] = useState("");
  const [selectedValue, setSelectedValue] = useState("Temperature");

  const handleUpdate = () => {
    firebase
      .firestore()
      .collection("patientForm")
      .doc(id)
      .update({
        name,
        stat,
        systolic: systolic,
        diastolic: diastolic,
        pain,
        rightPupil,
        leftPupil,
        neuro,
        cardio,
        resp,
        nurseConcern,
        familyConcern,
        selectedValue,
      })
      .then(() => {
        console.log("Document successfully updated!");
        navigation.goBack();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={require("../assets/back2.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setName(text)}
              value={name}
              autoCapitalize="none"
            />

            <View style={styles.picar}>
              <Picker
                style={styles.picar1}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Temperature" value="0" />
                <Picker.Item label="35-35.5" value="35" />
                <Picker.Item label="36-36.5" value="36" />
                <Picker.Item label="37-37.5" value="37" />
                <Picker.Item label="38-38.5" value="38" />
                <Picker.Item label="39-39.5" value="39" />
              </Picker>
            </View>

            <View style={styles.picar}>
              <Picker
                style={styles.picar1}
                selectedValue={stat}
                onValueChange={(itemValue) => setStat(itemValue)}
              >
                <Picker.Item label="Status" value="0" />
                <Picker.Item label="Same" value="Same" />
                <Picker.Item label="Better" value="Better" />
                <Picker.Item label="Worse" value="Worse" />
              </Picker>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Systolic"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setSystolic(text)}
              value={systolic}
              keyboardType="number-pad"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Diastolic"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setDiastolic(text)}
              value={diastolic}
              keyboardType="number-pad"
              autoCapitalize="none"
            />

            <View style={styles.picar}>
              <Picker
                style={styles.picar1}
                selectedValue={pain}
                onValueChange={(itemValue) => setPain(itemValue)}
              >
                <Picker.Item label="Pain Level" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Right Pupil"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setRightPupil(text)}
              value={rightPupil}
            />

            <TextInput
              style={styles.input}
              placeholder="Left Pupil"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setLeftPupil(text)}
              value={leftPupil}
            />

            <TextInput
              style={styles.input}
              placeholder="Neuro"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setNeuro(text)}
              value={neuro}
              autoCapitalize="none"
              keyboardType="number-pad"
            />

            <TextInput
              style={styles.input}
              placeholder="Cardio"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setCardio(text)}
              value={cardio}
              autoCapitalize="none"
              keyboardType="number-pad"
            />

            <TextInput
              style={styles.input}
              placeholder="Respiratory"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setResp(text)}
              value={resp}
              autoCapitalize="none"
              keyboardType="number-pad"
            />

            <View style={styles.picar}>
              <Picker
                style={styles.picar1}
                selectedValue={nurseConcern}
                onValueChange={(itemValue) => setNurseConcern(itemValue)}
              >
                <Picker.Item label="Nurse Concern" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>

            <View style={styles.picar}>
              <Picker
                style={styles.picar1}
                selectedValue={familyConcern}
                onValueChange={(itemValue) => setFamilyConcern(itemValue)}
              >
                <Picker.Item label="Family Concern" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    alignItems: "left",
    justifyContent: "center",
    width: "95%",
    margin: "10%",
    marginRight: 60,
    marginLeft: 15,
    marginTop: 90,
    backgroundColor: "rgba(216, 216, 216, 0.422)",
    borderRadius: 15,
    elevation: 8,
    marginBottom: "-30%",
  },
  scroll: {
    width: "80%",
    marginLeft: -15,
  },
  container1: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
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
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picar: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 3,
    marginBottom: 15,
    marginTop: 25,
    height: "8%",
  },
  picar1: {
    marginTop: -60,
  },
});

export default PatientResultUpdate;
