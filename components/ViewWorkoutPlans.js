// ViewWorkoutPlans.js
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ViewWorkoutPlans = ({ navigation }) => {
    const bodyParts = [
        {
            name: 'Arms',
            image: require('../assets/pexels-josef-pascal-1978505.jpg'),
            workouts: [
                { name: 'Lateral Bicep Curls', videoUrl: require('../assets/lateral-bicep-curls.gif') },
                { name: 'Tricep Dips', videoUrl: require('../assets/parallel-bar-tricep-dips.gif') },
                { name: 'Hammer Curls', videoUrl: require('../assets/rope-hammer-curl-machine.gif') },
            ]
        },
        {
            name: 'Legs',
            image: require('../assets/pexels-mike-jones-8874378.jpg'),
            workouts: [
                { name: 'Reverse lunge', videoUrl: require('../assets/reverse-deficit-lunge.gif') },
                { name: 'Single Leg Calf Raise', videoUrl: require('../assets/single-leg-calf-raise.gif') },
                { name: 'Squat', videoUrl: require('../assets/full-squat-side-view.gif') },
            ]
        },
        {
            name: 'Chest',
            image: require('../assets/pexels-photo-8875042.jpeg'),
            workouts: [
                { name: 'Cable Crossover', videoUrl: require('../assets/cable-crossover.gif') },
                { name: 'Barbell Bench Press', videoUrl: require('../assets/barbell-bench-press.gif') },
                { name: 'Dumbell Fly', videoUrl: require('../assets/dumbbell-chest-fly-muscles.gif') },
            ]
        },
        {
            name: 'Back',
            image: require('../assets/pexels-photo-5809969.webp'),
            workouts: [
                { name: 'Cable Face pull', videoUrl: require('../assets/cable-face-pull.gif') },
                { name: 'Cable Wide Grip Row', videoUrl: require('../assets/cable-wide-grip-row.gif') },
                { name: 'T Bar', videoUrl: require('../assets/t-bar-row-muscles.gif') },
            ]
        },
        {
            name: 'Sholder',
            image: require('../assets/pexels-photo-1547248.jpeg'),
            workouts: [
                { name: 'Plate Front Raise', videoUrl: require('../assets/plate-front-raise.gif') },
                { name: 'Cable Seated Latrel Raise', videoUrl: require('../assets/cabled-seated-rear-lateral-raise.gif') },
                { name: 'Dumbell Shoulder Press', videoUrl: require('../assets/dumbbell-shoulder-press.gif') },
            ]
        },
        {
            name: 'Abs',
            image: require('../assets/pexels-hamid-tajik-17959560.jpg'),
            workouts: [
                { name: 'V setups', videoUrl: require('../assets/v-sit-ups.gif') },
                { name: 'Bicycle Crunches', videoUrl: require('../assets/bicycle-crunch-movement.gif') },
                { name: 'Butterfly SitUp', videoUrl: require('../assets/butterfly-sit-up.gif') },
            ]
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {bodyParts.map((part, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.bodyPartButton}
                        onPress={() => navigation.navigate('WorkoutDetails', { part: part })}
                    >
                        <Text style={styles.bodyPartText}>{part.name}</Text>
                        <Image source={part.image} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 34,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    bodyPartButton: {
        backgroundColor: '#007AFF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    bodyPartText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bodyPartImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 50, // for rounded image
    },
});

export default ViewWorkoutPlans;
