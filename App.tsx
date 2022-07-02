import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import HeaderTab from './src/components/HeaderTab';
import Home from './src/screens/Home';

export default function App() {

    return (
        <SafeAreaView>
            <HeaderTab />
        </SafeAreaView>
    );
};
