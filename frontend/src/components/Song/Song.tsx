import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const userIcon = require('../../assets/icons/user-icon.png');
const homeIcon = require('../../assets/icons/home-icon.png');

const Song = (props: any) => {
    return (
        <View style={styles.playlist}>
            <Image style={styles.playlistImage} source={homeIcon} />
            <View>
                <Text style={styles.header}>{props.titulo}</Text>
                <Text style={styles.secondaryText}>{props.artista}</Text>
                <Text style={styles.additionalInfo}>{props.album}</Text>
                <Text style={styles.additionalInfo}>{props.genero}</Text>
            </View>
            <Text style={styles.songLength}>05:40</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    playlist: {
        flex: 0,
        flexDirection: 'row',
        padding: 7,
        height: 83,
        backgroundColor: '#50037E',
        borderRadius: 5
    },
    header: {
        fontSize: 18,
        color: '#ffffff',
    },
    secondaryText: {
        fontSize: 12,
        color: '#ffffff'
    },
    additionalInfo: {
        fontSize: 10,
        color: '#ffffff'
    },
    playlistImage: {
        height: 71,
        width: 71,
        backgroundColor: 'white',
        marginRight: 9
    },
    songLength: {
        position: 'relative',
        top: 58,
        right: -148,
        borderRadius: 100,
        fontSize: 10,
        color: '#ffffff'
    }
})

export default Song;