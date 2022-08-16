import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { db } from '../../../firebase';
import LottieView from 'lottie-react-native';

type ViewCartProps = {
    navigation: any,
}

const ViewCart: React.FC<ViewCartProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector((state: RootState) => state.card.selectedItems);
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, curr: number) => prev + curr, 0);
    const totalEUR = total.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    const addOrderToFirebase = () => {
        setLoading(true);
        db.collection('orders').add({
            items: items,
            restaurantName: restaurantName,
            createdAt: new Date(),
        }).then(() => {
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('OrderComplete')
            }, 2500);
        });
    }

    console.log('totalEUR', totalEUR);

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalEUR}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={styles.checkoutButton}
                                onPress={() => {
                                    addOrderToFirebase();
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                                <Text style={styles.totalInCheckout}>{total ? totalEUR : ''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            {loading ?
                <View style={styles.loading}>
                    <LottieView
                        style={styles.loadingAnimation}
                        source={require('../../assets/loading.json')}
                        autoPlay
                        speed={1}
                    />
                </View>
                : <></>}
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total && !loading ? (
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
    loadingAnimation: {
        height: 200,
    },
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
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    subtotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative',
    },
    totalInCheckout: {
        position: 'absolute',
        right: 20,
        color: 'white',
        fontSize: 15,
        top: 17
    },
    loading: {
        backgroundColor: 'black',
        position: 'absolute',
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }
})