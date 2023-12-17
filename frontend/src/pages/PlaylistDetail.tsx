import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import Song from "../components/Song/Song";
import { useEffect, useState } from "react";
import { fetchPlaylistSongs } from "../api/fetchPlaylistSongs";
import { SongInterface } from "../../interfaces";

const homeIcon = require('../assets/icons/home-icon.png');

const PlaylistDetail = ({ navigation, route }: any) => {
    const { id, name, date } = route.params;
    const [songs, setSongs] = useState<SongInterface | []>([])

    useEffect(() => {
        fetchSongs()
    }, []);

    const fetchSongs = async () => {
        const playlistSongs = await fetchPlaylistSongs(id);
        console.log(playlistSongs);
        
        setSongs(playlistSongs);
        
    }
    return (
        <View style={styles.pageWrapper}>
            <View style={styles.playlistInfo} >
                <Image style={styles.playlistImage} source={homeIcon}/>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.songList}>
                <Pressable onPress={() => console.log(songs)}>
                    <Song />
                    </Pressable>
                <Song />
                <Song />
                <Song />
                <Song />
                <Song />
                <Song />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    playlistInfo: {
        alignItems: 'center',
        marginBottom: 24
    },
    playlistImage: {
        width: 100,
        height: 100,
        backgroundColor: '#D9D9D9',
        marginBottom: 12
    },
    pageWrapper: {
        paddingHorizontal: 18,
        paddingTop: 29,
        width: '100%',
    },
    songList: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        minHeight: 460,
        gap: 9
    },
    title: {
        fontSize: 12,
        color: '#ffffff'
    },
    date: {
        fontSize: 10,
        color: '#ffffff'
    }
});

export default PlaylistDetail;