import { StyleSheet, View, Text } from "react-native";
import YourPlaylist from "../components/Playlist/YourPlaylist";

const YourPlaylists = (props: any) => {
    return (
        <View style={styles.pageWrapper}>
            <Text style={styles.heading}>Suas Playlists</Text>
            <View style={styles.playlistList}>
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
                <YourPlaylist />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        paddingHorizontal: 20,
        paddingTop: 29,
        width: '100%',
    },
    playlistList: {
        gap: 11
    },
    heading: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30
    }
})

export default YourPlaylists;