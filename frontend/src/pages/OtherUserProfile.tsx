import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import YourPlaylist from "../components/Playlist/YourPlaylist";
import UserImage from "../components/UserImage";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import { PlaylistInterface } from "../../interfaces";
import { fetchUserPlaylists } from "../api/fetchUserPlaylists";
import Footer from "../components/Footer";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";


const OtherUserProfile = (props: any) => {
    //findUserById no outro user -> return de name > userImage userName={result && result.name}
    const [playlists, setPlaylists] = useState<PlaylistInterface[] | []>([]);
    const [user, setUser] = useState<any>();
    useFocusEffect(React.useCallback(() => {
        AsyncStorage.getItem("@user").then((user):any => {
            const json = JSON.parse(user!);
            setUser(json);
            fetchPlaylists();
        }).catch((error) => {
            console.log(error)
        })
    }, []));

    const fetchPlaylists = async () => {
        const playlistResponse = await fetchUserPlaylists(props.route.params._id)
        setPlaylists(playlistResponse);
    } 

    const handlePlaylistPress = (id: string, name: string, date: string, image: string) => {
        props.navigation.navigate('PlaylistDetail', { id, name, date, image });
    }

    return (
        <>
            <Header image={user && user.image} userName={user && user.name} navigation={props.navigation}/>
            <View style={styles.pageWrapper}>
                <UserImage image={props.route.params.image} />
                <View style={styles.playlistList}>
                    <Text style={styles.heading}>{props.route.params.name}</Text>
                    <FlatList
                        keyExtractor={item => item._id as string} 
                        data={playlists}
                        renderItem={({item}) => <YourPlaylist onPlaylistPress={handlePlaylistPress} name={item.name} image={item.image} songs={item.songs} date={item.createdAt!} id={item._id as string} author={item.author} />}
                    />
                </View>
            </View>
            <Footer navigation={props.navigation}/>
        </>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        paddingHorizontal: 18,
        paddingTop: 29,
        width: '100%',
        backgroundColor: "#131112",
        flex: 1
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