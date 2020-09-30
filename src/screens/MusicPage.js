import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';
import * as Colors from '../styles/colors';

export default function MusicPage({ route, navigation }){

    useEffect(() => {
        async function saveOnHistory(){
            var search = [];            
            const data = {
                artist: route.params.artist,
                title: route.params.title
            }

            const searchHistory = await AsyncStorage.getItem('@search')
            if(searchHistory){search = JSON.parse(searchHistory)}
            
            search.push(data)
            await AsyncStorage.setItem("@search", JSON.stringify(search))
        }
        saveOnHistory()
    }, [])

    return(
        <View style={[globalStyles.container, {backgroundColor:Colors.WHITE}]}>
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 43
            }}>   
            <Image style={globalStyles.logo} source={require('../assets/images/lendo_musica_logo2.png')} />
            
            <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('SearchResult')} >
                <Image source={require('../assets/images/arrow_alt_circle_left.png')}/>
                <Text style={styles.returnText}>Voltar para a busca</Text>
            </TouchableOpacity>

             
                <Text style={styles.titleText}>{route.params.title}</Text>
                <Text style={styles.lyricsText}>{route.params.lyrics}</Text>
            
            
                <Text style={styles.bottomText}>Curtiu? Busque mais letras.</Text>
                <TouchableOpacity 
                style={[globalStyles.button, styles.blueButton]}
                onPress={ () => navigation.navigate('Search')} >
                    <Image source={require('../assets/images/search_white.png')}/>
                    <Text style={[globalStyles.buttonText, {color: Colors.WHITE}]}>Nova Busca</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backButton:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginBottom: 30,
    },
    returnText:{
        fontFamily:'OpenSans-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: Colors.BLUE,
        marginHorizontal: 10,
    },
    titleText:{
        fontFamily:'OpenSans-Bold',
        fontSize: 24,
        color: Colors.DARKBLUE,
        textTransform: 'capitalize',
        marginBottom: 40,
    },
    lyricsText:{
        fontFamily:'OpenSans-Regular',
        fontSize: 14,
        color: Colors.DARKBLUE,
        lineHeight: 20,
    },
    bottomText:{
        fontFamily:'OpenSans-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.DARKBLUE,
        marginTop: 40,
    },
    blueButton:{
        backgroundColor: Colors.BLUE,
        borderColor: Colors.BLUE,
        alignSelf: 'center'
    }
})