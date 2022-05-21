import React, {useState} from 'react'
import {useEffect} from 'react'
import {View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Touchable} from 'react-native'
import PlusIcon from '../../Assets/Icons/plus (1).svg'
import RemoveIcon from '../../Assets/Icons/remove.svg'
import {darkgray, lightblue, lightgray, mediumgray} from '../../theme'

type topicProps = {
  popularNearMeTopics: string[]
  addTopic: (name: string) => void
}

type ChipProps = {
  name: string
  addTopic: (name: string) => void
}

const ICON_SIZE = 16

const Chip = ({name, addTopic}: ChipProps) => {
  return (
    <View style={styles.chipContaier}>
      <Text style={[styles.topicName, styles.margin]}>{name}</Text>
      <TouchableOpacity
        style={[styles.margin]}
        onPress={() => {
          addTopic(name)
        }}>
        <PlusIcon width={ICON_SIZE} height={ICON_SIZE} fill={lightblue}></PlusIcon>
      </TouchableOpacity>
      <Text style={[styles.mediumgray]}> | </Text>
    </View>
  )
}

export const PopularNearMe = ({popularNearMeTopics, addTopic}: topicProps) => {
  const [rows, setRows] = useState(popularNearMeTopics.length / 10 + 1)

  return (
    <ScrollView contentContainerStyle={[styles.container]} horizontal>
      {popularNearMeTopics.map(topic => (
        <Chip key={topic} name={topic} addTopic={addTopic}></Chip>
      ))}
    </ScrollView>
  )
}

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
    marginVertical: 15,
  },
})
