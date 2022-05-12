import React from 'react'
import {View, StyleSheet} from 'react-native'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props
  return (
    <DrawerContentScrollView {...props}>
      <View></View>
    </DrawerContentScrollView>
  )
}
export default DrawerContent

const styles = StyleSheet.create({})
