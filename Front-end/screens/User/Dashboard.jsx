import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
// Botones
import IconButton from '../../components/Botones/Icon_Button';
// Header
import Header from '../../components/Header/header';
// Navbar

// Gráficas
import DonutChart from '../../components/Graficas/DonutChart';

const screenWidth = Dimensions.get('window').width;

const DashboardScreen = () => {
  const financialData = [
    { label: "Ingresos", value: 0.3, amount: 2500, color: "#5EC57E" },   // naranja
    { label: "Gastos", value: 0.5, amount: 1000, color: "#FF9359" },
    { label: "Ahorro", value: 0.2, amount: 500, color: "#5271FF" },
  ];
  return (
    <View style={styles.container}>
      
      {/* Header de usuario */}
      <Header texto="Nombre de usuario"></Header>
      <View style={styles.container_2}>

      {/* Gráfico circular */}
      <DonutChart title="Mes Actual"
        data={financialData} />
      {/* Botones de acción */}
      <View style={styles.container_3}>
        <IconButton texto="Inversión" name="bar-chart-outline" iconColor="#FFFFFF" size={30} backgroundColor="#5EC57E" width="50%"></IconButton>
        <IconButton texto="Ahorro" name="newspaper-outline" iconColor="#FFFFFF" size={30} backgroundColor="#FF9359"  width="50%"></IconButton>
      </View>
      </View>

      {/* Menú inferior */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#5271FF',
    alignItems: 'center',
  },
  container_2: {
    marginTop: "10%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: "5%",
    paddingLeft: 5,
    paddingRight:5,
  },
  container_3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    paddingLeft: 5,
    paddingRight: 15,
  },


});

export default DashboardScreen;