import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTab from '../components/home/HeaderTab';
import RestaurantItems, { localData } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import { Restaurant } from '../shared/types';

const Home: React.FC = () => {

    const [restaurantData, setRestaurantData] = useState<Restaurant[]>(localData);
    const [city, setCity] = useState('Chicago');
    const [activeTab, setActiveTab] = useState('Delivery')

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {
                setRestaurantData(
                    json.businesses.filter((business: any) => (business.transactions.includes(activeTab.toLowerCase()))
                    ))
            });
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.backgroundHeader}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems allRestaurants={restaurantData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
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

export default Home;
