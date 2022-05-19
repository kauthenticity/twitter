import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, ScrollView, SectionList, StyleSheet} from 'react-native'
import StackHeader from '../Components/StackHeader'
import MoreIcon from '../Assets/Icons/more.svg'
import {white} from '../theme'
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
    ListEmptyComponent: Empty(),
  },
  {
    title: 'Discover new Lists',
    data: newLists,
  },
  {
    title: 'Your Lists',
    data: myLists,
    ListEmptyComponent: Empty(),
  },
]

const ListItem = ({item}: {item: ListItemType}) => {
  return (
    <View>
      <Text>{item.listOwnerName}</Text>
    </View>
  )
}

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
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item}) => <ListItem item={item} />}
          ListEmptyComponent={Empty}
          renderSectionHeader={({section}) => {
            return <Text style={[styles.title]}>{section.title}</Text>
          }}
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
  },
})
