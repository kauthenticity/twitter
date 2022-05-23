import React from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'

const NotInterested = () => {
  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={[styles.container]}>
        <Text style={[styles.emptyText]}>Nothing to see here — yet.</Text>
      </View>
    </ScrollView>
  )
}
export default NotInterested

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    paddingHorizontal: 15,
  },
  emptyText: {
    fontWeight: '800',
    fontSize: 30,
  },
})
