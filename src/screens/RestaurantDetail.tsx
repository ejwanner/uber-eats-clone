import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

type RestaurantDetailProps = {
    route: any,
    navigation: any,
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ route, navigation }) => {
    return (
        <>
            <View>
                <About route={route} />
                <Divider width={1.8} style={styles.divider} />
                <MenuItems restaurantName={route.params.name} />
            </View>
            <View style={styles.container}>
                <ViewCart navigation={navigation} restaurantName={route.params.name} />
            </View>
        </>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    divider: {
        marginVertical: 20,
    },
    container: {
        position: 'absolute'
    }
})