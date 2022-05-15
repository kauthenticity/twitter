import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {IndexNavigator} from './Stacks/IndexNavigator'
const Stack = createStackNavigator()

const indexStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={IndexNavigator} />
    </Stack.Navigator>
  )
}

export default indexStack
