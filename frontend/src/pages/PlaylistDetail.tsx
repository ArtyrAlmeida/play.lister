import { Image, View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import Song from "../components/Song/Song";
import { useEffect, useState } from "react";
import { fetchPlaylistSongs } from "../api/fetchPlaylistSongs";
import { SongInterface } from "../../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";

const homeIcon = require('../assets/icons/home-icon.png');

const PlaylistDetail = ({ navigation, route }: any) => {
    const { id, name, date, image } = route.params;
    const [songs, setSongs] = useState<SongInterface[] | []>([])
    const [user, setUser] = useState<any>();

    const fetchSongs = async () => {
        const playlistSongs = await fetchPlaylistSongs(id);

        setSongs(playlistSongs);
    }

    useFocusEffect(React.useCallback(() => {
        AsyncStorage.getItem("@user").then((user): any => {
            const json = JSON.parse(user!);
            setUser(json);
            fetchSongs()
        }).catch((error) => {
            console.log(error)
        })
    }, []));

    return (
        <>
            <Header image={user && user.image} userName={user && user.name} navigation={navigation}/>
            <View style={styles.pageWrapper}>
                <View style={styles.playlistInfo} >
                    <Image style={styles.playlistImage} source={{ uri: image }} />
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View>
                    <FlatList
                        keyExtractor={item => item._id as string}
                        data={songs}
                        renderItem={({item}) => <Song name={item.name} description={item.description} length={item.length} author={item.author} imagem={item.image} />}
                        style={styles.songList}

                    />
                </View>
            </View>
            <Footer navigation={navigation}></Footer>
        </>
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
        backgroundColor: "#131112",
        flex: 1
    },
    songList: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        minHeight: 460,
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