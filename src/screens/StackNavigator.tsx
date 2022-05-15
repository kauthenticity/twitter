import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Profile from './Drawers/Profile'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default StackNavigator
