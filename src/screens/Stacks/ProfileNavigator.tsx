import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {lightblue, white} from '../../theme'
import Profile from '../Profile'

const Stack = createStackNavigator()

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen options={{cardStyle: {backgroundColor: lightblue}}} name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
