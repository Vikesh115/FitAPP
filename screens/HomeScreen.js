import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Video } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/pexels-leon-ardho-1552102.jpg')} // Adjust the path and file name as per your actual file
                style={styles.imageBackground}
            >
                <TouchableOpacity style={styles.button}  
                onPress={() => navigation.navigate('Dashboard')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.overlayText}>Start <Text style={styles.overlayText1}>your </Text> 
                journey</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 460,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
    overlayText1:{
        marginTop: 460,
        color: 'red',
        fontSize: 60,
        fontWeight: 'bold',
        position: 'absolute',
        top: 20, 
    },
    overlayText: {
        marginTop: 260,
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        position: 'absolute',
        top: 20, // Adjust as needed
    },
});

export default HomeScreen;
