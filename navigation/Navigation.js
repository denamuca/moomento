import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/authentication/SignInScreen';
import SignUpScreen from '../screens/authentication/SignUpScreen';
import HomeScreen from '../screens/Home/Home';
import WelcomeScreen from '../screens/authentication/WelcomeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="SignIn" component={SignInScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Signup" component={SignUpScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
