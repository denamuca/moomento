import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Welcome from '../../assets/svg/welcome'

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Be happy for this moomento</Text>
            <Welcome />
            <View style={styles.wrap}>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")} style={styles.buttonPrimary}>
                    <Text style={styles.buttonPrimaryText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.buttonPrimary}>
                    <Text style={styles.buttonPrimaryText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: "center",
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#3F3D56",
        lineHeight: 50
    },
    wrap: {
        marginTop: 50
    },
    buttonPrimary: {
        backgroundColor: "#3F3D56",
        padding: 20,
        borderRadius: 8,
        marginVertical: 5
    },
    buttonPrimaryText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold"
    }
});