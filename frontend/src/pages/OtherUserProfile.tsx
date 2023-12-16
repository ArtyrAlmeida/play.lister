import { StyleSheet, View, Text, Image } from "react-native";
import YourPlaylist from "../components/Playlist/YourPlaylist";
import UserImage from "../components/UserImage";


const OtherUserProfile = (props: any) => {
    return (
        <View style={styles.pageWrapper}>
            <UserImage />
            <View style={styles.playlistList}>
                <Text style={styles.heading}>Últimas Postagens</Text>
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
        paddingHorizontal: 18,
        paddingTop: 29,
        width: '100%',
    },
    playlistList: {
        gap: 11
    },
    heading: {
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 15
    },
    horizontalLine: {
        borderWidth: 1,
        borderColor: '#ffffff',
        width: '90%',
        alignSelf: 'center'
    }
})

export default OtherUserProfile;