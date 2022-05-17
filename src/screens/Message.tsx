import React, {useCallback} from 'react'
import {StyleSheet, View, Text, FlatList, Alert} from 'react-native'
import ChatListItem from '../Components/Messages/ChatListItem'
import Chats from '../data/Chat'
import Floating from '../Components/Utils/Floating'
import MessageIcon from '../Assets/Icons/message_new.svg'
import {useNavigation} from '@react-navigation/native'
import {useRoute} from '@react-navigation/native'

export default function Message() {
  const route = useRoute()
  const navigation = useNavigation()
  const newMessagePress = useCallback(() => navigation.navigate('ProfileNavigator'), [])
  const {type} = route.params
  if (type != '') {
    if (type == 'Profile') {
      navigation.navigate('ProfileNavigator')
    }
  }

  return (
    <View style={[styles.view]}>
      <FlatList
        data={Chats}
        renderItem={({item}) => <ChatListItem chat={item}></ChatListItem>}
        keyExtractor={(item, index) => item.friendId + index}></FlatList>

      <Floating Icon={MessageIcon} onPress={newMessagePress} />
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
