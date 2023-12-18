import { View, Text, StyleSheet } from "react-native"
import UserImage from "../components/UserImage"
import { ProfilePlaylists } from "../components/Playlist/ProfilePlaylists";
import { Button } from "../components/Button/Button";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Map } from "../components/Map/Map";
import Header from "../components/Header";
import { fetchUserPlaylists } from "../api/fetchUserPlaylists";
import { useAuthContext } from "../hooks/useAuthContext";

const loggout = require("../assets/icons/loggout.png")

const MyProfile = ({navigation}:any) => {

    const handleLogout = () => {
        AsyncStorage.setItem("@user", "").then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            console.log(error)
        })
    }

    const context = useAuthContext();
    const userContext = JSON.parse(context.user)
    
    const [user, setUser] = useState<any>(userContext);
    const [playlists, setPlaylists] = useState<any[]>();

    useEffect(() => {
        fetchUserPlaylists(user.id)
        .then((playlists) => {
            setPlaylists(playlists)
        })
    },[user])

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
                {(playlists && playlists.length > 0) ? <ProfilePlaylists songs={playlists} navigation={navigation}></ProfilePlaylists> : <Text style={styles.playlistText}>Ainda não existe nada aqui</Text>}
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