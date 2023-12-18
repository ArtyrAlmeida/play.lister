import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native"

const ProfilePlaylists = ({songs, navigation}:any) => {

    const hadlePlaylistSelection = ({_id}: any) => {
        navigation.navigate("EditPlaylist", { _id })
    }

    const handleViewMore = () => {
        navigation.navigate("YourPlaylist")
    }

    return(
        <View style={styles.playlistsWrapper}>
            {songs.length >= 9 ? 
            songs.slice(0,8).map((song:any) => {
                return(
                    <TouchableOpacity key={song._id} onPress={() => {hadlePlaylistSelection(song._id)}}>
                        <Image source={{uri: song.image}} style={styles.playlistCape}/>
                    </TouchableOpacity>
                )
            }) : 
            songs.map((song:any) => {
                return(
                    <TouchableOpacity key={song._id} onPress={() => {hadlePlaylistSelection(song._id)}}>
                        <Image source={{uri: song.image}} style={styles.playlistCape}/>
                    </TouchableOpacity>
                )
            })}
            {songs.length >= 9 ? 
            <TouchableOpacity key={songs[8]._id} onPress={handleViewMore}>
                <Text style={styles.playlistCape}>Ver mais</Text>
            </TouchableOpacity> :
            null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    playlistsWrapper:{
        flex: 1,
        maxWidth: 300,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        borderRadius: 40,
        backgroundColor: "#D9D9D9",
        gap: 5,
        padding: 30
    },
    playlistCape:{
        width: 75,
        height: 75,
        borderRadius: 30,
        backgroundColor: "#131112",
        textAlign: "center",
        textAlignVertical: "center",
        color: "#FFF"
    }
})

export { ProfilePlaylists }