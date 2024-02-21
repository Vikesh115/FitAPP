import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";

const defaultUsername = 'vik';
const defaultPassword = '123';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === defaultUsername && password === defaultPassword) {
            // Navigate to the authenticated screen
            navigation.navigate('Dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <View style={styles.container}>
        <LottieView
                        source={require("../assets/Animation - 1708085398996.json")} // Replace 'animation.json' with your animation file
                        autoPlay
                        loop
                        style={styles.animation}
                    />
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
        animation: {
        width: 300,
        height: 300,
    },
});

export default LoginScreen;


// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import LottieView from "lottie-react-native";

// const LoginScreen = ({ navigation }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     return (
//         <View style={styles.container}>
//             <LottieView
//                 source={require("../assets/Animation - 1708085398996.json")} // Replace 'animation.json' with your animation file
//                 autoPlay
//                 loop
//                 style={styles.animation}
//             />
//             <Text style={styles.title}>Login</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Username or Email"
//                 onChangeText={setUsername}
//                 value={username}
//                 autoCapitalize="none"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 onChangeText={setPassword}
//                 value={password}
//                 secureTextEntry
//             />
//             <Button title="Login" onPress={() => navigation.navigate("Dashboard")} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },
//     input: {
//         width: "80%",
//         height: 40,
//         borderColor: "gray",
//         borderWidth: 1,
//         borderRadius: 30,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     animation: {
//         width: 300,
//         height: 300,
//     },
// });

// export default LoginScreen;