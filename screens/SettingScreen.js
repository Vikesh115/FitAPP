import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, Alert, TouchableOpacity, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingScreen() {
    const [image, setImage] = useState(null);
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');

    useEffect(() => {
        // Load user data from AsyncStorage on component mount
        loadUserData();
    }, []);

    const loadUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData !== null) {
                const { image, height, age, weight } = JSON.parse(userData);
                setImage(image);
                setHeight(height);
                setAge(age);
                setWeight(weight);
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    const saveUserData = async () => {
        try {
            const userData = JSON.stringify({ image, height, age, weight });
            await AsyncStorage.setItem('userData', userData);
            Alert.alert('Success', 'User data saved successfully!');
        } catch (error) {
            console.error('Error saving user data:', error);
            Alert.alert('Error', 'Failed to save user data.');
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
    };

    // Function to open LinkedIn profile
    const openLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/');
    };

    // Function to open GitHub profile
    const openGitHub = () => {
        Linking.openURL('https://github.com/Vikesh115');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Upload Photo" onPress={pickImage} />
            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Height (cm):</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Height (cm)"
                        placeholderTextColor="white"
                        value={height}
                        onChangeText={text => setHeight(text)}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Age:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        placeholderTextColor="white"
                        value={age}
                        onChangeText={text => setAge(text)}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Weight (kg):</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Weight (kg)"
                        placeholderTextColor="white"
                        value={weight}
                        onChangeText={text => setWeight(text)}
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <Button title="Save" onPress={saveUserData} />
            <View style={styles.socialContainer}>
                <TouchableOpacity onPress={openLinkedIn}>
                    <Image
                        source={require('../assets/linkedin.png')}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openGitHub}>
                    <Image
                        source={require('../assets/github.png')}
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100, // for rounded image
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    inputRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        color: 'grey',
        fontWeight: 'bold',
        marginRight: 10,
    },
    input: {
        color: 'black',
        height: 40,
        width: 100,
        borderWidth: 1,
        fontWeight: 'bold',
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
    },
});



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, Button, TextInput, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SettingScreen() {
//     const [image, setImage] = useState(null);
//     const [height, setHeight] = useState('');
//     const [age, setAge] = useState('');
//     const [weight, setWeight] = useState('');

//     useEffect(() => {
//         // Load user data from AsyncStorage on component mount
//         loadUserData();
//     }, []);

//     const loadUserData = async () => {
//         try {
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData !== null) {
//                 const { image, height, age, weight } = JSON.parse(userData);
//                 setImage(image);
//                 setHeight(height);
//                 setAge(age);
//                 setWeight(weight);
//             }
//         } catch (error) {
//             console.error('Error loading user data:', error);
//         }
//     };

//     const saveUserData = async () => {
//         try {
//             const userData = JSON.stringify({ image, height, age, weight });
//             await AsyncStorage.setItem('userData', userData);
//             Alert.alert('Success', 'User data saved successfully!');
//         } catch (error) {
//             console.error('Error saving user data:', error);
//             Alert.alert('Error', 'Failed to save user data.');
//         }
//     };

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result);

//         if (!result.cancelled) {
//             setImage(result.assets[0].uri);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Profile</Text>
//             {image && <Image source={{ uri: image }} style={styles.image} />}
//             <Button title="Upload Photo" onPress={pickImage} />
//             <View style={styles.inputContainer}>
//                 <View style={styles.inputRow}>
//                     <Text style={styles.label}>Height (cm):</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Height (cm)"
//                         placeholderTextColor="white"
//                         value={height}
//                         onChangeText={text => setHeight(text)}
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <View style={styles.inputRow}>
//                     <Text style={styles.label}>Age:</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Age"
//                         placeholderTextColor="white"
//                         value={age}
//                         onChangeText={text => setAge(text)}
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <View style={styles.inputRow}>
//                     <Text style={styles.label}>Weight (kg):</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Weight (kg)"
//                         placeholderTextColor="white"
//                         value={weight}
//                         onChangeText={text => setWeight(text)}
//                         keyboardType="numeric"
//                     />
//                 </View>
//             </View>
//             <Button title="Save" onPress={saveUserData} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         // marginTop: 60,
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: 'black',
//         padding: 10,
//     },
//     title: {
//         color: 'white',
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 100, // for rounded image
//         marginBottom: 20,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         marginBottom: 20,
//     },
//     inputRow: {
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     label: {
//         color: 'grey',
//         fontWeight: 'bold',
//         marginRight: 10,
//     },
//     input: {
//         color: 'white',
//         height: 40,
//         width: 100,
//         borderWidth: 1,
//         fontWeight: 'bold',
//         borderColor: '#ccc',
//         padding: 10,
//         borderRadius: 5,
//     },
// });