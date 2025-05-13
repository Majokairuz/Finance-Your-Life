import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,ScrollView  } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
// Titulos
import H1 from "../../components/Titles/H1";
import H3 from "../../components/Titles/H3";
import Cuerpo from "../../components/Titles/Cuerpo";
// Botones
import ExpandableList from "../../components/Botones/ExpandibleList";
import ExpandableBudgetList from "../../components/Botones/ExpandableBudgetList";
// Graficas
import MonthlySummaryChart from "../../components/Graficas/MontlySummaryChart";

const Analytics = () => {
    const data = [
        { value: 1600000, color: "#0057FF", label: "Ingresos" },
        { value: 320000, color: "#00D084", label: "Ahorro" },
        { value: 600000, color: "#FFC34D", label: "Gastos Fijos" },
        { value: 300000, color: "#FF914D", label: "Gastos Variables" },
    ];

    // Lista despegable
    const ingresos = [
        { label: 'Salario', amount: "$4'000.000" },
        { label: 'Comisiones', amount: '$500.000' },
        { label: 'Freelance', amount: '$800.000' },
    ];
    const Ahorro = [
        { label: 'Ahorro de Emergencia', amount: "$200.000" },
        { label: 'Inversión', amount: '$200.000' },
        { label: 'Viaje Fin de Año', amount: '$400.000' },
    ];
    const GastosFijos = [
        { label: 'Arriendo', amount: "$1.000.000" },
        { label: 'Alimentación', amount: '$500.000' },
        { label: 'Salud', amount: '$100.000' },
    ];

    // Lista Despegable2
    const gastosVariables = [
        { label: 'Entretenimiento', spent: 500000, budget: 800000 },
        { label: 'Compras personales', spent: 300000, budget: 400000 },
        { label: 'Cumpleaños', spent: 200000, budget: 250000 },
      ];

    return (
        <SafeAreaProvider>
        <ScrollView style={styles.container}>
            <View style={styles.Titulo}> 
            <H1 texto="Presupuesto Mensual" color="#FFFFFF"></H1>
            </View>
             {/* Gráfico circular */}
             <MonthlySummaryChart data={data} />
            <View style={styles.container_1}>

                {/* Consejo del día */}
                <View style={{display:"flex", flexDirection:"row",  marginBottom:5}}>
                <Ionicons name="bulb-outline" size={30} color="#FFFFFF"></Ionicons>
                <H3 texto="Consejo del día." color="#FFFFFF"></H3>
                </View>
                <Cuerpo texto="Recuerda que el ahorro es la clave para alcanzar tus metas financieras." color="#FFFFFF" textAlign="left"></Cuerpo>
                {/* Titulo inferior */}
                <View style={{marginTop:20,}}></View>
                <H3 texto="Detalle por Categorias" color="#ffffff"></H3>

                {/* Lista despegable */}
                <ExpandableList title="Ingresos" data={ingresos} name="cash-outline"/>
                <ExpandableList title="Ahorro" data={Ahorro} name="bag-add-outline" backgroundColor="#5EC57E"/>
                <ExpandableList title="Gastos Fijos" data={GastosFijos} name="bag-check-outline" backgroundColor="#FFC542"/>

                {/* Lista Despegable2 */}
                <ExpandableBudgetList title="Gastos Variables" data={gastosVariables} />



            </View>
        </ScrollView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#5271FF",
        flexDirection: "column",
        paddingTop: 60,
        },
    Titulo:{
        paddingLeft:20,
        paddingRight:20,

    },

    container_1: {
        width: "100%",
        marginBottom: 200,
        paddingLeft:15,
        paddingRight:15,
    },
});
export default Analytics;
