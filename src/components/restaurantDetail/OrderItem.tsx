import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type OrderItemProps = {
    item: any,
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
    const { title, price } = item

    return (
        <View style={styles.view}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        margin: 10,
    },
    price: {
        opacity: 0.7,
        fontSize: 16,
        margin: 10,
    }
})