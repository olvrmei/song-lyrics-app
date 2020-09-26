import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Search({ navigation }){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Search Screen </Text>
            <Button title="Buscar" onPress={ () => navigation.navigate('SearchResult')} />
        </View>
    )
}