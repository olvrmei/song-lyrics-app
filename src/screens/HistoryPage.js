import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';

export default function HistoryPage({ navigation }){
    const [search, setSearch] = useState([])
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        async function loadHistory(){
            var new_search = []
            const searchStorage = await AsyncStorage.getItem('@search')

            if(searchStorage){new_search = JSON.parse(searchStorage)}

            setSearch(new_search)
            setVisible(true)
        }
        loadHistory()
    }, [])

    async function deleteHistory(){
        await AsyncStorage.setItem('@search', '[]')
        setVisible(false)
    }

    return(
        <View style={globalStyles.container}>
            <TouchableOpacity 
            onPress={() => deleteHistory()}>
                <Text style={globalStyles.titleText}>Limpar Histórico X</Text>
            </TouchableOpacity>
            <ScrollView>
                {search.map((item,i) => (
                    <View key={i}>
                        <Text>{item.artist} - {item.title}</Text>
                    </View>
                ))}
            </ScrollView>
            <Button title="Buscar" onPress={ () => navigation.goBack()} />
        </View>
    )
}
