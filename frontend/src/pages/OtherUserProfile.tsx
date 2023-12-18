import { StyleSheet, View, Text, Image } from "react-native";
import YourPlaylist from "../components/Playlist/YourPlaylist";
import UserImage from "../components/UserImage";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";


const OtherUserProfile = (props: any) => {
    //findUserById no outro user -> return de name > userImage userName={result && result.name}
    const [user, setUser] = useState<any>();
    useEffect(() => {
        AsyncStorage.getItem("@user").then((user):any => {
            const json = JSON.parse(user!);
            setUser(json);
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <Header userName={user && user.name} navigation={props.navigation}/>
            <View style={styles.pageWrapper}>
                <UserImage />
                <View style={styles.playlistList}>
                    <Text style={styles.heading}>{props.userName}</Text>
                    <YourPlaylist />
                    <YourPlaylist />
                    <YourPlaylist />
                    <YourPlaylist />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        paddingHorizontal: 18,
        paddingTop: 29,
        width: '100%',
    },
    playlistList: {
        gap: 11
    },
    heading: {
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 15
    },
    horizontalLine: {
        borderWidth: 1,
        borderColor: '#ffffff',
        width: '90%',
        alignSelf: 'center'
    }
})

export default OtherUserProfile;