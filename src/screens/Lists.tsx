import React, {useState, useRef} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Image, StyleSheet, Dimensions} from 'react-native'
import StackHeader from '../Components/StackHeader'
import MoreIcon from '../Assets/Icons/more.svg'
import {white, darkgray, mediumgray, lightgray, black, lightblue} from '../theme'
import {pinnedLists, newLists, myLists} from '../data/Lists'
import type {ListItemType} from '../data/Lists'
import {Shadow} from 'react-native-shadow-2'

const ICON_SIZE = 24
type listType = {
  title: string
  data: ListItemType[]
}
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

const SectionItem = ({list}: {list: listType}) => {
  const width = Dimensions.get('window').width
  const lists = list.data.slice(0, 3)
  if (list.data.length == 0) {
    if ((list.title = 'Pinned Lists')) {
      return (
        <View>
          <Text style={[styles.title, styles.padding]}>{list.title}</Text>
          <View style={styles.emptyView}>
            <Text style={[styles.emptyText, styles.padding]}>{emptyPinnedLists}</Text>
          </View>
          <View style={{width: width, borderBottomColor: lightgray, borderBottomWidth: 1 / 3}}></View>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={[styles.title, styles.padding]}>{list.title}</Text>
          <View style={styles.emptyView}>
            <Text style={[styles.emptyText, styles.padding]}>{emptyMyLists}</Text>
          </View>
          <View style={{width: width, borderBottomColor: lightgray, borderBottomWidth: 1 / 3}}></View>
        </View>
      )
    }
  } else {
    return (
      <View>
        <Text style={[styles.title, styles.padding]}>{list.title}</Text>
        {lists.map(item => (
          <ListItem key={item.listName} item={item}></ListItem>
        ))}
        {list.data.length >= 3 && (
          <TouchableOpacity>
            <Text style={[styles.padding, styles.showMore]}>Show More</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

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

const SeeMore = ({show, setShow}: {show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const {width, height} = Dimensions.get('window')
  return (
    <View style={{width: width, height: height, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 0}}>
      <Shadow
        containerViewStyle={{position: 'absolute', right: 5, top: 45, backgroundColor: '#fff', zIndex: 1}}
        startColor={'rgba(67, 67, 67, 0.1)'}
        distance={70}>
        <TouchableOpacity style={{paddingHorizontal: 15, paddingVertical: 10, width: 250, borderRadius: 12}}>
          <View style={{backgroundColor: '#fcfcfc'}}>
            <Text style={{fontSize: 16, textAlign: 'left'}}>Lists you're on</Text>
          </View>
        </TouchableOpacity>
      </Shadow>
      <TouchableOpacity
        onPress={() => setShow(show => !show)}
        style={{width: width, height: height, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
      />
    </View>
  )
}

const emptyPinnedLists = 'Nothing to see here yet —— pin your favorite Lists to access them quickly.'
const emptyMyLists = "You haven't created or followed any Lists. When you do, they'll show up here."

const Lists = () => {
  const [show, setShow] = useState<boolean>(false)
  console.log(show)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StackHeader title="Lists">
          <TouchableOpacity onPress={() => setShow(show => !show)}>
            <MoreIcon width={ICON_SIZE} height={ICON_SIZE} fill="#000" />
          </TouchableOpacity>
          {show && <SeeMore show={show} setShow={setShow} />}
        </StackHeader>

        {lists.map(list => (
          <SectionItem list={list}></SectionItem>
        ))}
      </View>
    </SafeAreaView>
  )
}
export default Lists

const styles = StyleSheet.create({
  showMore: {
    color: lightblue,
    marginVertical: 10,
  },
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
    paddingTop: 10,
    paddingBottom: 20,
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
