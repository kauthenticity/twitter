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
      <Text style={[styles.label]}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  label: {
    fontSize: 17,
  },
  icon: {
    marginRight: 15,
  },
})

export default DrawerListItem
