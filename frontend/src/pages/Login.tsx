import { View, StyleSheet, ImageBackground } from "react-native"
import { LoginForm } from "../components/Form/LoginForm";
import bg from "../assets/images/Loginpagebg.png";

const Login = ({navigation}:any) => 
{
    return(
        <>
        <ImageBackground source={bg} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.imageContainer}>
                <View style={styles.logo}></View>
            </View>
            <View style={styles.container}>
                <LoginForm navigation={navigation}/>
            </View>
        </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
    },
    imageContainer: {
        flexDirection: "column",
        marginTop: 50,
    },
    logo: {
        marginTop: 0,
        width: 100,
        height: 100,
        backgroundColor: "#D9D9D9",
        borderRadius: 50,
    },
    backgroundImage: {
        flex: 1,
        backgroundColor: "#131112",
        alignItems: "center",
        justifyContent: "center",
    }
  })

export { Login };