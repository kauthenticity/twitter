import React from 'react'
import Message from '../Message'
import {ProfileNavigator} from './ProfileNavigator'
import {ListsNavigator} from './ListsNavigator'
import {MomentsNavigator} from './MomentsNavigator'
import {BookmarksNavigator} from './BookmarksNavigator'
import {MonetizationNavigator} from './MonetizationNavigator'
import {ProfessionalsNavigator} from './ProfessinalsNavigator'
import {PurchasesNavigator} from './PurchasesNavigator'
import {SettingsNavigator} from './SettingsNavigator'
import {TopicsNavigator} from './TopicsNavigator'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {createStackNavigator} from '@react-navigation/stack'

type MessageNavigatorParamList = {
  Message: undefined
  ProfileNavigator: undefined
  ListsNavigator: undefined
  BookmarksNavigator: undefined
  MomentsNavigator: undefined
  MonetizationNavigator: undefined
  ProfessionalsNavigator: undefined
  PurchasesNavigator: undefined
  SettingsNavigator: undefined
  TopicsNavigator: undefined
}

const Stack = createStackNavigator()

const MessageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Message"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="ListsNavigator" component={ListsNavigator} />
      <Stack.Screen name="MomentsNavigator" component={MomentsNavigator} />
      <Stack.Screen name="ProfessionalsNavigator" component={ProfessionalsNavigator} />
      <Stack.Screen name="PurchasesNavigator" component={PurchasesNavigator} />
      <Stack.Screen name="SettingsNavigator" component={SettingsNavigator} />
      <Stack.Screen name="TopicsNavigator" component={TopicsNavigator} />
      <Stack.Screen name="BookmarksNavigator" component={BookmarksNavigator} />
      <Stack.Screen name="MonetizationNavigator" component={MonetizationNavigator} />
    </Stack.Navigator>
  )
}
export default MessageNavigator
