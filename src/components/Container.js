import React from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles } from '../styles/global';
import * as Colors from '../styles/colors';

const Container = ({children}) => {
    return (
        <LinearGradient colors={[Colors.DARKBLUE, Colors.BLACK]} style={globalStyles.gradient}>
            <StatusBar backgroundColor="#000" />
            {children}
        </LinearGradient>
    )
}

export default Container;
