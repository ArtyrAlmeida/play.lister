import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const userIcon = require('../../assets/icons/user-icon.png');
const homeIcon = require('../../assets/icons/home-icon.png');

const Song = (props: any) => {
    return (
        <View style={styles.song}>
            <Image style={styles.songImage} source={homeIcon} />
            <View>
                <Text style={styles.header}>{props.name}</Text>
                <Text style={styles.secondaryText}>{props.description}</Text>
                <Text style={styles.additionalInfo}>{props.length}</Text>
            </View>
            <Text style={styles.songLength}>{props.author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    song: {
        flex: 0,
        flexDirection: 'row',
        padding: 7,
        height: 83,
        backgroundColor: '#50037E',
        borderRadius: 5,
        marginBottom: 9
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
    songImage: {
        height: 71,
        width: 71,
        backgroundColor: 'white',
        marginRight: 9
    },
    songLength: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        borderRadius: 100,
        fontSize: 10,
        color: '#ffffff'
    }
})

export default Song;