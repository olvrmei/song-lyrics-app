import React,{ useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Colors from '../styles/colors';
import Container from '../components/Container';
import axios from 'axios';

export default function Search({ navigation }){
    const [artist, setArtist] = useState('')
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')
    
    const getLyrics = async () => {
        if(artist == '' || title == '') return;
        try {
            const response = await axios.get(
            `https://api.lyrics.ovh/v1/${artist}/${title}`
            );          
            const ly = response.data.lyrics
            if(ly !== ""){
                setLyrics(ly)
                navigation.navigate('SearchResult',{
                artist: artist.toLowerCase(),
                title: title.toLowerCase(),
                lyrics: ly,
                })
            }
            else{
                navigation.navigate('ErrorSearch')
            }
            setArtist('')
            setTitle('')
        } catch (error) {
          alert(error.message);
          navigation.navigate('ErrorSearch')
        }
    };
    
    return(
        <Container>
            <Image style={globalStyles.logo} source={require('../assets/images/lendo_musica_logo1.png')} />
            <Text style={globalStyles.titleText}>Buscar letra</Text>
            
            <View style={styles.inputBox}>
                <Text style={styles.inputTitle}>Artista</Text>
                <TextInput 
                    style={styles.input}
                    value={artist}
                    placeholder='Insira o nome do artista'
                    placeholderTextColor= '#828282'
                    onChangeText={ (val) => setArtist(val)}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputTitle}>Música</Text>
                <TextInput 
                    style={styles.input}
                    value={title}
                    placeholder='Insira o nome da música'
                    placeholderTextColor= '#828282'
                    onChangeText={ (val) => setTitle(val)}
                />
            </View>    

            <TouchableOpacity style={globalStyles.button} onPress={getLyrics} >
                <Image source={require('../assets/images/search.png')}/>
                <Text style={globalStyles.buttonText}>Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('HistoryPage')} >
                <Text style={globalStyles.buttonText}>Últimas buscas</Text>
            </TouchableOpacity>

        </Container>
    )
}

const styles = StyleSheet.create({
    inputTitle:{
        fontFamily:'OpenSans-Bold',
        fontSize: 16,
        alignContent:'center',
        textAlign: 'left',
        color: Colors.WHITE,
    },
    input:{
        justifyContent: 'flex-start',
        fontFamily:'OpenSans-Regular',
        fontSize: 16,
        color: Colors.WHITE,
        textAlign: 'left',
    },
    inputBox:{
        marginTop: 30,
        marginBottom: 30,
        width: 276,
        height: 59,
        borderColor: Colors.WHITE,
        borderBottomWidth: 1,
    }
})