import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react';
import MyTabs from "../navigation/MainStack";
import LoginPage from "../page/LoginPage";
import Register from "../page/Register";
import DailyForm from "../page/DailyForm";
import Notifications from "../page/NotificationForm";
import PatientInformation from "../page/PatientInformation";
import DoctorsCardsNotification from "../page/DoctorsCardsNotification";
import Map from "../page/maps";
import Formulario from "../page/formulario";
import Detail from "../page/Detail";
import LoginScreen from "../page/LoginScreen";
import HomeScreen from "../page/Settings";
import CardForm from "../page/addPatient";
import DoctorCardForm from "../page/addDoctor";
import DoctorList from "../page/DoctorInformation";
import CardUpdateForm from "../page/CardUpdateForm";
import PatientForm from "../page/PatientForm";
import PatientResult from "../page/PatientResult";
import SurgeryForm from "../page/SurgeryForm";
import SurgeryResult from "../page/SurgeryResult"
import DoctorUpdate from "../page/DoctorUpdate";
import PatientResultUpdate from "../page/PatientResultUpddate";
import SurgeryResultUpdate from "../page/SurgeryResultUpdate";

const Stack = createNativeStackNavigator();

export default function Navigation () {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);

  const renderNoteScreen = props => <NoteScreen {...props} user={user} />;

  if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false}}
        />
        <Stack.Screen name="DailyForm" component={DailyForm}  options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications}  options={{ headerShown: true }} />
        <Stack.Screen name="Map" component={Map}  options={{ headerShown: false }} />
        <Stack.Screen name="Formulario" component={Formulario}  options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail}  options={{ headerShown: false }} />

        <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="CardForm" component={CardForm}  options={{ headerShown: false }} />
        <Stack.Screen name="DoctorCardForm" component={DoctorCardForm}  options={{ headerShown: false }} />
        <Stack.Screen name="DoctorList" component={DoctorList}  options={{ headerShown: false }} />
        <Stack.Screen name="CardUpdateForm" component={CardUpdateForm}  options={{ headerShown: false }} />
        <Stack.Screen name="PatientForm" component={PatientForm}  options={{ headerShown: false }} />
        <Stack.Screen name="PatientResult" component={PatientResult}  options={{ headerShown: false }} />
        <Stack.Screen name="SurgeryForm" component={SurgeryForm}  options={{ headerShown: false }} />
        <Stack.Screen name="SurgeryResult" component={SurgeryResult}  options={{ headerShown: false }} />
        <Stack.Screen name="DoctorUpdate" component={DoctorUpdate}  options={{ headerShown: false }} />
        <Stack.Screen name="PatientResultUpdate" component={PatientResultUpdate}  options={{ headerShown: false }} />
        <Stack.Screen name="SurgeryResultUpdate" component={SurgeryResultUpdate}  options={{ headerShown: false }} />
        
        <Stack.Screen
          name="PatientInformation"
          component={PatientInformation}
        />
        <Stack.Screen
          name="DoctorsCards"
          component={DoctorsCardsNotification}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};


