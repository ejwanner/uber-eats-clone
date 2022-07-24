import { Image, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'

type AboutProps = {
    route: any,
}

const About: React.FC<AboutProps> = ({ route }) => {
    const { name, image, price, reviews, rating, categories } = route.params;

    const foramttedCategories = categories.map((cat: any) => cat.title).join(' · ');

    const description = `${foramttedCategories} ${price ? ' · ' + price : ''} · 🎫 · ${rating} ⭐️ (${reviews})`;

    return (
        <View>
            <RestaurantImage image_url={image} />
            <RestaurantName restaurantName={name} />
            <RestaurantDescription restaurantDescription={description} />
        </View>
    )
}

export default About;

type RestaurantImageProps = {
    image_url: string;
}

type RestaurantNameProps = {
    restaurantName: string;
}

type RestaurantDescriptionProps = {
    restaurantDescription: string;
}

const RestaurantImage: React.FC<RestaurantImageProps> = ({ image_url }) => (
    <Image source={{ uri: image_url }} style={styles.image} />
);

const RestaurantName: React.FC<RestaurantNameProps> = ({ restaurantName }) => (
    <Text style={styles.name}>
        {restaurantName}
    </Text>
);

const RestaurantDescription: React.FC<RestaurantDescriptionProps> = ({ restaurantDescription }) => (
    <Text style={styles.description}>
        {restaurantDescription}
    </Text>
);

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 180,
    },
    name: {
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    },
    description: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15,
    }
})