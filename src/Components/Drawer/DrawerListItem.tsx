import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

type DrawerListItemProps = {
  label: string
  children: React.ReactNode
}

const DrawerListItem = ({label, children}: DrawerListItemProps) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.icon]}>{children}</View>
      <Text>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
})

export default DrawerListItem
