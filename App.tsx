import React from 'react'
import 'react-native-gesture-handler'
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import BottomTab from './src/screens/BottomTab'
import Drawer from './src/screens/Drawer'
import IndexNavigator from './src/screens/IndexStack'
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <IndexNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
