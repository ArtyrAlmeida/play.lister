import { FlatList, StyleSheet, View } from "react-native";
import MainPlaylist from "../components/Playlist/MainPlaylist";
import { useEffect, useState } from "react";
import { fetchPlaylists } from "../api/fetchPlaylists";
import { PlaylistInterface } from "../../interfaces";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InitialPage = ({navigation}: any) => {
    const [playlists, setPlaylists] = useState<PlaylistInterface[] | []>([]);
    const [user, setUser] = useState<any>();
    useEffect(() => {
        AsyncStorage.getItem("@user").then((user):any => {
            const json = JSON.parse(user!);
            console.log(json)
            setUser(json);
        }).catch((error) => {
            console.log(error)
        })
        updatePlaylists();
    }, []);

    const updatePlaylists = async () => {
        const playlists = await fetchPlaylists();
        setPlaylists(playlists);
    }

    const handlePlaylistPress = (id: string, name: string, date: string) => {
        navigation.navigate('PlaylistDetail', { id, name, date });
    }

    return (
        <>
            <Header userName={user && user.name} navigation={navigation}/>
            <View style={styles.pageWrapper}>
                <FlatList
                        keyExtractor={item => item._id as string} 
                        data={playlists}
                        renderItem={({item}) => <MainPlaylist name={item.name} songs={item.songs} date={item.createdAt} onPlaylistPress={handlePlaylistPress} id={item._id as string} />}
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