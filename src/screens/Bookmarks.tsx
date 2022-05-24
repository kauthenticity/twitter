import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'
import Tweet from '../Components/Home/Tweet'
import StackHeader from '../Components/StackHeader'
import * as D from '../data'
import MoreIcon from '../Assets/Icons/more.svg'
import {getBookmarks} from '../utils/asyncStorage'

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)
const ICON_SIZE = 24

const Bookmarks = () => {
  const [show, setShow] = useState<boolean>(false)
  const [bookmarks, setBookmarks] = useState<D.IPerson[]>([])

  useEffect(() => {
    getBookmarks().then(bookmarks => {
      setBookmarks(bookmarks)
    })
  }, [])
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={[styles.view]}>
        <StackHeader title="Bookmarks">
          <TouchableOpacity onPress={() => setShow(show => !show)}>
            <MoreIcon width={ICON_SIZE} height={ICON_SIZE} fill="#000" />
          </TouchableOpacity>
        </StackHeader>
        <FlatList data={bookmarks} renderItem={({item}) => <Tweet person={item} />} keyExtractor={item => item._id} />
      </View>
    </SafeAreaView>
  )
}

export default Bookmarks
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
