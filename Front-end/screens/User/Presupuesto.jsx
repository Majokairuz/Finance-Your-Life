import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

const PresupuestoMensual = () => {
  const data = [
    { x: 'Transporte', y: 30 },
    { x: 'Ocio', y: 20 },
    { x: 'Alimentación', y: 20 },
    { x: '', y: 15 },
    { x: '', y: 15 },
  ];

  const colors = ['#FFB6B6', '#FFA26B', '#6B7BFF', '#7AE582', '#FF5F5F'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presupuesto Mensual</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.month}>Mes Actual</Text>
        <VictoryPie
          data={data}
          innerRadius={80}
          colorScale={colors}
          labels={({ datum }) => `${datum.y}%`}
          style={{
            labels: { fill: 'white', fontSize: 14, fontWeight: 'bold' },
          }}
          width={250}
          height={250}
        />
      </View>
      <View style={styles.legend}>
        <Text style={[styles.legendText, { color: '#FFB6B6' }]}>● Transporte - 30%</Text>
        <Text style={[styles.legendText, { color: '#6B7BFF' }]}>● Alimentación - 20%</Text>
        <Text style={[styles.legendText, { color: '#FFA26B' }]}>● Ocio - 20%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F7CFE',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  month: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  legend: {
    marginTop: 20,
    width: '100%',
  },
  legendText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PresupuestoMensual;
