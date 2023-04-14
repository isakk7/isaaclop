import React, { useState,} from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  TouchableHighlight,

} from "react-native";
import { firebase } from "../config";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/core'
import { Picker } from '@react-native-picker/picker';


const SurgeryForm = () => {
  const [name, setName] = useState("");
  const [bd, setBD] = useState("");
  const [alergies, setAlergies] = useState("");
  const [bloodT, setBloodT] = useState("");
  const [pressure, setPressure] = useState("");
  const [insurance, setInsurance] = useState("");
  const [ocologicdx, setOcologicdx] = useState("");
  const [palliative, setPalliative] = useState("");
  const [intervention, setIntervention] = useState("");
  const [nsurgery, setNSurgery] = useState("");
  const [lsurgery, setLSurgery] = useState("");
  const [cn, setCN] = useState("");
  const [cv, setCV] = useState("");
  const [r, setR] = useState("");
  const [pe, setPE] = useState("");
  const [consult, setConsult] = useState("");
  const [duration, setDuration] = useState("");
  const [mortality, setMortality] = useState("");
  const [econtact, setEcontact] = useState("");
  const [comment, setComment] = useState("");
  const navigation = useNavigation()
  const [selectedValue, setSelectedValue] = useState('Temperature');




  const handleSubmit = () => {
    navigation.navigate('Home');
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      name,
      bd,
      alergies,
      bloodT,
      pressure,
      insurance,
      ocologicdx,
      palliative,
      nsurgery,
      lsurgery,
      intervention,
      cn,
      cv,
      r,
      pe,
      consult,
      duration,
      mortality,
      econtact,
      comment,
      createdAt: timestamp,
    };
    firebase
      .firestore()
      .collection("surgeryForm")
      .add(data)
      .then(() => {
        setName("");
        setBD("");
        setAlergies("");
        setBloodT("");
        setPressure("");
        setInsurance("");
        setPalliative("");
        setNSurgery("");
        setOcologicdx("");
        setLSurgery("");
        setIntervention("");
        setCN("");
        setCV("");
        setR("");
        setPE("");
        setConsult("");
        setDuration("");
        setMortality("");
        setEcontact("");
        setComment("");
        alert("Card added successfully!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../assets/bac1.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAwareScrollView enableResetScrollToCoords={false}>
        <View style={styles.formContainer}>
        <Text style={styles.Text}>Surgery Form</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setName(text)}
            value={name}
            autoCapitalize="none"
          />

<TextInput
            style={styles.input}
            placeholder="Birth Date"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setBD(text)}
            value={bd}
            autoCapitalize="none"
          />

<TextInput
            style={styles.input}
            placeholder="Alergies"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setAlergies(text)}
            value={alergies}
            autoCapitalize="none"
          />

<TextInput
            style={styles.input}
            placeholder="Blood Type"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setBloodT(text)}
            value={bloodT}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Pressure"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setPressure(text)}
            value={pressure}
            keyboardType="number-pad"
            autoCapitalize="none"
          />
     
          
          <View style={styles.picar}>
					<Picker style={styles.picar1}
						selectedValue={insurance}
						onValueChange={itemValue => setInsurance(itemValue)}
					>
						<Picker.Item label="Insurance" value="0" />
						<Picker.Item label="Yes" value="Yes" />
						<Picker.Item label="No" value="No" />
					</Picker>
				</View>

<TextInput
            style={styles.input}
            placeholder="Palliative"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setPalliative(text)}
            value={palliative}
            autoCapitalize="none"
          />

<View style={styles.picar}>
					<Picker style={styles.picar1}
						selectedValue={nsurgery}
						onValueChange={itemValue => setNSurgery(itemValue)}
					>
						<Picker.Item label="Num. Surgeries" value="0" />
						<Picker.Item label="1" value="1" />
						<Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
						<Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
						<Picker.Item label="More" value="More" />
					</Picker>
				</View>

          <TextInput
            style={styles.input}
            placeholder="Ocologicdx"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setOcologicdx(text)}
            value={ocologicdx}
            autoCapitalize="none"
          />

<TextInput
            style={styles.input}
            placeholder="Last Surgery"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setLSurgery(text)}
            value={lsurgery}
            autoCapitalize="none"
          />
        <TextInput
            style={styles.input}
            placeholder="Intervantion"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setIntervention(text)}
            value={intervention}
            autoCapitalize="none"
          />
           <TextInput
            style={styles.input}
            placeholder="CN"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setCN(text)}
            value={cn}
            autoCapitalize="none"
          />
           <TextInput
            style={styles.input}
            placeholder="CV"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setCV(text)}
            value={cv}
            autoCapitalize="none"
          />
           <TextInput
            style={styles.input}
            placeholder="R"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setR(text)}
            value={r}
            autoCapitalize="none"
          />
           <TextInput
            style={styles.input}
            placeholder="PE"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setPE(text)}
            value={pe}
            autoCapitalize="none"
          />
            <TextInput
            style={styles.input}
            placeholder="Concult"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setConsult(text)}
            value={consult}
            autoCapitalize="none"
          />
            <TextInput
            style={styles.input}
            placeholder="Duration"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setDuration(text)}
            value={duration}
            autoCapitalize="none"
           
          />
              <View style={styles.picar}>
					<Picker style={styles.picar1}
						selectedValue={mortality}
						onValueChange={itemValue => setMortality(itemValue)}
					>
						<Picker.Item label="Mortality" value="0" />
						<Picker.Item label="High" value="High" />
						<Picker.Item label="Low" value="Low" />
					</Picker>
				</View>
            <TextInput
            style={styles.input}
            placeholder="Emergency Contact"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEcontact(text)}
            value={econtact}
            autoCapitalize="none"
            keyboardType="number-pad"
          />
          <TextInput
  style={[styles.inputComment, {textAlign: 'center'}]}
  placeholder="Comment"
  placeholderTextColor="#aaaaaa"
  onChangeText={(text) => setComment(text)}
  value={comment}
  autoCapitalize="none"
/>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
       
        </View>
        </KeyboardAwareScrollView>
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
    padding: "10%",
		alignItems: "left",
		justifyContent: "center",
		width: "85%",
		margin: "10%",
    marginRight: 40,
    marginLeft: 30,
    marginTop: 90,
		backgroundColor: "rgba(216, 216, 216, 0.422)",
		borderRadius: 15,
		elevation: 8,
		marginBottom: "20%",
	
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    width:"101%"
 
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
    marginBottom: 10,
    alignItems: "center",
    width:"101%"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  picar: {
		borderColor: 'gray',
		width: '100%',
		borderWidth: 1,
		borderRadius: 10,
		padding: 3,
    marginBottom: 15,
    marginTop:25,
    height:"8%"
	},
  picar1:{
    marginTop:-60,
    
  },
  inputComment: {
    width: "98%",
    height: 120,
    borderWidth: 1,
    margin: "1%",
    borderRadius: 8,
    marginTop: "5%",
  },
  Text:{
    color:"#000000f9",
    fontWeight:"bold",
    fontSize:20,
    marginLeft:30,
    marginTop:-20,
    marginBottom: 30,

  }
  
});

export default SurgeryForm;