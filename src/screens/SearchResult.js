import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Colors from '../styles/colors';
import Container from '../components/Container';

export default function SearchResult({ route, navigation }){
    return(
        <Container>
            <Image style={globalStyles.logo} source={require('../assets/images/lendo_musica_logo1.png')} />
            <Text style={globalStyles.titleText}>Letra encontrada</Text>
            
            <TouchableOpacity 
            style={styles.result}
            onPress={() => navigation.navigate('MusicPage', {
                artist: route.params.artist,
                title: route.params.title,
                lyrics: route.params.lyrics,
              })}>
                <Text style={[styles.text1,{fontFamily:'OpenSans-Bold'}]}>{route.params.artist}</Text>
                <Text style={styles.text1}>{route.params.title}</Text>
            </TouchableOpacity>
            
            <Text style={styles.text2}>Não encontrou o que procurava?</Text>

            <TouchableOpacity 
            style={globalStyles.button}
            onPress={() => navigation.goBack()} >
                <Image source={require('../assets/images/search.png')}/>
                <Text style={globalStyles.buttonText}>Nova Busca</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    text1:{     
        textTransform: 'capitalize',
        fontFamily:'OpenSans-Regular',
        fontSize: 16,
        color: Colors.WHITE,
    },
    text2:{
        fontFamily:'OpenSans-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.WHITE,
        marginTop: 100,
        marginLeft: 43,
        marginRight: 43,
        width: 274,
        height: 53,
        lineHeight: 25,
    },
    result:{
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: Colors.BLUE,
        padding: 20,
        width: 274,
        borderRadius: 4,
    },
})