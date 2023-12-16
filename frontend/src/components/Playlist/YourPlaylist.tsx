import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const homeIcon = require('../../assets/icons/home-icon.png');

const MainPlaylist = (props: any) => {
    return (
        <View>
            <View style={styles.playlist}>
                <Image style={styles.playlistImage} source={homeIcon} />
                <View>
                    <View style={styles.textArea}>
                        <Text style={styles.header}>Pra curtir o verão todo</Text>
                        <Text style={styles.secondaryText}>X Musicas</Text>
                    </View>
                    <Text style={styles.secondaryText}>Postado em: XX/XX/XXXX</Text>
                </View>
            </View>
        </View>
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

export default MainPlaylist;