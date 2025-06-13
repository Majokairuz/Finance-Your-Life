import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {View,StyleSheet,Button,Image,ScrollView,Text} from "react-native";


// Tus pantallas
import Dashboard from './User/Dashboard';
import Calendar from './User/Calendar';
import Settings from './User/Settings';
import Analytics from './User/Analytics'; // Crea este si quieres



// Importa los íconos SVG
import HomeIcon from '../assets/Icons/home-outline.svg';
import AnalyticsIcon from '../assets/Icons/bar-chart-outline.svg';
import CalendarIcon from '../assets/Icons/calendar-outline.svg';
import ProfileIcon from '../assets/Icons/person-outline.svg';


const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let IconComponent;

          switch (route.name) {
            case 'Dashboard':
              IconComponent = HomeIcon;
              break;
            case 'Analytics':
              IconComponent = AnalyticsIcon;
              break;
            case 'Calendar':
              IconComponent = CalendarIcon;
              break;
            case 'Settings':
              IconComponent = ProfileIcon;
              break;
          }

          return (
            <View style={focused ? styles.activeContainer : styles.inactiveContainer}>
              <IconComponent width={36} height={36} color={focused ? '#ffffff' : '#000000'} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Settings" component={Settings} />
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
  activeContainer: {
    backgroundColor: '#5271FF',
    borderRadius: 50,
    padding: 10,
  },
  inactiveContainer: {
    padding: 10,
  },
});
