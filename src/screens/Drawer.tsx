import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTab from './BottomTab'
import DrawerContent from './Drawers/DrawerContent'
import Profile from './Stacks/ProfileStackNavigator'

type DrawerProps = {
  BottomTab: undefined
  Profile: undefined
}

const Drawer = createDrawerNavigator<DrawerProps>()

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, drawerStyle: {width: '80%'}}} drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}

export default MyDrawer
