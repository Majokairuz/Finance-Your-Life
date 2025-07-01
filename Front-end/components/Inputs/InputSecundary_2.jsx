import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Input_2 = ({ label, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="#aaa" />
    </TouchableOpacity>
  );
};

export default Input_2;

const styles = StyleSheet.create({
  container: {
   padding:20,
   backgroundColor:'#fff',
   width:'100%',
   height:'50px',
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   borderRadius:20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontFamily: "Poppins",
    fontWeight: "600",
  },
});