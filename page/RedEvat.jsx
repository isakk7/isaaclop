import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import { useForm, Controller } from "react-hook-form";
  import useFetch from "../hooks/useFetch";
  
  const RedEvat = () => {
    const { control, handleSubmit, setValue } = useForm();
  
    const cleanForm = () => {
      setValue("NamePatient", "");
      setValue("Birthdate", "");
      setValue("Ocologicdx", "");
      setValue("Palliative", "");
      setValue("Service/unit", "");
      setValue("Month", "");
      setValue("DateFirstEVARed", "");
      setValue("TimeFirstRedEVAT", "");
      setValue("CN", "");
      setValue("CV", "");
      setValue("R", "");
      setValue("PE", "");
      setValue("TotalEvat", "");
      setValue("ConsultUCI", "");
      setValue("ConsultationTime", "");
      setValue("Intervention", "");
      setValue("InterventionTime", "");
      setValue("TypeOfIntervention", "");
      setValue("RedEVATDuration", "");
      setValue("ImpairmentEvent", "");
      setValue("EventType", "");
      setValue("EventDate", "");
      setValue("EventTime", "");
      setValue("Transfer", "");
      setValue("TransferDate", "");
      setValue("TransferTime", "");
      setValue("Stay", "");
      setValue("Mortality", "");
      setValue("Comment", "");
    };
    const { postRedEvatForm } = useFetch();
  
  
    const onSubmit = async data => {
      try {
        Alert.alert("Save?", "", [
          {
            text: "Yes",
            onPress: async () => {
              await postRedEvatForm(data);
              Alert.alert("saved correctly");
            },
            style: "Added",
          },
  
          {
            text: "No",
            onPress: () => Alert.alert("Not add"),
            style: "Not added",
          },
        ]);
      } catch (err) {
        Alert.alert(err.message);
      }
    };
  
    return (
      <View style={styles.container1}>
        <ImageBackground
          source={require("../assets/back4.jpeg")}
          resizeMode="cover"
          style={styles.image1}
        >
          <KeyboardAwareScrollView>
            <View>
              <Text style={styles.inputRed1} >Red Evat</Text>
            </View>
            <View style={styles.container}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Patient name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="NamePatient"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Birth Date"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Birthdate"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Oncological Dx"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Ocologicdx"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Palliative"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Palliative"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Service/Unit"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Service/unit"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Month"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Month"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="First red EVAT date"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="DateFirstEVARed"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="First red EVAT hour"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="TimeFirstRedEVAT"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="CN"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="CN"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="CV"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="CV"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="R"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="R"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="PE"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="PE"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Total EVAT"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="TotalEvat"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="UCI consultation"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="ConsultUCI"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Consultation hour"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="ConsultationTime"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Intervention?(UCI o Pedi)"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Intervention"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Intervention hour"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="InterventionTime"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Type of intervention"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="TypeOfIntervention"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Red EVAT duration (hours)"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="RedEVATDuration"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Impairment event"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="ImpairmentEvent"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Event type"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="EventType"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Event date"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="EventDate"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Event hour"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="EventTime"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Transfer to UCI/UTI"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Transfer"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Transfer date"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="TransferDate"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="Transfer hour"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="TransferTime"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="UCI/UTI stay"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Stay"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputRed}
                    placeholder="UCI or floor mortality"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Mortality"
              />
  
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputComment}
                    placeholder="Write a comment"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="Comment"
              />
  
              <TouchableOpacity
                style={styles.btnSave}
                onPress={handleSubmit(onSubmit)}
              >
                <Text>Save</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      padding: "5%",
      alignItems: "center",
      justifyContent: "center",
      width: "85%",
      margin: "8%",
      backgroundColor: "rgba(216, 216, 216, 0.422)",
      borderRadius: 8,
      elevation: 8,
      marginBottom: "30%",
    },
    container1: {
      flex: 1,
    },
    shadowProp: {
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    inputRed: {
      width: "80%",
      height: 60,
      borderWidth: 1,
      margin: "1%",
      borderRadius: 8,
      marginTop: "5%",
      justifyContent: "center",
      alignItems: "center",
      justifyContent: "center",
      padding: "3%",
    },
    inputRed1: {
      width: "100%",
      height: 60,
      fontSize: "20%",
      fontWeight: "bold",
      marginRight: "50%",
      marginTop: "10%",
      marginBottom:"-6%",
      marginLeft:"36%",
    },
    inputComment: {
      width: "80%",
      height: 120,
      borderWidth: 1,
      margin: "1%",
      borderRadius: 8,
      marginTop: "5%",
    },
    btnSave: {
      width: "80%",
      height: 50,
      alignItems: "center",
      backgroundColor: "#22f7d485",
      borderRadius: 8,
      marginTop: "4%",
      fontSize: 20,
      justifyContent: "center",
    },
    textBtn: {
      color: "#fdfdfd",
    },
  });
  
  export default RedEvat;
  