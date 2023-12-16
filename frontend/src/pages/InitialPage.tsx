import { StyleSheet, View } from "react-native";
import MainPlaylist from "../components/Playlist/MainPlaylist";

const InitialPage = (props: any) => {
    return (
        <View style={styles.pageWrapper}>
            <View style={styles.playlistList}>
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
                <MainPlaylist />
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
    }
    
})

export default InitialPage;