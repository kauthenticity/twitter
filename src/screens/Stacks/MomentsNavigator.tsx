import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Moments from '../Moments'

const Stack = createStackNavigator()

export const MomentsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Moments" component={Moments} />
    </Stack.Navigator>
  )
}
