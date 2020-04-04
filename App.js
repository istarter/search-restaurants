import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }    
}
);

export default createAppContainer(navigator);
