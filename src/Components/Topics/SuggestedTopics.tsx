import React, {useState} from 'react'
import {View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Touchable} from 'react-native'
import PlusIcon from '../../Assets/Icons/plus (1).svg'
import RemoveIcon from '../../Assets/Icons/remove.svg'
import {darkgray, lightblue, lightgray, mediumgray} from '../../theme'

type SuggestedTopicsProps = {
  suggestedTopics: string[]
}

type ChipProps = {
  name: string
}

const ICON_SIZE = 16

const Chip = ({name}: ChipProps) => {
  return (
    <View style={styles.chipContaier}>
      <Text style={[styles.topicName, styles.margin]}>{name}</Text>
      <TouchableOpacity style={[styles.margin]}>
        <PlusIcon width={ICON_SIZE} height={ICON_SIZE} fill={lightblue}></PlusIcon>
      </TouchableOpacity>
      <Text style={[styles.mediumgray]}> | </Text>
      <TouchableOpacity style={[styles.margin]}>
        <RemoveIcon width={ICON_SIZE} height={ICON_SIZE} fill={mediumgray}></RemoveIcon>
      </TouchableOpacity>
    </View>
  )
}

const SuggestedTopicsComponent = ({suggestedTopics}: SuggestedTopicsProps) => {
  const [rows, setRows] = useState(suggestedTopics.length / 10 + 1)
  const [cols, setCols] = useState(suggestedTopics.length < 10 ? suggestedTopics.length : 10)
  return (
    <ScrollView contentContainerStyle={[styles.container]} horizontal>
      <FlatList
        numColumns={Math.ceil(suggestedTopics.length / rows)}
        data={suggestedTopics}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <Chip name={item}></Chip>
        }}></FlatList>
    </ScrollView>
  )
}

export default SuggestedTopicsComponent

const styles = StyleSheet.create({
  margin: {
    marginHorizontal: 10,
  },
  mediumgray: {color: mediumgray},
  topicName: {
    fontWeight: '700',
  },
  chipContaier: {
    padding: 8,
    borderRadius: 24,
    borderColor: lightgray,
    borderWidth: 1,
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  container: {
    marginVertical: 25,
  },
})
