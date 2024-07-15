import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BmrCalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmr, setBmr] = useState(0);

    const calculateBmr = () => {
        let bmrResult = 0;
        const ageValue = parseFloat(age);
        const heightValue = parseFloat(height);
        const weightValue = parseFloat(weight);

        if (isNaN(ageValue) || isNaN(heightValue) || isNaN(weightValue)) {
            alert('Please enter valid numbers for Age, Height, and Weight.');
            return;
        }

        if (gender === 'male') {
            bmrResult = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
        } else {
            bmrResult = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
        }

        setBmr(bmrResult);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setAge(text)}
                keyboardType="numeric"
                value={age}
            />
            <Text style={styles.label}>Gender:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setGender(text)}
                value={gender}
            />
            <Text style={styles.label}>Height (cm):</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setHeight(text)}
                keyboardType="numeric"
                value={height}
            />
            <Text style={styles.label}>Weight (kg):</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setWeight(text)}
                keyboardType="numeric"
                value={weight}
            />
            <Button title="Calculate BMR" onPress={calculateBmr} />
            <Text style={styles.result}>Your Basal Metabolic Rate (BMR) is: {bmr}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    result: {
        fontSize: 20,
        marginTop: 20,
    },
});

export default BmrCalculator;
