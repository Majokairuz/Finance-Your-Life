import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
// Titulos
import Cuerpo from '../../components/Titles/Cuerpo';

const MonthlySummaryChart = ({ data }) => {
  return (
    <View style={styles.container}>
      <Cuerpo texto="Resumen del Mes" fontSize={18}></Cuerpo>

      <View style={styles.content}>
        <PieChart
          data={data}
          donut
          showText={false}
          focusOnPress={false}
          radius={70}
          innerRadius={60}
          centerLabelComponent={() => null}
        />

        <View style={styles.legend}>
          {data.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: item.color }]} />
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MonthlySummaryChart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom:20,
  },
  legend: {
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    gap: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});