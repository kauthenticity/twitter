import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Index from '../Index'
import LoginId from '../LoginId'
import LoginPw from '../LoginPw'
import Forgot from '../Forgot'
type StackType = {
  Index: undefined
  LoginId: undefined
  LoginPw: {id: string}
  Forgot: undefined
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
    </Stack.Navigator>
  )
}
