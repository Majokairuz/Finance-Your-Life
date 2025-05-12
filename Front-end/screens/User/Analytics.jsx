import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
// Titulos
import H1 from "../../components/Titles/H1";
// Botones

// Graficas
import MonthlySummaryChart from "../../components/Graficas/MontlySummaryChart";

const Analytics = () => {
  const data = [
    { value: 1600000, color: "#0057FF", label: "Ingresos" },
    { value: 320000, color: "#00D084", label: "Ahorro" },
    { value: 600000, color: "#FFC34D", label: "Gastos Fijos" },
    { value: 300000, color: "#FF914D", label: "Gastos Variables" },
  ];
  return (
    <View style={styles.container}>
      <H1 texto="Presupuesto Mensual" color="#FFFFFF"></H1>
      <View style={styles.container_1}>
        {/* Gráfico circular */}
        <MonthlySummaryChart data={data} />
        {/* Consejo del día */}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#5271FF",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 60,
  },
  container_1: {
    width: "100%",
  },
});
export default Analytics;
