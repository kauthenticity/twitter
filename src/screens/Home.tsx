import React from 'react'
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native'
import Tweet from '../Components/Home/Tweet'
import * as D from '../data'
import Header from '../Components/Header'
import TimelineIcon from '../Assets/Icons/timeline.svg'

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={[styles.view]}>
        <Header title="Home" placeholder="Search Twitter">
          <TimelineIcon width={24} height={24} fill={'#000'} />
        </Header>
        <FlatList data={people} renderItem={({item}) => <Tweet person={item} />} keyExtractor={item => item._id} />
      </View>
    </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
