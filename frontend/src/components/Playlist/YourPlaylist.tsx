import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const homeIcon = require('../../assets/icons/home-icon.png');

interface YourPlaylistProps {
    name: string;
    songs: string[];
    date: string;
    id: string;
    author: string;
    onPlaylistPress: (id: string, name: string, date: string) => void;
}

const YourPlaylist = (props: YourPlaylistProps) => {
    return (
        <Pressable onPress={() => props.onPlaylistPress(props.id, props.name, props.date)}>
            <View>
                <View style={styles.playlist}>
                    <Image style={styles.playlistImage} source={homeIcon} />
                    <View>
                        <View style={styles.textArea}>
                            <Text style={styles.header}>{props.name}</Text>
                            <Text style={styles.secondaryText}>{props.songs.length} Musicas</Text>
                        </View>
                        <Text style={styles.secondaryText}>Postado em: {props.date}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    playlist: {
        flex: 0,
        flexDirection: 'row',
        borderRadius: 5,
        marginBottom: 15
    },
    header: {
        fontSize: 18,
        color: '#ffffff',
    },
    secondaryText: {
        fontSize: 12,
        color: '#ffffff'
    },
    playlistImage: {
        height: 86,
        width: 86,
        backgroundColor: 'white',
        marginRight: 8,
        borderRadius: 20
    },
    textArea: {
        marginBottom: 18
    }
})

export default YourPlaylist;