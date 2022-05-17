import React from 'react'
import Message from '../Message'
import {ProfileNavigator} from './ProfileNavigator'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {createStackNavigator} from '@react-navigation/stack'

type MessageNavigatorParamList = {
  Message: {
    type: string
  }
  ProfileNavigator: undefined
}
type Props = NativeStackScreenProps<MessageNavigatorParamList, 'Message'>

const Stack = createStackNavigator()

const MessageNavigator = ({route, navigation}: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Message" initialParams={{type: route.params.type}} component={Message} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator}></Stack.Screen>
    </Stack.Navigator>
  )
}
export default MessageNavigator
