import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'; // Import Platform
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');
const images = [
    require('../assets/pexels-anush-gorak-1431282.jpg'),
    require('../assets/pexels-behrouz-sasani-7094172.jpg'),
    require('../assets/pexels-anush-gorak-1229356.jpg'),
];

const ImageSlider = () => {
    const carouselRef = useRef(null);

    const sliderImage = ({ item }, parallaxProps) => {
        return (
            <View style={styles.itemContainer}>
                <ParallaxImage
                    source={item}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.01}
                    {...parallaxProps}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={images}
                renderItem={sliderImage}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                autoplay={true}
                hasParallaxImages={true}
                autoplayInterval={2000}
                loop={true}
                slideStyle={{display:'flex', alignItems:'center'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    itemContainer: {
        width: '100%',
        height: '80%',
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});

export default ImageSlider;
