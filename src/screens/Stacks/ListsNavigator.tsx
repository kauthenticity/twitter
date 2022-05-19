import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack'
import StackHeader from '../../Components/StackHeader'
import Lists from '../Lists'

const Stack = createStackNavigator()

const Profile = () => (
  <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>List screen!</Text>
  </SafeAreaView>
)

export const ListsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Lists" component={Lists} />
    </Stack.Navigator>
  )
}
