import React from 'react'
import Trend from '../Trend'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const TrendNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Trend" component={Trend} />
    </Stack.Navigator>
  )
}
export default TrendNavigator
