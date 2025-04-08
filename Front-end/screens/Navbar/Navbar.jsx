import { TouchableOpacity,Text,View,StyleSheet,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// iconos
import { Ionicons } from "@expo/vector-icons";
import homeIcon from "../../assets/home.png";
import MetricsIcon from "../../assets/bar-chart-outline.png";
import calendarIcon from "../../assets/calendar-outline.png";
import profileIcon from "../../assets/person-outline.png";


const Navbar = ({navigation}) => {
    
    return (
        <View style={styles.navbar}>
                <TouchableOpacity>
                    <Ionicons name="home-outline" size={40} color="#5271FF" onPress={() => navigation.navigate('Dashboard')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="bar-chart-outline" size={40} color="#5271FF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="calendar-outline" size={40} color="#5271FF" onPress={() => navigation.navigate('Calendar')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="person-outline" size={40} color="#5271FF" />
                </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({

    navbar: {
        width: "100%",
        height: 90,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFFFFF",
        paddingLeft: 36, 
        paddingRight: 36, 
        paddingTop: 23, 
        paddingBottom: 23, 
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)', 
        overflow: 'hidden', 
        borderRadius: 20, 
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,

    },

    
});
export default Navbar;
