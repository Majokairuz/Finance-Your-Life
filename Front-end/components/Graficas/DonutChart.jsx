import { View, Text,StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import H1 from '../Titles/H1';

const PieChartCard = ({title}) => {
  const data = [
    { value: 30, color: '#22c55e', text: 'Ingresos' },
    { value: 30, color: '#f97316', text: 'Ahorro' },
    { value: 40, color: '#3b82f6', text: 'Gastos' },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        {title}
      </Text>
      <PieChart
        data={data}
        donut
        showText
        textColor="black"
        radius={100}
        innerRadius={60}
        centerLabelComponent={() => {
          return (
            <View style={{ alignItems: 'center' }}>

            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',

    },



});



export default PieChartCard;