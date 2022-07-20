import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const RestaurantDetail = () => {
    return (
        <View>
            <About />
            <Divider />
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({})