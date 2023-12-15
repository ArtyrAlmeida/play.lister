import { Image, Pressable, StyleSheet, View } from "react-native";

const userIcon = require('../assets/icons/user-icon.png');
const homeIcon = require('../assets/icons/home-icon.png');
const notebookIcon = require('../assets/icons/notebook-icon.png');

const Footer = (props: any) => {
    return (
        <View style={styles.footer}>
            <Pressable>
                <Image source={userIcon} />
            </Pressable>
            <Pressable>
                <Image source={homeIcon} />
            </Pressable>
            <Pressable>
                <Image source={notebookIcon} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        height: 69,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        zIndex: 1000,
        position: "absolute",
        bottom: 0
    },
})

export default Footer;