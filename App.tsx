import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Categories from './src/components/Categories';
import HeaderTab from './src/components/HeaderTab';
import SearchBar from './src/components/SearchBar';
import Home from './src/screens/Home';

const App = () => {

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.backgroundHeader}>
                <HeaderTab />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    backgroundHeader: {
        backgroundColor: '#fff',
        padding: 15
    }
})

export default App;
