import { TouchableOpacity,Text,View,StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// iconos
import homeIcon from "../../assets/home.svg";
import MetricsIcon from "../../assets/bar-chart-outline.png";
import calendarIcon from "../../assets/calendar-outline.png";
import profileIcon from "../../assets/person-outline.png";
import Logo from '../../assets/Logo.png'

const Navbar = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Image source={Logo} width={24} height={24}></Image>
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Image source={homeIcon} width={40}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={MetricsIcon} width={40}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={calendarIcon}  width={40}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={profileIcon}  width={40}></Image>
                </TouchableOpacity>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F5F5F5",
        width: "100%",
        height: "100%",
    },
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

    },
    logo:{
        width: 300,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 0,
    },
    
});
export default Navbar;
