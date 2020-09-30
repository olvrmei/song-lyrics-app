import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';

export default function HistoryPage({ navigation }){
    const [searches, setSearches] = useState([])

    useEffect(() => {
        async function loadHistory(){
            let search = []
            let aux = await AsyncStorage.getItem('@search')
            if(aux)
                search = JSON.parse(aux)
            setSearches(search)
        }
        loadHistory()
    }, [])

    async function deleteHistory(){
        await AsyncStorage.setItem('@search', '[]')
    }

    function show(){
        if(searches.length > 0){
            return searches.reverse().map((search,i) => {
                return(
                    <View key={i}>
                        <Text>{search.artist} - {search.title}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View style={globalStyles.container}>
            <TouchableOpacity 
            onPress={() => deleteHistory()}>
                <Text style={globalStyles.titleText}>Limpar Histórico X</Text>
            </TouchableOpacity>
            
            {show()}
            <Button title="Buscar" onPress={ () => navigation.goBack()} />
        </View>
    )
}
