import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const iconMap = {
  'Entretenimiento': 'tv',
  'Compras personales': 'tshirt',
  'Cumpleaños': 'gift',
};

const ExpandableBudgetList = ({ title, data }) => {
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

      {/* Lista */}
      {expanded && (
        <View style={styles.itemsContainer}>
          {data.map((item, index) => {
            const iconName = iconMap[item.label] || 'question';
            const progress = item.spent / item.budget;

            return (
              <View key={index} style={styles.item}>
                <View style={styles.itemLeft}>
                  <View style={styles.iconCircle}>
                    <FontAwesome5 name={iconName} size={18} color="#FFA366" />
                  </View>
                  <Text style={styles.label}>{item.label}</Text>
                </View>
                <View style={styles.itemRight}>
                  <Text style={styles.spent}>{item.spent.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</Text>
                  <Text style={styles.budget}>{item.budget.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</Text>
                  <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: `${Math.min(progress * 100, 100)}%` }]} />
                  </View>
                </View>
              </View>
            );
          })}
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
    marginVertical: 6,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  iconCircle: {
    backgroundColor: '#FFF0E6',
    padding: 8,
    borderRadius: 25,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  itemRight: {
    paddingLeft: 36,
  },
  spent: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  budget: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 4,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: '#FFE0CC',
    borderRadius: 3,
  },
  progress: {
    height: 6,
    backgroundColor: '#FFA366',
    borderRadius: 3,
  },
});

export default ExpandableBudgetList;