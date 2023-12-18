import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native"

const ProfilePlaylists = ({playlists, navigation}:any) => {
    const hadlePlaylistSelection = (id: any) => {
        navigation.navigate("EditPlaylist", { id })
    }

    const handleViewMore = () => {
        navigation.navigate("YourPlaylist")
    }

    return(
        <View style={styles.playlistsWrapper}>
            {playlists.length >= 9 ? 
            playlists.slice(0,8).map((playlist:any) => {
                return(
                    <TouchableOpacity key={playlist._id} onPress={() => {hadlePlaylistSelection(playlist._id)}}>
                        <Image source={{uri: playlist.image}} style={styles.playlistCape}/>
                    </TouchableOpacity>
                )
            }) : 
            playlists.map((playlist:any) => {
                return(
                    <TouchableOpacity key={playlist._id} onPress={() => {hadlePlaylistSelection(playlist._id)}}>
                        <Image source={{uri: playlist.image}} style={styles.playlistCape}/>
                    </TouchableOpacity>
                )
            })}
            {playlists.length >= 9 ? 
            <TouchableOpacity key={playlists[8]._id} onPress={handleViewMore}>
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