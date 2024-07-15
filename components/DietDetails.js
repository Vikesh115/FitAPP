import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const DietDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <ImageBackground
        source={require('../assets/pexels-photo-5946083.jpeg')} // Adjust the path and file name as per your actual file
                style={styles.imageBackground}
        >
        <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('WeightGainScreen')}
                >
                    <Text style={styles.buttonText}>Weight Gain</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('WeightLossScreen')}
                >
                    <Text style={styles.buttonText}>Weight Loss</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('BmrCalculator')}
                >
                    <Text style={styles.buttonText}>Calculate BMR</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        // marginTop: 36,
    },
    buttonContainer: {
        width: 200,
        height: 100,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DietDetails;
