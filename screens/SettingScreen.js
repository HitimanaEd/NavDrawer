import {View, Text, StyleSheet, BUtton } from "react-native";

const SettingScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>Setting Screen</Text>
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor:f0fff0,
    },
    text: {
        fontSize:24,
        fontWeight:"bold",
        marginBottom: 16,
    },
});
