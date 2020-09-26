import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/Search'
import SearchResult from './screens/SearchResult';
import MusicPage from './screens/MusicPage';
import ErrorSearch from './screens/ErrorSearch';

const Stack = createStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
          <Stack.Screen name="ErrorSearch" component={ErrorSearch} />
          <Stack.Screen name="MusicPage" component={MusicPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

