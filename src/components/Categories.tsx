import * as React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const items = [
]

const Categories = () => {
    return (
        <View style={styles.view}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.itemView}>
                    <MaterialIcons name='shopping-bag' color='#18191A' size={35} />
                    <Text style={styles.itemText}>Pick Up</Text>
                </View>
                <View style={styles.itemView}>
                    <MaterialIcons name='local-drink' color='#18191A' size={35} />
                    <Text style={styles.itemText}>Softdrinks</Text>
                </View>
                <View style={styles.itemView}>
                    <MaterialIcons name='bakery-dining' color='#18191A' size={35} />
                    <Text style={styles.itemText}>Bakery Items</Text>
                </View>
                <View style={styles.itemView}>
                    <MaterialIcons name='fastfood' color='#18191A' size={35} />
                    <Text style={styles.itemText}>Fast Food</Text>
                </View>
                <View style={styles.itemView}>
                    <MaterialCommunityIcons name='brightness-percent' color='#18191A' size={35} />
                    <Text style={styles.itemText}>Deals</Text>
                </View>
                <View style={styles.itemView}>
                    <MaterialCommunityIcons name='coffee' color='#18191A' size={35} />
                    <Text style={styles.itemText}>Coffee &amp; Tea</Text>
                </View>
                <View style={styles.itemView}>
                    <MaterialIcons name='cake' color='#18191A' size={35} />
                    <Text style={styles.itemText}>Desserts</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    view: {
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20
    },
    itemView: {
        alignItems: 'center',
        marginRight: 30,
    },
    itemText: {
        fontSize: 13,
        fontWeight: '700',
    }
})