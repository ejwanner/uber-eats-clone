import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LottieView from 'lottie-react-native';
import { db } from '../../firebase';
import MenuItems from '../components/restaurantDetail/MenuItems';


const OrderComplete: React.FC = () => {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: 'Bolognese',
                description: 'Leckere Bolognese mit Nudeln',
                price: '$12.99',
                image: 'https://www.fuchs.de/wp-content/uploads/2019/07/FU_Bildzuschnitt_Teaser_790x527px_Tandoori_Chicken_Wings.jpg'
            }
        ],
    });

    const { items, restaurantName } = useSelector((state: RootState) => state.card.selectedItems);
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, curr: number) => prev + curr, 0);
    const totalEUR = total.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    useEffect(() => {
        const unsubscribe = db.collection('orders')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .onSnapshot((snapshot: any) => {
                snapshot.docs.map((doc: any) => {
                    setLastOrder(doc.data())
                })
            })
        return () => unsubscribe();
    }, [])

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <LottieView
                    style={styles.checkMark}
                    source={require('../assets/check-mark.json')}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={styles.restaurantName}>Your order at {restaurantName} has been placed for {totalEUR}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MenuItems restaurantName={restaurantName} foods={lastOrder.items} hideCheckbox={true} marginLeft={8} />
                    <LottieView
                        style={styles.pizza}
                        source={require('../assets/cooking.json')}
                        autoPlay
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default OrderComplete

const styles = StyleSheet.create({
    container: {
        margin: 15,
        alignItems: 'center',
        height: '100%',
    },
    checkMark: {
        marginBottom: 30,
        height: 100,
        alignSelf: 'center',
    },
    pizza: {
        height: 200,
        width: '100%',
        alignSelf: 'center',
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})