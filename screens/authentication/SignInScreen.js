import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from './../../firebaseConfig';


const SignInScreen = () => {
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
            })
            .catch((error) => {
                // Handle sign in errors
                console.log('Sign in error:', error);
            });
    };

    return (
        <View style={{ margin: 40 }}>
            <TextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    );
};

export default SignInScreen;
