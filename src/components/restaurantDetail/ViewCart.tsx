import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ViewCartProps = {
    navigation: any,
    restaurantName: string,
}

const ViewCart: React.FC<ViewCartProps> = ({ navigation, restaurantName }) => {
    return (
        <View style={styles.containerView}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonViewCard}>
                    <Text style={styles.text}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    buttonViewCard: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative'
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    containerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 180,
        zIndex: 999
    }
})