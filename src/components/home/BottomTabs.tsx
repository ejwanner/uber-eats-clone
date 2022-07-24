import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabs = () => {
    return (
        <View style={styles.tabView}>
            <Icon icon='home' text='Home' />
            <Icon icon='find-replace' text='Search' />
            <Icon icon='baguette' text='Grocery' />
            <Icon icon='receipt' text='Orders' />
            <Icon icon='account' text='Account' />
        </View>
    )
}

export default BottomTabs

type IconProps = {
    icon: string;
    text: string;
}

const Icon: React.FC<IconProps> = ({ icon, text }) => (
    <View style={styles.iconView}>
        <MaterialIcons name={icon} size={30} style={styles.icon} />
        <Text>
            {text}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    tabView: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },
    icon: {
        marginBottom: 3,
        alignSelf: 'center'
    },
    iconView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})