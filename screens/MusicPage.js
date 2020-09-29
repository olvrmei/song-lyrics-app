import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MusicPage({ route, navigation }){
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