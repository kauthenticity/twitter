import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const Topics = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Topics screen!</Text>
  </View>
)

export const TopicsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Topics" component={Topics} />
    </Stack.Navigator>
  )
}
