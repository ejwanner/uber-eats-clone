import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type HeaderTabProps = {
    activeTab: string;
    setActiveTab: any;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ activeTab, setActiveTab }) => {

    return (
        <View style={styles.headerView}>
            <HeaderButton
                text='Delivery'
                btnColor=''
                textColor=''
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text='Pickup'
                btnColor=''
                textColor=''
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

export default HeaderTab;

const HeaderButton = (props: any) => (
    <TouchableOpacity
        style={props.activeTab === props.text ? styles.headerButtonBlack : styles.headerButtonWhite}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={props.activeTab === props.text ? styles.headerButtonTextWhite : styles.headerButtonTextBlack}>{props.text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    headerButtonWhite: {
        backgroundColor: 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    headerButtonBlack: {
        backgroundColor: 'black',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    headerButtonTextWhite: {
        color: 'white',
        fontSize: 16,
        fontWeight: '900',
    },
    headerButtonTextBlack: {
        color: 'black',
        fontSize: 16,
        fontWeight: '900',
    }
})