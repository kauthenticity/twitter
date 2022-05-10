import React, {useMemo, useCallback} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import type {IChat} from '../../data/IChat'

type ChatListItemProps = {
  chat: IChat
}

const size = 56

const ChatListItem = ({chat}: ChatListItemProps) => {
  const lastChat = useMemo(() => {
    return chat.chats.slice(-1)[0]
  }, [chat.chats])
  const chatClicked = useCallback(() => Alert.alert('chat clicked'), [])

  return (
    <TouchableOpacity onPress={chatClicked}>
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: chat.profileUri}} />
        <View style={styles.contentContainer}>
          <View style={styles.contentTop}>
            <Text style={styles.title}>{chat.friendName}</Text>
            <Text style={styles.text}>@{chat.friendId}</Text>
          </View>
          <View style={styles.contentBottom}>
            <Text style={styles.text}>
              {lastChat.talkMe ? 'You: ' : chat.friendName + ': '}
              {lastChat.message}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  img: {
    width: size,
    height: size,
    borderRadius: size / 2,
    marginRight: 10,
  },
  imgContainer: {},
  contentContainer: {},
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  contentBottom: {},
  text: {
    color: '#415260',
  },
  title: {
    marginRight: 3,
    fontWeight: '600',
  },
})
