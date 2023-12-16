import { View, Text, Image, StyleSheet } from "react-native";

const userIcon = require('../assets/icons/user-icon.png');

const Header = (props: any) => {
    return (
        <View style={styles.header}>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>UserName</Text>
                <Image source={userIcon}  style={styles.userImage}/>
            </View>
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