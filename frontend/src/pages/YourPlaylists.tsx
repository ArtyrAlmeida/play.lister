import { StyleSheet, View, Text, FlatList } from "react-native";
import YourPlaylist from "../components/Playlist/YourPlaylist";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUserPlaylists } from "../api/fetchUserPlaylists";
import { PlaylistInterface } from "../../interfaces";
import Footer from "../components/Footer";
import Header from "../components/Header";

const YourPlaylists = (props: any) => {
    const [playlists, setPlaylists] = useState<PlaylistInterface[] | []>([]);
    const [user, setUser] = useState<any>();

    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem("@user").then((user):any => {
                const json = JSON.parse(user!);
                setUser(json);
                updatePlaylists(json.id);
            }).catch((error) => {
                console.log(error)
            })
        }, [])
    )

    const updatePlaylists = async (id: string) => {
        const playlists = await fetchUserPlaylists(id);
        setPlaylists(playlists);
    }

    const handlePlaylistPress = (id: string, name: string, date: string) => {
        props.navigation.navigate('PlaylistDetail', { id, name, date });
    }

    return (
        <>
            <Header userName={user && user.name} navigation={props.navigation}/>
            <View style={styles.pageWrapper}>
                <Text style={styles.heading}>Suas Playlists</Text>
                <View style={styles.playlistList}>
                    <FlatList
                        keyExtractor={item => item._id as string} 
                        data={playlists}
                        ItemSeparatorComponent={() => (<View style={styles.horizontalLine}></View>)}
                        renderItem={({item}) => <YourPlaylist onPlaylistPress={handlePlaylistPress} name={item.name} songs={item.songs} date={item.createdAt!} id={item._id as string} author={item.author} />}
                        />
                </View>
            </View>
            <Footer navigation={props.navigation}></Footer>
        </>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        paddingHorizontal: 20,
        paddingTop: 29,
        width: '100%',
        backgroundColor: "#131112",
    },
    playlistList: {
        gap: 11
    },
    heading: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30
    },
    horizontalLine: {
        borderWidth: 1,
        borderColor: '#ffffff',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 11
    }
})

export default YourPlaylists;