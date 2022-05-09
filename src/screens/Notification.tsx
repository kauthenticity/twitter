import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import All from '../Components/Notifications/All'
import Mentions from '../Components/Notifications/Mentions'
import AutoHeightImage from 'react-native-auto-height-image'

type TopTabParam = {
  All: undefined
  Mentions: undefined
}

const Tab = createMaterialTopTabNavigator<TopTabParam>()

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        //tabBarItemStyle: {width: 100},
        tabBarIndicatorStyle: {
          width: 70,
          height: 3,
          borderRadius: 3,
          backgroundColor: '#1C9BEF',
        },
      }}>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Mentions" component={Mentions} />
    </Tab.Navigator>
  )
}
export default MyTabs
