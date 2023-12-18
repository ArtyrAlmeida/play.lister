import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const PlaylistPrivacy = ({isPrivate, ...rest}: any) =>{
    
    return(
        <View style={styles.container}>
            <TouchableOpacity {...rest} style={styles.publicBox}>
                <Text style={!isPrivate ? styles.public : styles.inactive}>Pública</Text>
            </TouchableOpacity>
            <TouchableOpacity {...rest} style={styles.privateBox}>
                <Text style={isPrivate ? styles.private : styles.inactive}>Privada</Text>
            </TouchableOpacity>
        </View>
    )
}

export { PlaylistPrivacy }

const styles = StyleSheet.create(
    {   
        container: {
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#D9D9D9",
            paddingVertical: 10,
            borderRadius: 30,
        },
        public: {
            color: "#32A851",
            fontSize:20,

        },
        publicBox:{
            borderRightWidth: 2,
            borderRightColor: "#ffffff58",
            textAlign: "left",
            paddingRight: 40
        },
        privateBox:{
            borderLeftWidth: 2,
            borderLeftColor: "#ffffff58",
            textAlign: "left",
            paddingLeft: 40
        },
        private: {
            color: "#8C0B04",
            fontSize:20
        },
        inactive: {
            color: "#838383",
            fontSize:20
        }
    }
)