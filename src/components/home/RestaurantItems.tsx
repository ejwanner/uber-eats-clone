import * as React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Restaurant } from '../../shared/types';

export const localData = [
    {
        name: 'Restaurant in the Skys',
        image_url: 'https://www.hugos-restaurant.de/wp-content/uploads/2015/10/restaurant-1.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        review_count: 894,
        rating: 4.5
    },
    {
        name: 'Indisches Restaurant',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOri--DBrtXlw1-pgw8P7tD-V0Oakea9V9Eg&usqp=CAU',
        categories: ['Fast Food'],
        price: '$',
        review_count: 323,
        rating: 4.2
    },
    {
        name: 'Bayrische Wirtschaft',
        image_url: 'https://restaurant-schoppenhauer.de/images/slideshow/schoppenhauer_slideshow_4.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$$',
        review_count: 6544,
        rating: 4.9
    }
]

type RestaurantDataProps = {
    allRestaurants: Restaurant[],
    navigation: any
}

const RestaurantItems: React.FC<RestaurantDataProps> = ({ allRestaurants, navigation }) => {
    return (
        <>
            {allRestaurants.map((restaurant: Restaurant, index: any) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    onPress={() => navigation.navigate('RestaurantDetail', {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })}
                >
                    <View
                        style={styles.itemView}
                    >
                        <RestaurantImage image_url={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

export default RestaurantItems;

type RestaurantImageProps = {
    image_url: string
}

type RestaurantInfoProps = {
    name: string,
    rating: number
}

const RestaurantImage: React.FC<RestaurantImageProps> = ({ image_url }) => (
    <>
        <Image
            source={{ uri: image_url }}
            style={styles.image}
        />
        <TouchableOpacity style={styles.heart}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ name, rating }) => (
    <View style={styles.infoView}>
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.deliveryTime}>30-45 Minuten</Text>
        </View>
        <View style={styles.starsView}>
            <Text>{rating}</Text>
        </View>
    </View>
)


const styles = StyleSheet.create({
    itemView: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'white'
    },
    image: {
        width: "100%",
        height: 180,
    },
    heart: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    infoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    deliveryTime: {
        fontSize: 13,
        color: 'grey'
    },
    starsView: {
        backgroundColor: '#ddd',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
})