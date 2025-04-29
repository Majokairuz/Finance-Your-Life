import { View, Text, StyleSheet,ScrollView } from "react-native";
const Analytics = () => {
    return(
        <View style={styles.container}>
            <Text>Analytics</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 80,
        // position: 'relative',
        backgroundColor: '#5271FF',
        // overflow: 'hidden',
        flexDirection: 'column',
        // alignItems: 'center', 
        textAlign: 'center',
        gap: 50,
        display: 'flex',
        paddingLeft: 10, 
        paddingRight: 10,

    },
}
)
export default Analytics;