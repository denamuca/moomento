import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import firebase from './../../firebaseConfig';
import Left from '../../assets/svg/left';


const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        firebase
            .auth() // Access the auth() method
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Sign in successful
                const user = userCredential.user;
                console.log('User signed in:', user.email);
                navigation.navigate("Home");
            })
            .catch((error) => {
                // Handle sign in errors
                console.log('Sign in error:', error);
            });
    };

    return (
        <View style={styles.container}>
            <View >
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                    <Left />
                    <Text style={styles.headerTitle}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    style={styles.textInput}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.linkText}>Forget Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignIn} style={styles.buttonPrimary}>
                    <Text style={styles.buttonPrimaryText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignInScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    wrapper: {
        flex: 1, justifyContent: "center"
    },
    headerButton: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 20,
        textAlign: "center",
    },
    textInput: {
        borderColor: "#E6E6E6",
        borderWidth: 2,
        padding: 20,
        borderRadius: 8,
        marginBottom: 10
    },
    linkText: {
        color: "#3F3D56",
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 30
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