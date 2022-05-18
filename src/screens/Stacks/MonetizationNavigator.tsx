import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const Monetization = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Monetizations screen!</Text>
  </View>
)

export const MonetizationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Monetization" component={Monetization} />
    </Stack.Navigator>
  )
}
