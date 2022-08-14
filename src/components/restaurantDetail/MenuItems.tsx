import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../../redux/slices/cardSlice';
import { RootState } from '../../redux/store';

const exampleFood = [
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

type MenuItemProps = {
    restaurantName: string;
}

const MenuItems: React.FC<MenuItemProps> = ({ restaurantName }) => {

    const dispatch = useDispatch();
    // FIXME: add here the checkbox value here to call then the different reducers
    const selectItem = (item: any, checkboxValue: boolean) => dispatch(
        add_to_cart({
            ...item,
            restaurantName,
            checkboxValue: checkboxValue
        })
    );

    const cartItems = useSelector((state: RootState) => state.card.selectedItems.items);

    const isFoodInCart = (food: any, _cartItems: any) => Boolean(_cartItems.find((item: any) => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {exampleFood.map((foodItem, index) => (
                <View key={index}>
                    <View style={styles.menuItemView}>
                        <BouncyCheckbox
                            iconStyle={styles.checkbox}
                            fillColor='green'
                            onPress={(checkboxValue: boolean) => selectItem(foodItem, checkboxValue)}
                            isChecked={isFoodInCart(foodItem, cartItems)}
                        />
                        <FoodInfo
                            title={foodItem.title}
                            description={foodItem.description}
                            price={foodItem.price}
                        />
                        <FoodImage image_url={foodItem.image} />
                    </View>
                    <Divider width={0.5} orientation='vertical' />
                </View>
            ))}
        </ScrollView>
    )
}

export default MenuItems;

type FoodInfoProps = {
    title: string;
    description: string;
    price: string;
}

type FoodImageProps = {
    image_url: string;
}

const FoodInfo: React.FC<FoodInfoProps> = ({ title, description, price }) => (
    <View style={styles.infoView}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
    </View>
);

const FoodImage: React.FC<FoodImageProps> = ({ image_url }) => (
    <Image source={{ uri: image_url }} style={styles.image} />
);

const styles = StyleSheet.create({
    infoView: {
        width: 240,
        justifyContent: 'space-evenly'
    },
    menuItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    title: {
        fontSize: 19,
        fontWeight: '600'
    },
    checkbox: {
        borderColor: 'lightgrey',
        borderRadius: 0,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
})