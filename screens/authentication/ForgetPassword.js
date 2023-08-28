import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import firebase from "./../../firebaseConfig";
import Left from "../../assets/svg/left";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setResetSent(true);
      })
      .catch((error) => {
        console.log("Forget password error:", error);
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButton}
        >
          <Left />
          <Text style={styles.headerTitle}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
        />
        {<Text>{error}</Text>}
        <TouchableOpacity
          onPress={handleResetPassword}
          style={styles.buttonPrimary}
        >
          <Text style={styles.buttonPrimaryText}>Reset Password</Text>
        </TouchableOpacity>
        {resetSent && <Text>Password reset email sent</Text>}
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
    // justifyContent: "center",
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
    marginBottom: 10,
  },
  linkText: {
    color: "#3F3D56",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 30,
  },
  buttonPrimary: {
    backgroundColor: "#3F3D56",
    padding: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonPrimaryText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
