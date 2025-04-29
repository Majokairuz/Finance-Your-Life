import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {View,StyleSheet,Button,Image,ScrollView,Text} from "react-native";


// Tus pantallas
import Dashboard from './User/Dashboard';
import Calendar from './User/Calendar';
import Ingresos from './User/Ingresos';
import Analytics from './User/Analytics'; // Crea este si quieres

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
<Tab.Navigator
  initialRouteName="Dashboard"
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBar,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Dashboard') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Analytics') {
        iconName = focused ? 'bar-chart' : 'bar-chart-outline';
      } else if (route.name === 'Calendar') {
        iconName = focused ? 'calendar' : 'calendar-outline';
      } else if (route.name === 'Ingresos') {
        iconName = focused ? 'person' : 'person-outline';
      } 

      return (
        <Ionicons
          name={iconName}
          size={29}
          color={focused ? '#5271FF' : '#000000'}
        />
      );
    },
  })}
>
<Tab.Screen name="Dashboard" component={Dashboard} />
<Tab.Screen name="Analytics" component={Analytics} />
<Tab.Screen name="Calendar" component={Calendar} />
<Tab.Screen name="Ingresos" component={Ingresos} />

</Tab.Navigator>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',






  },
});
