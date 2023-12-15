import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputCamp = ({value, label, ...rest}:any) => {
    

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.inputCamp} value={value} {...rest}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 5,
        marginBottom: 20
    },
    label: {
        color: "#FFF",
        marginLeft: 5,
    },
    inputCamp: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 40,
    } 
})

export { InputCamp }