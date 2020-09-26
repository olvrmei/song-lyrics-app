import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SearchResult({ navigation }){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Letra encontrada</Text>
            {/* Rectangle instead of button? */}
            <Button title="Eh essa" onPress={ () => navigation.navigate('MusicPage')} />
            
            <Text style={styles.text}>Não encontrou o que procurava?</Text>
            <Button title="Nova Busca" onPress={ () => navigation.goBack()} />
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