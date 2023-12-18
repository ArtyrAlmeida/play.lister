import { View, Text, StyleSheet } from "react-native"
import UserImage from "../components/UserImage"
import { ProfilePlaylists } from "../components/Playlist/ProfilePlaylists";
import { Button } from "../components/Button/Button";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Map } from "../components/Map/Map";
import Header from "../components/Header";

const loggout = require("../assets/icons/loggout.png")

const MyProfile = ({navigation}:any) => {

    const songs:any = [{url: "", _id: "1"},{url: "", _id: "2"},{url: "", _id: "3"},{url: "", _id: "4"},{url: "", _id: "5"},{url: "", _id: "6"},{url: "" , _id: "7"},{url: "" , _id: "8"},{url: "" , _id: "9"}];

    const handleLogout = () => {
        AsyncStorage.setItem("@user", "").then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            console.log(error)
        })
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
        <Header userName={user && user.name} navigation={navigation}/>
        <View style={styles.pageWrapper}>
            <View>
                <UserImage userName={user && user.name}/>
            </View>
            <View style={styles.mapWrapper}>
                <Text style={styles.playlistText}>Suas Playlists</Text>
                <Map/>
            </View>
            <View style={styles.playlistWrapper}>
                {songs.length > 0 ? <ProfilePlaylists songs={songs}></ProfilePlaylists> : <Text style={styles.playlistText}>Ainda não existe nada aqui</Text>}
            </View>

            <Button containerStyle={styles.overAllButton} textStyle={styles.loginButton} title="Sair" onPress={handleLogout} icon={loggout}/>
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
    mapWrapper: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 50,
    },
    playlistText: {
        color: "white"
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
        flexDirection: "row",
        width: 100,
        padding: 20,
        gap: 20,
        borderRadius: 20,
    },
    loginButton:{
        color: "red",
    }

})

export { MyProfile }