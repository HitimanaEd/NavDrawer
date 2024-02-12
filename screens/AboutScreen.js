import {View, Text, StyleSheet, BUtton } from "react-native";

const AboutScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>About Screen</Text>
        </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
    text: {
        fontSize:24,
        fontWeight:"bold",
        marginBottom: 16,
    },
});
