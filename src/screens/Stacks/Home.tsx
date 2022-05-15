import React from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'
import styled from 'styled-components/native'
import Tweet from '../../Components/Home/Tweet'
import Separator from '../../Components/Home/Separator'
import * as D from '../../data'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()
const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

const Home = () => {
  return (
    <View style={[styles.view]}>
      <FlatList data={people} renderItem={({item}) => <Tweet person={item} />} keyExtractor={item => item._id} />
    </View>
  )
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Book" component={Home} />
    </Stack.Navigator>
  )
}
export default HomeNavigator
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
