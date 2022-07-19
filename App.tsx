import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Categories from './src/components/Categories';
import HeaderTab from './src/components/HeaderTab';
import RestaurantItems, { localData } from './src/components/RestaurantItems';
import SearchBar from './src/components/SearchBar';
import Home from './src/screens/Home';
import { Restaurant } from './src/shared/types';

const App = () => {

    const [restaurantData, setRestaurantData] = useState<Restaurant[]>(localData);
    const [city, setCity] = useState('Munich');

    const YELP_API_KEY = '';

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city]);

    console.log(restaurantData[0])

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.backgroundHeader}>
                <HeaderTab />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems allRestaurants={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    backgroundHeader: {
        backgroundColor: '#fff',
        padding: 15
    }
})

export default App;
