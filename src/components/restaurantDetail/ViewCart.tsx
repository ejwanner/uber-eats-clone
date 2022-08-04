import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type ViewCartProps = {
    navigation: any,
    restaurantName: string,
}

const ViewCart: React.FC<ViewCartProps> = ({ navigation, restaurantName }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const items = useSelector((state: RootState) => state.card.selectedItems.items);
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, curr: number) => prev + curr, 0);
    const totalEUR = total.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    console.log('totalEUR', totalEUR);

    return (
        <>
            {total ? (
                <View style={styles.containerView}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttonViewCard}>
                            <Text style={styles.text}>View Cart</Text>
                            <Text style={styles.totalPrice}>{totalEUR}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
        </>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    containerView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // position: 'absolute',
        // bottom: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    buttonViewCard: {
        marginTop: 20,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,
        borderRadius: 30,
        width: 300,
        position: 'relative',
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginRight: 30,
    },
    totalPrice: {
        color: 'white',
        fontSize: 20,
    }
})