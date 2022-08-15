import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'
import { Food } from '../shared/types'

type RestaurantDetailProps = {
    route: any,
    navigation: any,
}

const foods: Food[] = [
    {
        title: 'Food A',
        description: 'Description Food A',
        price: '$11.30',
        image: 'https://www.fuchs.de/wp-content/uploads/2019/07/FU_Bildzuschnitt_Teaser_790x527px_Tandoori_Chicken_Wings.jpg'
    },
    {
        title: 'Food B',
        description: 'Description Food B',
        price: '$12.90',
        image: 'https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw='
    },
    {
        title: 'Food C',
        description: 'Description Food C',
        price: '$13.40',
        image: 'https://img.freepik.com/fotos-premium/grosser-hamburger-mit-doppeltem-rindfleisch-und-pommes-frites_252907-8.jpg?w=2000'
    },
    {
        title: 'Food D',
        description: 'Description Food D',
        price: '$14.80',
        image: 'https://img.freepik.com/fotos-kostenlos/vorderansicht-leckerer-fleisch-cheeseburger-mit-pommes-frites-auf-dunklem-hintergrund-abendessen-burger-snack-fast-food-sandwich-salatteller-toast_140725-159215.jpg?w=2000'
    },
    {
        title: 'Food E',
        description: 'Description Food E',
        price: '$15.10',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80'
    },
    {
        title: 'Food F',
        description: 'Description Food F',
        price: '$16.30',
        image: 'https://www.expatica.com/app/uploads/sites/6/2014/05/german-food.jpg'
    },
    {
        title: 'Food G',
        description: 'Description Food G',
        price: '$17.30',
        image: 'https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI='
    },
    {
        title: 'Food H',
        description: 'Description Food H',
        price: '$18.60',
        image: 'https://i0.wp.com/assets.preprod.foodnetwork.ca/wp-content/uploads/2022/01/FNC_OGImage_Taiwanese-Beef-Noodle-Soup.jpg'
    },
    {
        title: 'Food I',
        description: 'Description Food I',
        price: '$19.90',
        image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg'
    },
    {
        title: 'Food J',
        description: 'Description Food J',
        price: '$20.40',
        image: 'https://berlinfoodstories.com/wp-content/uploads/2020/12/Otto-the-Restaurant-Berlin-Food-Stories-Roesti-Closeup-500x339.jpg'
    },
    {
        title: 'Food K',
        description: 'Description Food K',
        price: '$21.20',
        image: 'https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
    },
];

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ route, navigation }) => {
    return (
        <>
            <About route={route} />
            <Divider width={1.8} style={styles.divider} />
            <View style={styles.menu}>
                <MenuItems restaurantName={route.params.name} foods={foods} hideCheckbox={false} marginLeft={0} />
            </View>
            <ViewCart navigation={navigation} />
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