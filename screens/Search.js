import React,{ useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { set } from 'react-native-reanimated';
import { globalStyles } from '../styles/global';

export default function Search({ navigation }){
    const [artist, setArtist] = useState('Seori')
    const [song, setSong] = useState('Hairdryer')

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Buscar </Text>
            
        <Text style={styles.inputTitle}>Artista {artist} </Text>
            <TextInput 
                style={StyleSheet.input}
                placeholder='Insira o nome do artista'
                onChangeText={ (val) => setArtist(val)}
            />

            <Text style={styles.inputTitle}>Música {song}</Text>
            <TextInput 
                style={StyleSheet.input}
                placeholder='Insira o nome da música'
                onChangeText={ (val) => setSong(val)}
            />

            <Button title="Buscar" onPress={ () => navigation.navigate('SearchResult')} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputTitle:{
        fontFamily:'OpenSans-Bold',
        fontSize: 16,
        alignContent:'center',
        textAlign: 'left',
        color: '#000',
    },
    input:{
        borderWidth:1,
        borderColor:'#777',
        padding: 8,
        margin: 10,
        width: 200,
        fontFamily:'OpenSans-Regular',
        fontSize: 16,
    }
})