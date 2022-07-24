import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const exampleFood = [
    {
        title: 'Tandoori Food',
        description: 'Super Tandoori lecker schmacko fazo essen vom Tandoori Grill',
        price: '$19.90',
        image: 'https://www.fuchs.de/wp-content/uploads/2019/07/FU_Bildzuschnitt_Teaser_790x527px_Tandoori_Chicken_Wings.jpg'
    },
    {
        title: 'Tandoori Food',
        description: 'Super Tandoori lecker schmacko fazo essen vom Tandoori Grill',
        price: '$19.90',
        image: 'https://sharkninja-cookingcircle.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/07/31170104/Tandori-chicken-1-rotated-1.jpg'
    },
    {
        title: 'Tandoori Food',
        description: 'Super Tandoori lecker schmacko fazo essen vom Tandoori Grill',
        price: '$19.90',
        image: 'https://sharkninja-cookingcircle.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/07/31170104/Tandori-chicken-1-rotated-1.jpg'
    },
    {
        title: 'Tandoori Food',
        description: 'Super Tandoori lecker schmacko fazo essen vom Tandoori Grill',
        price: '$19.90',
        image: 'https://sharkninja-cookingcircle.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/07/31170104/Tandori-chicken-1-rotated-1.jpg'
    },
    {
        title: 'Tandoori Food',
        description: 'Super Tandoori lecker schmacko fazo essen vom Tandoori Grill',
        price: '$19.90',
        image: 'https://sharkninja-cookingcircle.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/07/31170104/Tandori-chicken-1-rotated-1.jpg'
    },

];

const MenuItems: React.FC = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {exampleFood.map((foodItem, index) => (
                <View key={index}>
                    <View style={styles.menuItemView}>
                        <BouncyCheckbox
                            iconStyle={styles.checkbox}
                            fillColor='green'
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