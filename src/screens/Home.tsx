import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import Tweet from '../Components/Home/Tweet'
import * as D from '../data'

import {createStackNavigator} from '@react-navigation/stack'

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

const Home = () => {
  return (
    <View style={[styles.view]}>
      <FlatList data={people} renderItem={({item}) => <Tweet person={item} />} keyExtractor={item => item._id} />
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
