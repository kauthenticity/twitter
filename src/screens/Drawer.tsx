import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTab from './BottomTab'
import DrawerContent from './Drawers/DrawerContent'

type DrawerProps = {
  BottomTab: undefined
}

const Drawer = createDrawerNavigator<DrawerProps>()

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
    </Drawer.Navigator>
  )
}

export default MyDrawer
