import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';

const VideoBackground = () => {
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // Provide the URL of your video
                style={styles.video}
                shouldPlay // Autoplay
                isLooping // Loop the video
            />
            <View style={styles.overlay}>
                <Text style={styles.overlayText}>Your Text Overlay</Text>
                <TouchableOpacity style={styles.overlayButton}>
                    <Text style={styles.overlayButtonText}>Your Button</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayText: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    overlayButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    overlayButtonText: {
        fontSize: 18,
        color: 'white',
    },
});

export default VideoBackground;
