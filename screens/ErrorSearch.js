import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ErrorSearch({ navigation }){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Error Search Screen </Text>
            
            <Button title="Nova Busca" onPress={ () => navigation.goBack()} />
        </View>
    )
}
