import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Topics from '../Topics'

const Stack = createStackNavigator()

export const TopicsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Topics" component={Topics} />
    </Stack.Navigator>
  )
}
