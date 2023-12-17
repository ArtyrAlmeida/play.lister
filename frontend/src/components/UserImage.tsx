import { View, Image, Text, StyleSheet } from "react-native";

const userIcon = require('../assets/icons/user-icon.png');

const UserImage = (props: any) => {
    return (
        <View style={styles.userWrapper}>
            <Image source={userIcon} style={styles.userImage} />
            <Text style={styles.heading}>{props.userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userWrapper: {
        flex: 0,
        alignItems: "center",
        gap: 14,
    },
    heading: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#D9D9D9'
    }
});

export default UserImage;