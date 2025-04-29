import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
// Titulos
import H2 from '../Titles/H2';

const screenWidth = Dimensions.get('window').width;
const SIZE = screenWidth * 0.6;
const STROKE_WIDTH = 20;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CENTER = SIZE / 2;

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
  ].join(' ');

  return d;
};

const SegmentedCircleChart = ({ title, data }) => {
  const animated = useRef(new Animated.Value(0)).current;

  // Calcular saldo disponible
  const ingresos = data.find(d => d.label === 'Ingresos')?.amount || 0;
  const gastos = data.find(d => d.label === 'Gastos')?.amount || 0;
  const saldo = ingresos - gastos;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.card}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.arrow}>{"<"}</Text>
        <H2 texto="Mes Actual" color="#000000" ></H2>
        <Text style={styles.arrow}>{">"}</Text>
      </View>

      {/* Gráfico */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Svg width={SIZE} height={SIZE}>
          <G rotation="-90" origin={`${CENTER}, ${CENTER}`}>
            {data.reduce((acc, item, index) => {
              const previous = acc.totalAngle;
              const angle = item.value * 360;

              acc.paths.push(
                <Path
                  key={index}
                  d={describeArc(CENTER, CENTER, RADIUS, previous, previous + angle)}
                  stroke={item.color}
                  strokeWidth={STROKE_WIDTH}
                  fill="none"
                  strokeLinecap="round"
                />
              );

              acc.totalAngle += angle;
              return acc;
            }, { paths: [], totalAngle: 0 }).paths}
          </G>
        </Svg>

        {/* Texto Centro */}
        <View style={styles.centerLabel}>
          <Text style={styles.centerAmount}>${saldo}</Text>
          <Text style={styles.centerText}>disponible</Text>
        </View>
      </View>

      {/* Leyenda */}
      <View style={styles.legend}>
        {data.map((item, index) => (
          <View style={styles.legendItem} key={index}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={styles.legendLabel}>{item.label}</Text>
            <Text style={styles.legendValue}>${item.amount}</Text>
          </View>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '80%',
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins', 

  },
  centerLabel: {
    position: 'absolute',
    top: '42%',
    alignItems: 'center',
  },
  centerAmount: {
    fontSize: 18,
    fontFamily: 'Poppins', 
    fontWeight: '500',
  },
  centerText: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Poppins', 
    fontWeight: '400',
  },
  legend: {
    marginTop: 20,
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 8,
    marginRight: 8,
  },
  legendLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'PoppinsRegular', 
    fontWeight: '400',
    color: '#010101', 
  },
  legendValue: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PoppinsMedium', 
    fontWeight: '500', 
  },
});

export default SegmentedCircleChart;