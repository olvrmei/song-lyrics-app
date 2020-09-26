import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MusicPage({ navigation }){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.tit}> Music Page Screen </Text>
        
        
        
            <Button title="Voltar para a busca" onPress={ () => navigation.navigate('SearchResult')} />
            <Button title="Nova Busca" onPress={ () => navigation.navigate('Search')} />
        </View>
    )
}
