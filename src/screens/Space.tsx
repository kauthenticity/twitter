import React from 'react'
import {StyleSheet, View, Text, SafeAreaView} from 'react-native'
import {Colors} from 'react-native-paper'
import Header from '../Components/Header'

const title = 'space'
export default function Search() {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={[styles.view]}>
        <Header title={title} placeholder="Search for a Space"></Header>

        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={[styles.text]}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, paddingHorizontal: 5, backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center'},
  text: {fontSize: 20, color: '#000'},
})
