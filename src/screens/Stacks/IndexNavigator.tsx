import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Index from '../Index'
import LoginId from '../LoginId'
import LoginPw from '../LoginPw'
import Forgot from '../Forgot'
import Drawer from '../Drawer'
type StackType = {
  Index: undefined
  LoginId: undefined
  LoginPw: {id: string}
  Forgot: undefined
  Main: undefined
}

const Stack = createStackNavigator<StackType>()

export const IndexNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="LoginId" component={LoginId} />
      <Stack.Screen name="LoginPw" component={LoginPw} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Main" component={Drawer} />
    </Stack.Navigator>
  )
}
