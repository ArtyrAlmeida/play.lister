import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const userIcon = require('../../assets/icons/user-icon.png');
const homeIcon = require('../../assets/icons/home-icon.png');

interface MainPlaylistProps {
    id: string;
    name: string;
    songs: string[];
    date: string;
    author: string;
    onPlaylistPress: (id: string, name: string, date: string) => void;
    onProfilePress: (id: string) => void;
}

const MainPlaylist = (props: MainPlaylistProps) => {
    return (
        <Pressable onPress={() => props.onPlaylistPress(props.id, props.name, props.date)}>
            <View style={styles.playlist}>
                <Image style={styles.playlistImage} source={homeIcon} />
                <View>
                    <Text style={styles.header}>{props.name}</Text>
                    <Text style={styles.secondaryText}>Criado por Usuário</Text>
                    <Text style={styles.privacy}>Público / {props.songs.length} faixas</Text>
                    <Text style={styles.secondaryText}>Publicado em {props.date}</Text>
                </View>
                <Pressable onPress={() => props.onProfilePress(props.author)}>
                    <Image style={styles.userImage} source={userIcon} />
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