import {View, Text, StyleSheet, Button } from "react-native";

const DashboardScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>Dashboard Screen</Text>
        </View>
    );
};

export default DashboardScreen;

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
