// WorkoutDetails.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const WorkoutDetails = ({ route }) => {
    const { part } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {part.workouts.map((workout, index) => (
                    <View key={index} style={styles.workoutContainer}>
                        <Text style={styles.workoutText}>{workout.name}</Text>
                            <Image
                                source={workout.videoUrl}
                                style={styles.normal}
                            />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scrollView: {
        flex: 1,
    },
    normal: {
        width: 300,
        height: 410,
    },
    workoutContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
    },
    workoutImage: {
        width: 400,
        height: 490,
        marginRight: 15,
        resizeMode: 'contain', // Ensure the entire image is visible within the container
    },
    workoutText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1, // Take remaining space
    },
});

export default WorkoutDetails;
