import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import Calendares from "../../components/Calendares";
// Titulos
import H1 from "../../components/Titles/H1";
import H3 from "../../components/Titles/H3";
// Botones
import ButtonNaranja from "../../components/Botones/ButtonNaranja";
import ButtonVerde from "../../components/Botones/ButtonVerde";
import Secundary_2 from "../../components/Botones/Secundary_2";
import BotonAgregar from "../../components/Botones/BotonAgregar";
import Navbar from "../Navbar/Navbar";




const Calendario = () => {
    const [selected, setSelected] = useState("");

    return (
        <View style={styles.container}>
            <H1 texto="Calendario" color="#FFFFFF" textAlign="center" />
            <Calendar
                style={styles.calendar}
                theme={{
                    backgroundColor: "#ffffff",
                    calendarBackground: "#ffffff",
                    textSectionTitleColor: "#000",
                    selectedDayBackgroundColor: "#5271FF", // Azul para fechas resaltadas
                    selectedDayTextColor: "#ffffff",
                    todayTextColor: "#FF9359", // Color naranja para el día actual
                    dayTextColor: "#2d4150",
                    arrowColor: "#4A90E2",
                    monthTextColor: "#000",
                }}
                markedDates={{
                    "2025-01-05": { selected: true, selectedColor: "#5EC57E" }, // Verde
                    "2025-01-06": { selected: true, selectedColor: "#FF9359" }, // Naranja
                    "2025-01-16": { selected: true, selectedColor: "#5271FF" }, // Azul
                    "2025-02-20": { selected: true, selectedColor: "#4CAF50" }, // Verde
                    "2025-03-24": { selected: true, selectedColor: "#4A90E2" }, // Azul
                    "2025-01-28": { selected: true, selectedColor: "#4A90E2" }, // Azul
                }}
                onDayPress={(day) => setSelected(day.dateString)}
            />

            <H3 texto="Movimientos Diarios" color="#FFFFFF" />
            <ButtonNaranja texto="$ingreso y Fecha"  />
            <ButtonVerde texto="$ahorro y fecha" />
            <Secundary_2 texto="$Gasto"/>
            <BotonAgregar />

            



            <Navbar></Navbar>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 50,
        // position: 'relative',
        backgroundColor: '#5271FF',
        // overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems: 'center', 
        textAlign: 'center',
        gap: 15,
        display: 'flex',
        paddingLeft: 10, 
        paddingRight: 10,

    },

    title: {
        fontSize: 40,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 15,
    },

    calendar: {
        paddingTop: 20,
        paddingBottom: 20,
        background: 'white',
        borderRadius: 20,
    },

    selectedText: {
        marginTop: 1,
        fontSize: 16,
        color: "#ffffff",
    },



});


export default Calendario;
