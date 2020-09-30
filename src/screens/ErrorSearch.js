import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ErrorSearch({ navigation }){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Letra não encontrada</Text>
            {/*imagem*/}
            <Text>Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca</Text>
            <Button title="Nova Busca" onPress={ () => navigation.goBack()} />
        </View>
    )
}
