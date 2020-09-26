import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SearchResult({ navigation }){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Search Result Screen </Text>
            
            <Button title="Eh essa" onPress={ () => navigation.navigate('MusicPage')} />
            <Button title="Nova Busca" onPress={ () => navigation.goBack()} />
        </View>
    )
}
