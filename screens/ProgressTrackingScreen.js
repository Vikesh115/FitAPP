// ProgressTrackingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProgressTrackingScreen = () => {
    const [workoutSession, setWorkoutSession] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const handleSaveProgress = () => {
        // Implement logic to save progress to database or state
        console.log('Progress saved:', { workoutSession, sets, reps, weight });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Track Progress</Text>
            <TextInput
                style={styles.input}
                placeholder="Workout Session"
                value={workoutSession}
                onChangeText={setWorkoutSession}
            />
            <TextInput
                style={styles.input}
                placeholder="Sets"
                keyboardType="numeric"
                value={sets}
                onChangeText={setSets}
            />
            <TextInput
                style={styles.input}
                placeholder="Reps"
                keyboardType="numeric"
                value={reps}
                onChangeText={setReps}
            />
            <TextInput
                style={styles.input}
                placeholder="Weight (lbs)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />
            <Button
                title="Save Progress"
                onPress={handleSaveProgress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ProgressTrackingScreen;
