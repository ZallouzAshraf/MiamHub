import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

export default function Register() {
  const [getFirstName, setFirstName] = useState<string>("");
  const [getLastName, setLastName] = useState<string>("");
  const [getTelephone, setTelephone] = useState<string>("");
  const [getEmailId, setEmailId] = useState<string>("");
  const [getPassword, setPassword] = useState<string>("");
  const [getConfirmPassword, setConfirmPassword] = useState<string>("");
  const [getError, setError] = useState<boolean>(false);
  const [getDisabled, setDisabled] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [firstnameError, setFirstnameError] = useState<string>("");
  const [lastnameError, setLastnameError] = useState<string>("");
  const [telephoneError, setTelephoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordFocused, setPasswordFocused] = useState<boolean>(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] =
    useState<boolean>(false);
  const [isEmailFocused, setEmailFocused] = useState<boolean>(false);
  const [isTelephoneFocused, setTelephoneFocused] = useState<boolean>(false);
  const [isLastnameFocused, setLastnameFocused] = useState<boolean>(false);
  const [isFirstnameFocused, setFirstnameFocused] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp<any>>();

  const registerFunction = (): void => {
    setDisabled(true);
    setLoading(true);

    // Resetting errors
    setFirstnameError("");
    setLastnameError("");
    setTelephoneError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Validating inputs
    if (getEmailId === "") {
      setEmailError("Email is Required");
    }
    if (getFirstName === "") {
      setFirstName("First Name is Required");
    }
    if (getLastName === "") {
      setLastName("Last Name is Required");
    }
    if (getTelephone === "") {
      setTelephone("Telephone is Required");
    }
    if (getPassword === "") {
      setPasswordError("Password is Required");
    }
    if (getConfirmPassword === "") {
      setConfirmPasswordError("Confirm Password is Required");
    }
    if (getPassword !== getConfirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    }
  };

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.myLogo}
        source={require("../../assets/images/logo.png")}
      />

      <View
        style={[
          styles.inputContainer,
          isFirstnameFocused && styles.inputFocused,
          firstnameError ? { borderColor: "#de3138" } : {},
        ]}
      >
        <TextInput
          placeholder="First Name"
          style={styles.input}
          placeholderTextColor="#fff"
          value={getFirstName}
          onChangeText={setFirstName}
          onFocus={() => setFirstnameFocused(true)}
          onBlur={() => setFirstnameFocused(false)}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          isLastnameFocused && styles.inputFocused,
          lastnameError ? { borderColor: "#de3138" } : {},
        ]}
      >
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          placeholderTextColor="#fff"
          value={getLastName}
          onChangeText={setLastName}
          onFocus={() => setLastnameFocused(true)}
          onBlur={() => setLastnameFocused(false)}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          isTelephoneFocused && styles.inputFocused,
          telephoneError ? { borderColor: "#de3138" } : {},
        ]}
      >
        <TextInput
          placeholder="Telephone"
          style={styles.input}
          keyboardType="phone-pad"
          placeholderTextColor="#fff"
          value={getTelephone}
          onChangeText={setTelephone}
          onFocus={() => setTelephoneFocused(true)}
          onBlur={() => setTelephoneFocused(false)}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          isEmailFocused && styles.inputFocused,
          emailError ? { borderColor: "#de3138" } : {},
        ]}
      >
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#fff"
          value={getEmailId}
          onChangeText={(value: string) => {
            setEmailId(value);
            setError(false);
            setEmailError("");
          }}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          isPasswordFocused && styles.inputFocused,
          passwordError ? { borderColor: "#de3138" } : {},
        ]}
      >
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          placeholderTextColor="#fff"
          value={getPassword}
          onChangeText={(value: string) => {
            setPassword(value);
            setError(false);
            setPasswordError("");
          }}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.inputContainer,
          isConfirmPasswordFocused && styles.inputFocused,
          confirmPasswordError ? { borderColor: "#de3138" } : {},
        ]}
      >
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          placeholderTextColor="#fff"
          value={getConfirmPassword}
          onChangeText={(value: string) => {
            setConfirmPassword(value);
            setError(false);
            setConfirmPasswordError("");
          }}
          onFocus={() => setConfirmPasswordFocused(true)}
          onBlur={() => setConfirmPasswordFocused(false)}
        />
        <TouchableOpacity
          onPress={toggleShowConfirmPassword}
          style={styles.eyeIcon}
        >
          <MaterialCommunityIcons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      {confirmPasswordError ? (
        <Text style={styles.errorText}>{confirmPasswordError}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={registerFunction}
        disabled={getDisabled}
      >
        <Text style={styles.registerBtnText}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.createAccount}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginHere}>Login Here!</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  inputFocused: {
    borderColor: "#dac366",
  },
  inputContainer: {
    position: "relative",
    width: "74%",
    height: 46,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#5e5530",
    borderRadius: 40,
  },
  input: {
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 20,
    paddingTop: 12,
    paddingVertical: 10,
    borderRadius: 40,
    width: "100%",
  },
  picker: {
    color: "#fff",
    paddingLeft: 20,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  errorText: {
    color: "#de3138",
    fontSize: 12,
    marginBottom: 12,
    alignSelf: "flex-start",
    paddingLeft: 60,
  },
  registerBtn: {
    marginTop: 35,
    marginBottom: 15,
    backgroundColor: "#dac366",
    width: 205,
    height: 45,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  registerBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccount: {
    color: "white",
    width: 200,
    textAlign: "center",
  },
  loginHere: {
    color: "#c29700",
    marginTop: 6,
  },
  myLogo: {
    width: 200,
    height: 180,
    marginBottom: 20,
  },
});
