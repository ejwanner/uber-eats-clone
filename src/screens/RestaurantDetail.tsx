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
            <About route={route} />
            <Divider width={1.8} style={styles.divider} />
            <View style={styles.menu}>
                <MenuItems restaurantName={route.params.name} />
            </View>
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    divider: {
        marginVertical: 20,
    },
    menu: {
        maxHeight: 420,
    }
})