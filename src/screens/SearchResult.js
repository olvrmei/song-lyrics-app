import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SearchResult({ route, navigation }){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Letra encontrada</Text>
            
            <Text>{route.params.title} de {route.params.artist}</Text>

            <Button title="Eh essa" onPress={() => navigation.navigate('MusicPage', {
              artist: route.params.artist,
              title: route.params.title,
              lyrics: route.params.lyrics,
            })} />
            
            <Text style={styles.text}>Não encontrou o que procurava?</Text>
            <Button title="Nova Busca" onPress={ () => {navigation.goBack();}} />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'OpenSans-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
    },
})