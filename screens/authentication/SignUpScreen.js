import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from './../../firebaseConfig';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        firebase
            .auth() // Access the auth() method
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Sign up successful
                const user = userCredential.user;
                console.log('User signed up:', user.email);
            })
            .catch((error) => {
                // Handle sign up errors
                console.log('Sign up error:', error);
            });
    };

    return (
        <View style={{ margin: 60 }}>
            <TextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

export default SignUpScreen;
