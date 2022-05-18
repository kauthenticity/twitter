import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import Header from '../Components/Header'

const title = 'space'
export default function Search() {
  return (
    <View style={[styles.view]}>
      <Header title={title} placeholder="Search for a Space"></Header>

      <View style={{justifyContent: 'center', flex: 1}}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center'},
  text: {fontSize: 20, color: '#000'},
})
