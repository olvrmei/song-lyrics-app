import React,{ useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from 'axios';

export default function Search({ navigation }){
    const [artist, setArtist] = useState('')
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')
    
    /*const getLyrics = async () => {
        if(artist == '' || title == '') return;

        await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(response =>{
            const ly = response.data.lyrics

            if(response.status === 200){
                if(ly != ""){
                    setLyrics(ly)
                    navigation.navigate('SearchResult',{
                    artist: artist,
                    title: title,
                    lyrics: ly,
                    })
                    setArtist('')
                    setTitle('')
                }
                else{
                    navigation.navigate('ErrorSearch')
                    setArtist('')
                    setTitle('')
                    setLyrics('')
                }
            }
            if(response.status === 404){
                alert('deu tudo errado')
                return;
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }*/
    
    const getLyrics = async () => {
        if(artist == '' || title == '') return;
        try {
          const response = await axios.get(
            `https://api.lyrics.ovh/v1/${artist}/${title}`
          );          
          const ly = response.data.lyrics
          if(ly != ""){
            setLyrics(ly)
            navigation.navigate('SearchResult',{
            artist: artist,
            title: title,
            lyrics: ly,
            })
            setArtist('')
            setTitle('')
        }
        else{
            navigation.navigate('ErrorSearch')
            setArtist('')
            setTitle('')
            setLyrics('')
        }
        } catch (error) {
          alert(error.message);
        }
    };
    
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Buscar</Text>
            
        <Text style={styles.inputArtist}>Artista</Text>
            <TextInput 
                style={styles.input}
                value={artist}
                placeholder='Insira o nome do artista'
                onChangeText={ (val) => setArtist(val)}
            />

            <Text style={styles.inputTitle}>Música</Text>
            <TextInput 
                style={styles.input}
                value={title}
                placeholder='Insira o nome da música'
                onChangeText={ (val) => setTitle(val)}
            />

            <Button title="Buscar" onPress={() => getLyrics()} />

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
        width: 300,
        fontFamily:'OpenSans-Regular',
        fontSize: 16,
    },
})