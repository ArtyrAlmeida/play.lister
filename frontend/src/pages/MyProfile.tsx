import { View, Text, StyleSheet } from "react-native"
import UserImage from "../components/UserImage"
import { ProfilePlaylists } from "../components/Playlist/ProfilePlaylists";
import { Button } from "../components/Button/Button";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const MyProfile = ({navigation}:any) => {

    const songs:any = [{url: "", _id: "1"},{url: "", _id: "2"},{url: "", _id: "3"},{url: "", _id: "4"},{url: "", _id: "5"},{url: "", _id: "6"},{url: "" , _id: "7"},{url: "" , _id: "8"},{url: "" , _id: "9"}];

    const handleLogout = () => {
        return
    }
    const [user, setUser] = useState<any>();
    useEffect(() => {
        AsyncStorage.getItem("@user").then((user):any => {
            const json = JSON.parse(user!);
            setUser(json);
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    return(
        <>
        <View style={styles.pageWrapper}>
            <View>
                <UserImage userName={user && user.name}/>
            </View>
            <View style={styles.playlistWrapper}>
                {songs.length > 0 ? <ProfilePlaylists songs={songs}></ProfilePlaylists> : <Text>Ainda não existe nada aqui</Text>}
            </View>

            <Button containerStyle={styles.overAllButton} textStyle={styles.loginButton} title="Sair" onPress={handleLogout}/>
        </View>
        <Footer navigation={navigation}></Footer>
        </>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        backgroundColor: "#131112",
        alignItems: "center",
        gap: 20
    },
    playlistWrapper: {
        width: "100%",
        maxWidth: 300,
        height: "100%",
        maxHeight: 300,
        overflow: "hidden",
        borderRadius: 30,
    },
    overAllButton:{
        backgroundColor: "#D9D9D9",
        width: 100,
        padding: 20,
        borderRadius: 20,
    },
    loginButton:{
        color: "red",
        textAlign: "right"
    }

})

export { MyProfile }