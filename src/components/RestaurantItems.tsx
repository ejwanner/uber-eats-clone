import * as React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const localData = [
    {
        name: 'Restaurant in the Skys',
        image_url: 'https://www.hugos-restaurant.de/wp-content/uploads/2015/10/restaurant-1.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 894,
        rating: 4.5
    },
    {
        name: 'Indisches Restaurant',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOri--DBrtXlw1-pgw8P7tD-V0Oakea9V9Eg&usqp=CAU',
        categories: ['Fast Food'],
        price: '$',
        reviews: 323,
        rating: 4.2
    },
    {
        name: 'Bayrische Wirtschaft',
        image_url: 'https://restaurant-schoppenhauer.de/images/slideshow/schoppenhauer_slideshow_4.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$$',
        reviews: 6544,
        rating: 4.9
    }
]

const RestaurantItem = () => {
    return (
        <TouchableOpacity activeOpacity={1}>
            {localData.map((restaurant, index) => (
                <View
                    key={index}
                    style={styles.itemView}
                >
                    <RestaurantImage image_url={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
        </TouchableOpacity>
    )
}

export default RestaurantItem;

type RestaurantImageProps = {
    image_url: string
}

type RestaurantInfoProps = {
    name: string,
    rating: number
}

const RestaurantImage = (props: RestaurantImageProps) => (
    <>
        <Image
            source={{ uri: props.image_url }}
            style={styles.image}
        />
        <TouchableOpacity style={styles.heart}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props: RestaurantInfoProps) => (
    <View style={styles.infoView}>
        <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.deliveryTime}>30-45 Minuten</Text>
        </View>
        <View style={styles.starsView}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)


const styles = StyleSheet.create({
    touchableItem: {
        marginBottom: 30
    },
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