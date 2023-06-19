import React from 'react';
import { View } from 'react-native';
import SignUpScreen from './screens/authentication/SignUpScreen';
import SignInScreen from './screens/authentication/SignInScreen';

const App = () => {
  return (
    <View>
      {/* Render the sign up screen */}
      <SignUpScreen />

      {/* Render the sign in screen */}
      <SignInScreen />
    </View>
  );
};

export default App;