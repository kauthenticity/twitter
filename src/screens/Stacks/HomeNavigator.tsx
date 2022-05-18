import React from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'
import Home from '../Home'
import * as D from '../../data'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen options={{gestureEnabled: false}} name="Home" component={Home} />
    </Stack.Navigator>
  )
}
export default HomeNavigator
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
