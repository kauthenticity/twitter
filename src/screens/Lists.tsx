import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView, SectionList, StyleSheet} from 'react-native'
import StackHeader from '../Components/StackHeader'
import MoreIcon from '../Assets/Icons/more.svg'
import {white, darkgray, mediumgray, lightgray} from '../theme'
import {pinnedLists, newLists, myLists} from '../data/Lists'
import type {ListItemType} from '../data/Lists'

const ICON_SIZE = 24

const Empty = () => {
  return (
    <View>
      <Text>asdfasdfasdfasdf</Text>
    </View>
  )
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

const ListItem = ({item}: {item: ListItemType}) => {
  return (
    <View>
      <Text>{item.listOwnerName}</Text>
    </View>
  )
}

const separator = () => {
  return <View style={{width: '100%', borderBottomColor: lightgray, borderBottomWidth: 1}}></View>
}

const emptyPinnedLists = 'Nothing to see here yet —— pin your favorite Lists to access them quickly.'
const emptyMyLists = "You haven't created or followed any Lists. When you do, they'll show up here."

const Lists = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 15}}>
        <StackHeader title="Lists">
          <TouchableOpacity>
            <MoreIcon width={ICON_SIZE} height={ICON_SIZE} fill="#000" />
          </TouchableOpacity>
        </StackHeader>
        <SectionList
          sections={lists}
          SectionSeparatorComponent={separator}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item}) => <ListItem item={item} />}
          ListEmptyComponent={Empty}
          renderSectionHeader={({section}) => {
            return <Text style={[styles.title]}>{section.title}</Text>
          }}
          renderSectionFooter={({section}) =>
            section.data.length != 0 ? (
              <View></View>
            ) : section.title == 'Pinned Lists' ? (
              <View style={styles.emptyView}>
                <Text style={styles.emptyText}>{emptyPinnedLists}</Text>
              </View>
            ) : (
              <View style={styles.emptyView}>
                <Text style={styles.emptyText}>{emptyMyLists}</Text>
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
  container: {
    flex: 1,
    backgroundColor: white,
  },
  title: {
    fontWeight: '800',
    fontSize: 18,
    paddingVertical: 10,
  },
  emptyView: {
    padding: 20,
  },
  emptyText: {
    color: darkgray,
  },
})
