import React from 'react'
import Space from '../Space'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const SpaceNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Space" component={Space} />
    </Stack.Navigator>
  )
}
export default SpaceNavigator
