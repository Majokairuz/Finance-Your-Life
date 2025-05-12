import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import User from '../../assets/Icons/User.svg';


const Icons_Button = ({ texto, onPress,backgroundColor,iconColor,name,color }) => {
  return (
    <Pressable style={styles.button} onPress={onPress} backgroundColor={backgroundColor || '#5271FF'}>
      <Ionicons name={name} size={30} color={iconColor} style={styles.iconLeft} />
        <Text style={[styles.text, {color: color || '#FFFFFF'}]}>{texto}</Text>
      <Ionicons name="chevron-down-outline" size={30} color={iconColor} style={styles.iconRight} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  iconLeft: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
  },
  iconRight: {
    marginLeft: 10,
  },
});

export default Icons_Button;