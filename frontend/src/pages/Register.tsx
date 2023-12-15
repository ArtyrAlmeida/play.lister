import { View, StyleSheet, ImageBackground } from "react-native"
import { RegisterForm } from "../components/Form/RegisterForm";
import bg from "../assets/images/Loginpagebg.png";

const Register = () => 
{
    return(
        <>
        <ImageBackground source={bg} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.container}>
                <RegisterForm/>
            </View>
        </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        backgroundColor: "#131112"
    }
  })

export { Register };