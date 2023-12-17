import { FlatList, StyleSheet, View } from "react-native";
import MainPlaylist from "../components/Playlist/MainPlaylist";
import { useEffect, useState } from "react";
import { fetchPlaylists } from "../api/fetchPlaylists";
import { PlaylistInterface } from "../../interfaces";

const InitialPage = (props: any) => {
    const [playlists, setPlaylists] = useState<PlaylistInterface[] | []>([]);
    useEffect(() => {
        updatePlaylists();
    }, []);

    const updatePlaylists = async () => {
        const playlists = await fetchPlaylists();
        setPlaylists(playlists);
    }

    return (
        <View style={styles.pageWrapper}>
            <FlatList
                    keyExtractor={item => item._id as string} 
                    data={playlists}
                    renderItem={({item}) => <MainPlaylist name={item.name} songs={item.songs} date={item.createdAt} />}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        paddingHorizontal: 20,
        paddingTop: 29,
        width: '100%',
    }
    
})

export default InitialPage;