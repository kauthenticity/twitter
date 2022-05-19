import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, Image, SectionList, StyleSheet, Dimensions} from 'react-native'
import StackHeader from '../Components/StackHeader'
import MoreIcon from '../Assets/Icons/more.svg'
import {white, darkgray, mediumgray, lightgray, black} from '../theme'
import {pinnedLists, newLists, myLists} from '../data/Lists'
import type {ListItemType} from '../data/Lists'
import {Background} from '@react-navigation/elements'

const ICON_SIZE = 24
const lists = [
  {
    title: 'Pinned Lists',
    data: pinnedLists,
  },
  {
    title: 'Discover new Lists',
    data: newLists,
  },
  {
    title: 'Your Lists',
    data: myLists,
  },
]

const ListItem = ({item}: {item: ListItemType}) => {
  const followed = item.followed
  const borderColor = followed ? mediumgray : 'black'
  const color = followed ? 'black' : 'white'
  const backgroundColor = followed ? 'white' : 'black'
  const text = followed ? 'Following' : 'Follow'
  return (
    <View style={[styles.padding, styles.listItemContainer]}>
      <Image style={[styles.listImage]} source={{uri: item.listImageUri}}></Image>
      <View style={styles.infoContainer}>
        <Text style={[styles.name]}>{item.listName}</Text>
        <Text style={[styles.description]}>{item.listDescription}</Text>
        <View style={[styles.userInfoContainer]}>
          <Image source={{uri: item.profileImgUri}} style={[styles.listOwnerImage]}></Image>
          <Text style={[styles.name, {fontSize: 13}]}>{item.listOwnerName}</Text>
          <Text style={[styles.id]}>@{item.listOwnerId}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={[styles.follow, {backgroundColor: backgroundColor, borderColor: borderColor}]}>
          <Text style={[{fontWeight: '600', textAlign: 'center', color: color}]}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const emptyPinnedLists = 'Nothing to see here yet —— pin your favorite Lists to access them quickly.'
const emptyMyLists = "You haven't created or followed any Lists. When you do, they'll show up here."

const Lists = () => {
  const width = Dimensions.get('window').width
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StackHeader title="Lists">
          <TouchableOpacity>
            <MoreIcon width={ICON_SIZE} height={ICON_SIZE} fill="#000" />
          </TouchableOpacity>
        </StackHeader>
        <SectionList
          sections={lists}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item}) => <ListItem item={item} />}
          renderSectionHeader={({section}) => {
            return <Text style={[styles.title, styles.padding]}>{section.title}</Text>
          }}
          renderSectionFooter={({section}) =>
            section.data.length != 0 ? (
              <View style={{width: width, borderBottomColor: lightgray, borderBottomWidth: 1 / 3}}></View>
            ) : section.title == 'Pinned Lists' ? (
              <View>
                <View style={styles.emptyView}>
                  <Text style={[styles.emptyText, styles.padding]}>{emptyPinnedLists}</Text>
                </View>
                <View style={{width: width, borderBottomColor: lightgray, borderBottomWidth: 1 / 3}}></View>
              </View>
            ) : (
              <View>
                <View style={styles.emptyView}>
                  <Text style={[styles.emptyText, styles.padding]}>{emptyMyLists}</Text>
                </View>
                <View style={{width: width, borderBottomColor: lightgray, borderBottomWidth: 1 / 3}}></View>
              </View>
            )
          }
        />
      </View>
    </SafeAreaView>
  )
}
export default Lists

const styles = StyleSheet.create({
  follow: {
    borderWidth: 1,
    width: 100,
    paddingVertical: 6,
    borderRadius: 16,
  },
  id: {
    color: darkgray,
    fontSize: 13,
    marginLeft: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
  },
  description: {
    color: darkgray,
    paddingVertical: 2,
  },
  name: {
    fontWeight: '700',
  },
  listOwnerImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 2,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  listImage: {
    width: 46,
    height: 46,
    borderRadius: 12,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  padding: {paddingHorizontal: 15},
  container: {
    flex: 1,
    backgroundColor: white,
  },
  title: {
    fontWeight: '800',
    fontSize: 18,
    paddingVertical: 20,
  },
  emptyView: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  emptyText: {
    color: darkgray,
  },
})
