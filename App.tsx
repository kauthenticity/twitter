import 'react-native-gesture-handler'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import BottomTab from './src/screens/BottomTab'
import Drawer from './src/screens/Drawer'
import {IndexNavigator} from './src/screens/Stacks/IndexNavigator'

import {Provider as ReduxProvider} from 'react-redux'
import {store} from './src/Redux/store'

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

export default App
