import {
	StyleSheet,
	TextInput,
	SafeAreaView,
	Text,
	Alert,
	View,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import useFetch from '../hooks/useFetch';
import { Picker } from '@react-native-picker/picker';
import {
	heartRateTable,
	breathingRateTable,
	resultRateLevel,
} from '../evat-algorithm';
const COLORS = ['#F7F7F7', '#7DCE13', '#EAE509', '#F76767'];

const DailyForm = () => {
	const navigation = useNavigation();
	const { control, handleSubmit, setValue, watch } = useForm();
	const [selectedValue, setSelectedValue] = useState('Temperature');
	const { postEvatForm } = useFetch();


	const cleanForm = () => {
		setValue('hour', '');
		setValue('temperature', '');
		setValue('bloodPressure', '');
		setValue('FC', '');
		setValue('FR', '');
		setValue('SO2', '');
		setValue('ltsO2', '');
		setValue('pain', '');
		setValue('capillaryRefill', '');
		setValue('rightPupil', '');
		setValue('leftPupil', '');
		setValue('neuro', '');
		setValue('cardio', '');
		setValue('resp', '');
		setValue('nurseConcern', '');
		setValue('familyConcern', '');
	};

	// hour,
	// temperature,
	// stat,
	// bloodPressure,
	// pain,
	// rightPupil,
	// leftPupil,
	// neuro,
	// cardio,
	// resp,
	// lastMedic,
	// timeMedic,
	// nurseConcern,
	// familyConcern,
	

	const onSubmit = async data => {
		try {
			Alert.alert('Completed form', '', [
				{
					text: 'Ok',
					onPress: async () => {
						await postEvatForm({
							...data,
							temperature: selectedValue,
							idPatient: '63fe992f34c0202a8efb3e67',
						});
					},
				},
			]);
			navigation.navigate('Home');
		} catch (err) {
			Alert.alert(err.message);
		}
		cleanForm();
	};

	const onNotification = async data => {
		try {
			Alert.alert('Formulario llenado', '', [
				{
					text: 'Ok',
					onPress: async () => {
						await postEvatForm({
							...data,
							temperature: selectedValue,
							idPatient: '63e26f1ed1bd2c776c09aa7e',
						});
					},
				},
			]);
			navigation.navigate('Notifications');
		} catch (err) {
			console.log(err);
		}
		cleanForm();
	};

	useEffect(() => {

		setValue(
			'resp',
			resultRateLevel(15, parseInt(watch('FR')) || 0, breathingRateTable),
		);
	}, [watch('FR')]);

	useEffect(() => {
		setValue(
			'cardio',
			resultRateLevel(15, parseInt(watch('FC')) || 0, heartRateTable),
		);
	}, [watch('FC')]);


	return (
		<View style={styles.container1}>
      <ImageBackground
        source={require("../assets/back4.jpeg")}
        resizeMode="cover"
        style={styles.image1}
      >
		<KeyboardAwareScrollView enableResetScrollToCoords={false}>
			<View>
            <Text style={styles.inputRed1} >Daily Form</Text>
          </View>
			<SafeAreaView style={styles.container}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							maxLength={2}
							placeholder="Revision time"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="hour"
				/>
				<View style={styles.picar}>
					<Picker
						selectedValue={selectedValue}
						onValueChange={itemValue => setSelectedValue(itemValue)}
					>
						<Picker.Item label="Temperature" value="0" />
						<Picker.Item label="35-35.5" value="35" />
						<Picker.Item label="36-36.5" value="36" />
						<Picker.Item label="37-37.5" value="37" />
						<Picker.Item label="38-38.5" value="38" />
						<Picker.Item label="39-39.5" value="39" />
					</Picker>
				</View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Blood pressure mmHg"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="bloodPressure"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							maxLength={3}
							placeholder="Heart rate"
							style={styles.evat(watch, 'FC', heartRateTable)}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="FC"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							maxLength={3}
							placeholder="Breathing rate"
							style={styles.evat(watch, 'FR', breathingRateTable)}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="FR"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="SO2"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="SO2"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="LtsO2"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="ltsO2"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Pain"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="pain"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Capillary filling"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="capillaryRefill"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Right pupil "
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="rightPupil"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Left pupil"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="leftPupil"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Neuro"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="neuro"
				/>

				<Text style={styles.evat(watch, 'FC', heartRateTable)}>
					Cardio:
					{resultRateLevel(15, parseInt(watch('FC')) || 0, heartRateTable)}
				</Text>

				<Text style={styles.evat(watch, 'FR', breathingRateTable)}>
					Respiratory:
					{resultRateLevel(15, parseInt(watch('FR')) || 0, breathingRateTable)}
				</Text>

				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Nurse concern"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="nurseConcern"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							keyboardType="numeric"
							placeholder="Family concern"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="familyConcern"
				/>

				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={handleSubmit(onSubmit)}
				>
					<Text style={styles.ButtonText}>Save</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonNotification}
					onPress={() => navigation.navigate('DoctorsCards')}
				>
					<Text style={styles.texNotification}>See Doctors</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</KeyboardAwareScrollView>
		</ImageBackground>
    </View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderColor: 'gray',
		width: '80%',
		borderWidth: 1,
		borderRadius: 10,
		padding: 15,
		margin: 20,
	},
	picar: {
		borderColor: 'gray',
		width: '80%',
		borderWidth: 1,
		borderRadius: 10,
		padding: 3,
		margin: 20,
	},
	inputRed1: {
		width: "100%",
		height: 60,
		fontSize: "20%",
		fontWeight: "bold",
		marginRight: "50%",
		marginTop: "15%",
		marginBottom:"-6%",
		marginLeft:"32%",
	  },
	  container1: {
		flex: 1,
	  },
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
	
	buttonContainer: {
		backgroundColor: "#22f7d485",
		marginBottom: '5%',
		marginTop: '5%',
		paddingHorizontal: 50,
		paddingVertical: 10,
		alignItems: 'center',
		borderRadius: 8,
		width: '80%',
	},
	ButtonText: {
		color: '#020202',
		borderRadius: 10,
	},
	text: {
		borderColor: 'gray',
		width: '80%',
		borderWidth: 1,
		borderRadius: 10,
		padding: 15,
		margin: 20,
	},
	buttonNotification: {
		backgroundColor: "#43e5f78f",
		marginBottom: '5%',
		marginTop: '5%',
		paddingHorizontal: 50,
		paddingVertical: 10,
		alignItems: 'center',
		borderRadius: 8,
		width: '80%',
	},
	texNotification: {
		color: '#060606',
		borderRadius: 10,
	},
	evat: (watch, field, fn) => ({
		backgroundColor:
			COLORS[resultRateLevel(15, parseInt(watch(field)) || 0, fn)],
		borderColor: 'gray',
		width: '80%',
		borderWidth: 1,
		borderRadius: 2,
		padding: 15,
		margin: 20,
	}),
});

export default DailyForm;
