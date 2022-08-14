import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type ViewCartProps = {
    navigation: any,
    restaurantName: string,
}

const ViewCart: React.FC<ViewCartProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const { items, restaurantName } = useSelector((state: RootState) => state.card.selectedItems);
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, curr: number) => prev + curr, 0);
    const totalEUR = total.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    console.log('totalEUR', totalEUR);

    const checkoutModalContent = () => {
        return (
            <View style={styles.modalView}>
                <View style={styles.modalTextView}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.modalText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={styles.containerView}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttonViewCard} onPress={() => setModalVisible(true)}>
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
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    modalTextView: {
        backgroundColor: 'black',
        paddingLeft: 10,
        borderRadius: 30,
        width: 150,
        alignItems: 'center',
    },
    modalText: {
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 150,
        borderWidth: 1,
    }
})