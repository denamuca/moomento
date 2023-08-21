import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to the Home Screen!</Text>
            <Button title="Logout" onPress={() => navigation.navigate('SignIn')} />
        </View>
    );
};

export default HomeScreen;
