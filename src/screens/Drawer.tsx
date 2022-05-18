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
    <Drawer.Navigator
      screenOptions={{swipeEdgeWidth: 0, headerShown: false, drawerStyle: {width: '80%'}}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      {/* <Drawer.Screen name="Profile" component={stack.ProfileNavigator} />
      <Drawer.Screen name="Lists" component={stack.ListsNavigator} />
      <Drawer.Screen name="Topics" component={stack.TopicsNavigator} />
      <Drawer.Screen name="Bookmarks" component={stack.BookmarksNavigator} />
      <Drawer.Screen name="Moments" component={stack.MomentsNavigator} />
      <Drawer.Screen name="Purchases" component={stack.PurchasesNavigator} />
      <Drawer.Screen name="Monetizations" component={stack.MonetizationNavigator} />
      <Drawer.Screen name="Professionals" component={stack.ProfessionalsNavigator} />
      <Drawer.Screen name="Settings" component={stack.SettingsStackNavigator} /> */}
    </Drawer.Navigator>
  )
}

export default MyDrawer
