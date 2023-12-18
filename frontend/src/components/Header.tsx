import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const userIcon = require('../assets/icons/user-icon.png');
''
const Header = (props: any) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.userInfo} onPress={() => {props.navigation.navigate("MyProfile")}}>
                <Text style={styles.userName}>{props.userName}</Text>
                <Image source={{ uri: props.image as string }}  style={styles.userImage}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#50037E',
        width: '100%',
        height: 59,
        paddingTop: 16,
        paddingBottom: 4,
        paddingRight: 8,
        alignItems: 'flex-end',
        zIndex: 1000
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    userName: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    userImage: {
        height: 29,
        width: 29,
        borderRadius: 100,
        marginLeft: 6
    }
})

export default Header;