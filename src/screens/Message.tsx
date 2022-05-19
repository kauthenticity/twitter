import React, {useCallback} from 'react'
import {StyleSheet, View, Text, FlatList, Alert, SafeAreaView} from 'react-native'
import ChatListItem from '../Components/Messages/ChatListItem'
import Chats from '../data/Chat'
import Floating from '../Components/Utils/Floating'
import MessageIcon from '../Assets/Icons/message_new.svg'
import {useNavigation} from '@react-navigation/native'
import {useRoute} from '@react-navigation/native'
import {useEffect} from 'react'
import Header from '../Components/Header'

import SettingsIcon from '../Assets/Icons/settings.svg'

export default function Message() {
  const route = useRoute()
  const navigation = useNavigation()
  const newMessagePress = useCallback(() => navigation.navigate('ProfileNavigator'), [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.view]}>
        <Header title="Message" placeholder="Search Direct Messages">
          <SettingsIcon width={24} height={24} fill={'#000'} />
        </Header>
        <FlatList
          data={Chats}
          renderItem={({item}) => <ChatListItem chat={item}></ChatListItem>}
          keyExtractor={(item, index) => item.friendId + index}></FlatList>

        <Floating Icon={MessageIcon} onPress={newMessagePress} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'white'},
})
