import React from 'react'
import Notification from '../Notification'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const NotificationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  )
}
export default NotificationNavigator
