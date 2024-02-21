import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
        <ImageBackground
        source={require('../assets/pexels-ivan-samkov-4162450.jpg')} // Adjust the path and file name as per your actual file
        style={styles.imageBackground}
        >
        <Text style={styles.title}>Signup</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="white" // Change placeholder text color here
                onChangeText={setUsername}
                value={username}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white" // Change placeholder text color here
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white" // Change placeholder text color here
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Button
                title="Signup"
                onPress={() => navigation.navigate('Login')}
            />
        </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SignupScreen;
