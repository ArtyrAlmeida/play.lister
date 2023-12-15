import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const userIcon = require('../assets/icons/user-icon.png');
const homeIcon = require('../assets/icons/home-icon.png');

const MainPlaylist = (props: any) => {
    return (
        <View style={styles.playlist}>
            <Image style={styles.playlistImage} source={homeIcon} />
            <View>
                <Text style={styles.header}>Titulo</Text>
                <Text style={styles.secondaryText}>Criado por Usuário</Text>
                <Text style={styles.privacy}>Público / 10 faixas</Text>
                <Text style={styles.secondaryText}>Publicado em 10/10/2010</Text>
            </View>
            <Pressable>
                <Image style={styles.userImage} source={userIcon} />
            </Pressable>
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
    privacy: {
        fontSize: 10,
        color: '#ffffff'
    },
    playlistImage: {
        height: 71,
        width: 71,
        backgroundColor: 'white',
        marginRight: 9
    },
    userImage: {
        width: 29,
        height: 29,
        position: 'relative',
        top: 40,
        right: -70,
        borderRadius: 100
    }
})

export default MainPlaylist;