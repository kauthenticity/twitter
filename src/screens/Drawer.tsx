import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  )
}
function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={} />
      <Drawer.Screen name="Notifications" component={} />
    </Drawer.Navigator>
  )
}

export default MyDrawer
