import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { UserInterface } from "../../../interfaces";
import { fetchUser } from "../../api/fetchUser";

const userIcon = require('../../assets/icons/user-icon.png');
const homeIcon = require('../../assets/icons/home-icon.png');

interface MainPlaylistProps {
    id: string;
    name: string;
    songs: string[];
    date: string;
    author: string;
    image: string;
    onPlaylistPress: (id: string, name: string, date: string, userImage: string) => void;
    onProfilePress: (id: string) => void;
}


const MainPlaylist = (props: MainPlaylistProps) => {
    const [user, setUser] = useState<UserInterface | {name: string, image: string}>({ name: '', image: '' });
    useFocusEffect(React.useCallback(()=>{
        fetchPlaylistOwner()
    }, []))

    const fetchPlaylistOwner = async () => {
        const user = await fetchUser(props.author);
        setUser(user);
    }
    return (
        <Pressable onPress={() => props.onPlaylistPress(props.id, props.name, props.date, props.image)}>
            <View style={styles.playlist}>
                <Image style={styles.playlistImage} source={{ uri: props.image }} />
                <View>
                    <Text style={styles.header}>{props.name}</Text>
                    {user.name && <Text style={styles.secondaryText}>Criado por {user.name}</Text>}
                    <Text style={styles.privacy}>Público / {props.songs.length} faixas</Text>
                    <Text style={styles.secondaryText}>Publicado em {props.date}</Text>
                </View>
                <Pressable onPress={() => props.onProfilePress(props.author)}>
                    {user?.image && <Image style={styles.userImage} source={{ uri: user.image as string }} />}
                </Pressable>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    playlist: {
        flex: 0,
        flexDirection: 'row',
        padding: 7,
        height: 83,
        backgroundColor: '#50037E',
        borderRadius: 5,
        marginBottom: 11,
    },
    header: {
        fontSize: 18,
        color: '#ffffff',
    },
    secondaryText: {
        fontSize: 12,
        color: '#ffffff'
    },
    privacy: {
        fontSize: 10,
        color: '#ffffff'
    },
    playlistImage: {
        height: 71,
        width: 71,
        backgroundColor: 'white',
        marginRight: 9
    },
    userImage: {
        width: 29,
        height: 29,
        position: 'absolute',
        top: 40,
        right: -105,
        borderRadius: 100
    }
})

export default MainPlaylist;