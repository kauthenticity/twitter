import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, Share} from 'react-native'
import {lightgray, darkgray} from '../../theme'
import MessageIcon from '../../Assets/Icons/message.svg'
import BookmarkAddIcon from '../../Assets/Icons/addBookmark.svg'
import LinkIcon from '../../Assets/Icons/link.svg'
import ShareIcon from '../../Assets/Icons/share.svg'
import ImessageIcon from '../../Assets/Icons/imessage.svg'

const ICON_SIZE = 24
const ICON_SIZE_LARGE = 28

export default function HomeBottomSheet() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.bar]}></View>
      <Text style={[styles.title]}> Share Tweets</Text>
      <View style={[styles.messageContainer]}>
        <MessageIcon width={ICON_SIZE} height={ICON_SIZE} fill={darkgray} />
        <TouchableOpacity>
          <Text style={[styles.messageText]}>Send Via Direct Message</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity style={[styles.iconWrapper]}>
          <View style={[styles.iconBackground]}>
            <BookmarkAddIcon width={ICON_SIZE_LARGE} height={ICON_SIZE_LARGE} fill={darkgray} />
          </View>
          <Text style={[styles.iconText]}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconWrapper]}>
          <View style={[styles.iconBackground]}>
            <LinkIcon width={ICON_SIZE_LARGE} height={ICON_SIZE_LARGE} fill={darkgray} />
          </View>
          <Text style={[styles.iconText]}>Copy Link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconWrapper]}>
          <View style={[styles.iconBackground]}>
            <ShareIcon width={ICON_SIZE_LARGE} height={ICON_SIZE_LARGE} fill={darkgray} />
          </View>
          <Text style={[styles.iconText]}>Share Via...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconWrapper]}>
          <Image style={[{width: 60, height: 60}]} source={require('../../Assets/Icons/instagram.png')}></Image>
          <Text style={[styles.iconText]}>Instagram Stories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconWrapper]}>
          <Image style={[{width: 60, height: 60, borderRadius: 30}]} source={require('../../Assets/Icons/imessage.png')}></Image>
          <Text style={[styles.iconText]}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconWrapper]}>
          <Image style={[{width: 60, height: 60, borderRadius: 30}]} source={require('../../Assets/Icons/mail.png')}></Image>
          <Text style={[styles.iconText]}>Mail</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={[styles.cancelText]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cancelText: {
    fontWeight: '800',
    fontSize: 16,
  },
  cancelButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
    borderColor: lightgray,
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 10,
  },
  iconText: {
    width: 65,
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 5,
  },
  iconWrapper: {
    marginRight: 40,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    flexWrap: 'wrap',
  },
  iconBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: lightgray,
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  messageText: {
    marginLeft: 20,
    fontSize: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {
    fontWeight: '800',
    fontSize: 16,
    marginVertical: 5,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    width: '100%',
  },
  bar: {
    borderBottomColor: '#eee',
    borderBottomWidth: 5,
    borderRadius: 2.5,
    backgroundColor: 'red',

    width: '10%',
    marginVertical: 5,
  },
})
