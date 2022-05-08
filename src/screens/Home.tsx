import React from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'
import styled from 'styled-components/native'
import Tweet from '../Components/Home/Tweet'
import * as D from '../data'

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

export default function Home() {
  return (
    <View style={[styles.view]}>
      <FlatList data={people} renderItem={({item}) => <Tweet person={item} />} keyExtractor={item => item._id} />
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
