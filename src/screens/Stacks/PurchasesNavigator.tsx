import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const Purchases = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home screen!</Text>
  </View>
)

export const PurchasesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Purchases" component={Purchases} />
    </Stack.Navigator>
  )
}
