import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTab from './BottomTab'
import DrawerContent from './Drawers/DrawerContent'
import * as stack from './Stacks'

type DrawerProps = {
  BottomTab: undefined
  Profile: undefined
  Lists: undefined
  Topics: undefined
  Bookmarks: undefined
  Moments: undefined
  Purchases: undefined
  Monetizations: undefined
  Professionals: undefined
  Settings: undefined
}

const Drawer = createDrawerNavigator<DrawerProps>()

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, drawerStyle: {width: '80%'}}} drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      {/* <Drawer.Screen name="Profile" component={stack.ProfileStackNavigator} />
      <Drawer.Screen name="Lists" component={stack.ListsStackNavigator} />
      <Drawer.Screen name="Topics" component={stack.TopicsStackNavigator} />
      <Drawer.Screen name="Bookmarks" component={stack.BookmarksStackNavigator} />
      <Drawer.Screen name="Moments" component={stack.MomentsStackNavigator} />
      <Drawer.Screen name="Purchases" component={stack.PurchasesStackNavigator} />
      <Drawer.Screen name="Monetizations" component={stack.MonetizationStackNavigator} />
      <Drawer.Screen name="Professionals" component={stack.ProfessionalsStackNavigator} />
      <Drawer.Screen name="Settings" component={stack.SettingsStackNavigator} /> */}
    </Drawer.Navigator>
  )
}

export default MyDrawer
