import { FlatList, StyleSheet, View } from "react-native";
import MainPlaylist from "../components/Playlist/MainPlaylist";
import React, { useEffect, useState } from "react";
import { fetchPlaylists } from "../api/fetchPlaylists";
import { PlaylistInterface } from "../../interfaces";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUser } from "../api/fetchUser";
import { useFocusEffect } from "@react-navigation/native";

const InitialPage = ({navigation}: any) => {
    const [playlists, setPlaylists] = useState<PlaylistInterface[] | []>([]);
    const [user, setUser] = useState<any>();
    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem("@user").then((user):any => {
                const json = JSON.parse(user!);
                setUser(json);
                updatePlaylists();
            }).catch((error) => {
                console.log(error)
            })
        }, [])
    )
    const updatePlaylists = async () => {
        const playlists = await fetchPlaylists();
        setPlaylists(playlists);
    }

    const handlePlaylistPress = (id: string, name: string, date: string, image: string) => {
        navigation.navigate('PlaylistDetail', { id, name, date, image });
    }

    const handleProfilePress = async (id: string) => {
        const user = await fetchUser(id);
        
        navigation.navigate('OtherUserProfile', user)
    }

    return (
        <>
            <Header image={user && user.image} userName={user && user.name} navigation={navigation}/>
            <View style={styles.pageWrapper}>
                <FlatList
                    keyExtractor={item => item._id as string} 
                    data={playlists}
                    renderItem={({item}) => <MainPlaylist image={item.image} name={item.name} songs={item.songs} date={item.createdAt as string} onProfilePress={handleProfilePress} onPlaylistPress={handlePlaylistPress} id={item._id as string} author={item.author} />}
                />
            </View>
            <Footer navigation={navigation}/>
        </>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        paddingHorizontal: 20,
        paddingTop: 29,
        width: '100%',
        backgroundColor: '#131112',
        flex: 1
    }
    
})

export default InitialPage;