import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../../redux/slices/cardSlice';
import { RootState } from '../../redux/store';
import { Food } from '../../shared/types';


type MenuItemProps = {
    restaurantName: string;
    foods: Food[],
    hideCheckbox: boolean;
    marginLeft: number;
}

const MenuItems: React.FC<MenuItemProps> = ({ restaurantName, foods, hideCheckbox, marginLeft }) => {

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
            {foods.map((foodItem: Food, index) => (
                <View key={index}>
                    <View style={styles.menuItemView}>
                        {hideCheckbox ? (
                            <></>
                        ) : (
                            <BouncyCheckbox
                                iconStyle={styles.checkbox}
                                fillColor='green'
                                onPress={(checkboxValue: boolean) => selectItem(foodItem, checkboxValue)}
                                isChecked={isFoodInCart(foodItem, cartItems)}
                            />
                        )}
                        <FoodInfo
                            title={foodItem.title}
                            description={foodItem.description}
                            price={foodItem.price}
                        />
                        <FoodImage image_url={foodItem.image} marginLeft={marginLeft ? marginLeft : 0} />
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
    marginLeft: number;
}

const FoodInfo: React.FC<FoodInfoProps> = ({ title, description, price }) => (
    <View style={styles.infoView}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
    </View>
);

const FoodImage: React.FC<FoodImageProps> = ({ image_url, marginLeft }) => (
    <Image
        source={{ uri: image_url }}
        style={{
            marginLeft: marginLeft,
            width: 100,
            height: 100,
            borderRadius: 8,
        }}
    />
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