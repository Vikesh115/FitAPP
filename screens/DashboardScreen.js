import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import ImageSlider from '../components/ImageSlider';

const DashboardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to</Text>
            <Text>
                <Text style={styles.title}>Fit </Text>
                <Text style={styles.title1}>APP</Text>
            </Text>
            <ImageSlider />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ViewWorkoutPlans')}
                >
                    <Text style={styles.buttonText}> Workout Plans</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('DietDetails')}
                >
                    <Text style={styles.buttonText}>Diet Plans</Text>
                </TouchableOpacity>
            </View>
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
        padding: 40,
    },
    title: {
        color:'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    title1: {
        color:'red',
        marginTop: -10,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '100%',
        margin: 10,
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
});

export default DashboardScreen;
