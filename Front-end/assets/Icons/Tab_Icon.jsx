// components/TabIcon.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarIcon from '../assets/Icons/calendar-outline';


const TabIcon = ({ Icon, focused }) => {
  return (
    <View style={focused ? styles.activeContainer : styles.inactiveContainer}>
      <Icon width={36} height={66} fill={focused ? '#ffffff' : '#000000'} />
    </View>
  );
};

const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: '#5271FF',
    borderRadius: 50,
    padding: 10,
  },
  inactiveContainer: {
    padding: 10,
  },
});

export default TabIcon;