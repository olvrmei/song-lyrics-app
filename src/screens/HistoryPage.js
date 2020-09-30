import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';
import * as Colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function HistoryPage({ navigation }){
    const [search, setSearch] = useState([])
    
    const deleteHistory = async () => {
        await AsyncStorage.setItem('@search', '[]')
    }

    useEffect(() => {
        async function loadHistory(){
            var new_search = []
            const searchStorage = await AsyncStorage.getItem('@search')
            if(searchStorage){new_search = JSON.parse(searchStorage)}
            
            setSearch(new_search.reverse()) // reverse to get latest searches
        }
        loadHistory()
    }, [])

    return(
        <LinearGradient colors={[Colors.DARKBLUE, Colors.BLACK]} style={globalStyles.gradient}>
            
            <Image style={globalStyles.logo} source={require('../assets/images/lendo_musica_logo1.png')} />
            <TouchableOpacity 
            onPress={deleteHistory}>
                <Text style={styles.cleanText}>Limpar Histórico X</Text>
            </TouchableOpacity>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                {search.map((item,i) => (
                    <View style={globalStyles.button} key={i}>
                        <Text style={styles.historyText}>{item.artist} - {item.title}</Text>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity 
            style={globalStyles.button}
            onPress={() => navigation.goBack()} >
                <Image source={require('../assets/images/search.png')}/>
                <Text style={globalStyles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cleanText:{
        fontFamily:'OpenSans-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.WHITE,
        marginTop: 20,
        marginBottom: 20,
    },
    historyText:{
        fontFamily:'OpenSans-Regular',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        color: Colors.YELLOW,
        textTransform: 'capitalize',
        
    }
})