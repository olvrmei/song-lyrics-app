import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Colors from '../styles/colors';
import Container from '../components/Container';

export default function ErrorSearch({ navigation }){
    return(
        <Container>
            <Image style={globalStyles.logo} source={require('../assets/images/lendo_musica_logo1.png')} />
            
            <Text style={globalStyles.titleText}>Letra não encontrada</Text>
            
            <Image style={styles.image} source={require('../assets/images/illustration_lendo_musica1.png')}/>
            
            <Text style={styles.text}>Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca &lt;3</Text>
    
            <TouchableOpacity style={globalStyles.button} onPress={() => navigation.goBack()} >
                <Image source={require('../assets/images/search.png')}/>
                <Text style={globalStyles.buttonText}>Nova Busca</Text>
            </TouchableOpacity>

        </Container>
    )
}

const styles = StyleSheet.create({
    text:{
        marginTop:20,
        marginBottom: 20,
        width: 274,
        justifyContent: 'flex-end',
        fontFamily:'OpenSans-Regular',
        fontSize: 16,
        color: Colors.WHITE,
        lineHeight: 22,
    },
    image:{
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
    }
})
