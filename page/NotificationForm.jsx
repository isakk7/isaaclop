import { useState, useEffect, useRef } from 'react';
import {
	Text,
	View,
	Platform,
	TextInput,
	SafeAreaView,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import axios from 'axios';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

async function registerForPushNotificationsAsync() {
	let token;
	if (Device.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== 'granted') {
			alert('Failed to get push token for push notification!');
			return;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
		console.log(token);
	} else {
		alert('Must use physical device for Push Notifications');
	}

	if (Platform.OS === 'android') {
		Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: '#FF231F7C',
		});
	}
	return token;
}

export default function App() {
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();
	const [text, onChangeText] = React.useState('');
	const [number, onChangeNumber] = React.useState('');

	useEffect(() => {
		registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

		notificationListener.current =
			Notifications.addNotificationReceivedListener(notification => {
				setNotification(notification);
			});

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener(response => {
				console.log(response);
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current,
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	return (
		<View style={styles.container1}>
        <ImageBackground
          source={require("../assets/back4.jpeg")}
          resizeMode="cover"
          style={styles.image1}
        >
		<KeyboardAwareScrollView>
		<View>
            <Text style={styles.inputRed1} >Notifications</Text>
          </View>
			<SafeAreaView style={styles.container}>
				<TextInput
					style={styles.input1}
					onChangeText={onChangeText}
					value={text}
					placeholder="Titulo"
					keyboardType="text"
				/>
				<TextInput
					style={styles.input}
					onChangeText={onChangeNumber}
					value={number}
					placeholder="Descripción"
					keyboardType="text"
					multiline={true}
					numberOfLines={10}
				/>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					<TouchableOpacity
						style={styles.btnSend}
						title="Enviar Notificación"
						color="white"
						onPress={async () => {
							try {
								await axios.post(
									process.env.REACT_APP_URL + '/api/v1/notification/',
									{
										title: 'hola',
										description: 'hola',
										idPatient: '63e26f1ed1bd2c776c09aa7e',
										idTransmitter: '63b1f362e650d1d3e3dfe5ae',
										idDoctor: '63b59a69775e132b0acec6e6',
									},
								);
							} catch (error) {
								console.log(error.response.data.msg);
							}
						}}
					>
						<Text style={styles.textSend}>Enviar Notificacion</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</KeyboardAwareScrollView>
		</ImageBackground>
      </View>
	);
}

const styles = StyleSheet.create({
	input1: {
		height: 40,
		margin: 40,
		marginTop: 90,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		fontSize: 10,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	container1: {
		flex: 1,
	  },
	  image1: {
		flex: 1,
		justifyContent: "center",
	  },
	input: {
		height: 130,
		width: '80%',
		margin: 40,
		marginTop: 1,
		borderWidth: 1,
		borderRadius: 10,
		fontSize: 10,
		justifyContent: 'center',
		textAlign: 'center',
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
	ButtonText: {
		color: '#ffffff',
		borderRadius: 10,
	},
	buttonContainer: {
		backgroundColor: 'green',
		marginBottom: '25%',
		marginTop: '5%',
		margin: 40,

		paddingHorizontal: 50,
		paddingVertical: 10,
		alignItems: 'center',
		borderRadius: 8,
		width: '80%',
	},
	container: {
		width: '85%',
		margin: '8%',
		marginTop: 100,
		borderRadius: 10,
		backgroundColor: "rgba(216, 216, 216, 0.422)",
		padding: '1%',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	},
	btnSend: {
		backgroundColor: "#22f7d485",
		width: '70%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		margin: '4%',
	},
	textSend: {
		color: '#040404',
	},
});
