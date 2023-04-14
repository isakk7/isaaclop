import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
//Screens
import Home from "../page/Home";
import Settings from "../page/Settings";
import RedEvat from "../page/RedEvat";
import Formulario from "../page/formulario";
import DailyForm from "../page/DailyForm"
import AllPages from "../page/AllPages";
import PatientForm from "../page/PatientForm";
import SurgeryForm from "../page/SurgeryForm";
import PatientResult from "../page/PatientResult"
import CardForm from "../page/addPatient";
import DoctorCardList from "../page/DoctorInformation";
import DoctorCardForm from "../page/addDoctor";
import SurgeryResult from "../page/SurgeryResult";


const Tab = createBottomTabNavigator();


const MyTabs = () => {
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        
        tabBarStyle: {
            position: 'absolute',
             bottom: 10,
            left: 32,
            right: 32,
            elevation: 0,
            backgroundColor: 'rgba(213, 213, 213, 0)',
            borderRadius: 10,
            height: 70,
        }
    }}

    >
      
      <Tab.Screen
        name="SurgeryForm"
        component={SurgeryForm}
        options={{
          tabBarLabel: "SurgeryForm",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons
            //   name="home-circle-outline"
            //   size={30}
            //   color={color}
            // />
            <View style={{alignItems:'center', color: 'white',justifyContent: 'center', top:15}}>
            <MaterialCommunityIcons
                name="home-circle-outline"
                size={40}
                color={color}
                style={{ color }}
            />
            </View>
          ),
        }}
      />
      
{/* <Tab.Screen
        name="PatientForm"
        component={PatientForm}
        options={{
          tabBarLabel: "PatientForm",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 15,
            }}
          >
             <MaterialCommunityIcons
              name="clipboard-edit-outline"
              size={35}
              color={color}
              />
              </View>
          ),
        }}
        /> */}

              
{/* <Tab.Screen
        name="PatientResult"
        component={PatientResult}
        options={{
          tabBarLabel: "PatientResult",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 15,
            }}
          >
             <MaterialCommunityIcons
              name="book-edit"
              size={35}
              color={color}
              />
              </View>
          ),
        }}
        /> */}
        <Tab.Screen
        name="SurgeryResult"
        component={SurgeryResult}
        options={{
          tabBarLabel: "SurgeryResult",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 15,
            }}
          >
             <MaterialCommunityIcons
              name="plus-minus-box"
              size={35}
              color={color}
              />
              </View>
          ),
        }}
        />

      <Tab.Screen
       name="Ajust"
       component={Settings}
       options={{
         headerShown: false,
         tabBarLabel: "Ajustes",
         tabBarIcon: ({ color }) => (
           <View
             style={{
               alignItems: "center",
               justifyContent: "center",
               top: 15,
             }}
           >
             <MaterialCommunityIcons
               name="account-cog"
               size={35}
               color={color}
           
             />
           </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
};
export default MyTabs;
