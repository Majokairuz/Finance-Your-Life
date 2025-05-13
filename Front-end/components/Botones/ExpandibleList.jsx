import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener esto instalado

const ExpandableList = ({ title, data,name,backgroundColor }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#FFFFFF"
        />
      </TouchableOpacity>

      {/* Lista de elementos */}
      {expanded && (
        <View style={styles.itemsContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.itemLeft}>
                <View style={[styles.iconCircle,{backgroundColor: backgroundColor || '#5271FF'}]}>
                  <Ionicons name={name} size={18} color="#ffffff" />
                </View>
                <Text style={styles.label}>{item.label}</Text>
              </View>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5271FF',
    borderRadius: 12,
    marginVertical: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  itemsContainer: {
    marginTop: 8,
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    padding: 8,
    borderRadius: 25,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  amount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
});

export default ExpandableList;