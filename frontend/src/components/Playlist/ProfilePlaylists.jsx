import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native"

const ProfilePlaylists = ({songs}) => {

    const hadlePlaylistSelection = () => {
        return
    }

    return(
        <View style={styles.playlistsWrapper}>
            {songs.length >= 9 ? 
            songs.slice(0,8).map((song) => {
                return(
                    <TouchableOpacity key={song._id} onPress={hadlePlaylistSelection}>
                        <Image source={song.url} style={styles.playlistCape}/>
                    </TouchableOpacity>
                )
            }) : 
            songs.map((song) => {
                return(
                    <TouchableOpacity key={song._id} onPress={hadlePlaylistSelection}>
                        <Image source={song.url} style={styles.playlistCape}/>
                    </TouchableOpacity>
                )
            })}
            {songs.length >= 9 ? 
            <TouchableOpacity key={songs[8]._id} onPress={hadlePlaylistSelection}>
                <Text style={styles.playlistCape}>Ver mais</Text>
            </TouchableOpacity> :
            <></>
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