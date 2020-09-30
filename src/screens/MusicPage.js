import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';

export default function MusicPage({ route, navigation }){

    useEffect(() => {
        async function saveOnHistory(){
            let search = [];
            let searchHistory = await AsyncStorage.getItem('@search')
            
            if(searchHistory){
                search = JSON.parse(searchHistory)
            }

            if(search) // search.lenght > 0
            {
                for(let i of search){
                    if(i.artist === route.params.artist && i.title === route.params.artist) return;
                }
            }
            let data = {
                artist: route.params.artist,
                title: route.params.title
            }

            search.push(data)
            await AsyncStorage.setItem("@search", JSON.stringify(search))
        }
        saveOnHistory()
    }, [])

    return(
        <View style={globalStyles.container}>
            <Button title="Voltar para a busca" onPress={ () => navigation.navigate('SearchResult')} />

            <ScrollView>    
                <Text style={styles.text}>{route.params.title} de {route.params.artist}</Text>
                <Text>{route.params.lyrics}</Text>
            </ScrollView>
            
                <Text style={styles.text}>Curtiu? Busque mais letras.</Text>
                <Button title="Nova Busca" onPress={ () => navigation.navigate('Search')} />
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