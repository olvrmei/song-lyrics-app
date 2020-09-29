import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from 'axios';
import { useValue } from 'react-native-reanimated';


export default function SearchResult({ route, navigation }){
    /*
    const getLyrics = async () => {
        try {
          const response = await axios.get(
            'https://api.lyrics.ovh/v1/' + route.params.artist + '/' + route.params.title
          );
          // alert(JSON.stringify(response.data.lyrics));
          var lyrics = response.data.lyrics
          navigation.navigate('MusicPage', {
            artist: route.params.artist,
            title: route.params.title,
            lyrics: route.params.lyrics,
          })
        } catch (error) {
          alert(error.message);
        }
    };*/

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Letra encontrada</Text>
            
            <Text>{route.params.title} de {route.params.artist}</Text>

            <Button title="Eh essa" onPress={() => {navigation.navigate('MusicPage', {
            artist: route.params.artist,
            title: route.params.title,
            lyrics: route.params.lyrics,
          })}}/>
            
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