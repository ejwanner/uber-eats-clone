import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

type SearchBarProps = {
    cityHandler: any
}

const SearchBar: React.FC<SearchBarProps> = ({ cityHandler }) => {
    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <View style={styles.renderLeftButtonView}>
                <Ionicons name="location-sharp" size={24} />
            </View>
            <TextInput
                placeholder="Search"
                style={{
                    width: '65%',
                }}
                onChangeText={(name: string) => {
                    setCityName(name);
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    cityHandler(cityName);
                    console.log(cityName);
                }}
            >
                <View style={styles.renderRightButtonView}>
                    <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                    <Text>Search</Text>
                </View>
            </TouchableOpacity>
            {/* <GooglePlacesAutocomplete
                placeholder="Search"
                query={{ key: '' }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description.split(',')[0];
                    cityHandler(city);
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#ddd',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#ddd',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    }
                }}
                renderLeftButton={() => (
                    <View style={styles.renderLeftButtonView}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.renderRightButtonView}>
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </View>
                )}
            /> */}
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 15,
        flexDirection: 'row',
        // delete underneath
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 15,
        backgroundColor: '#ddd',
        borderRadius: 30,
        height: 50
    },
    renderLeftButtonView: {
        marginLeft: 15,
        // delete underneath
        paddingRight: 15,
        paddingLeft: 10
    },
    renderRightButtonView: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 30,
        alignItems: 'center',
        // delete underneath
    }
})