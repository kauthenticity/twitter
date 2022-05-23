import React, {useState, useCallback} from 'react'
import {useEffect} from 'react'
import {View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Touchable} from 'react-native'
import PlusIcon from '../../Assets/Icons/plus (1).svg'
import RemoveIcon from '../../Assets/Icons/remove.svg'
import {darkgray, lightblue, lightgray, mediumgray, white} from '../../theme'
import CheckIcon from '../../Assets/Icons/check.svg'

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
  const [added, setAdded] = useState<boolean>(false)
  const onPressAdd = useCallback(() => {
    setAdded(added => !added)
    addTopic(name)
  }, [])
  const [color, setColor] = useState<string>('#000')
  const [backgroundColor, setBackgroundColor] = useState<string>('#fff')
  const [borderColor, setBorderColor] = useState<string>(lightgray)

  useEffect(() => {
    setColor(added ? '#fff' : '#000')
    setBackgroundColor(added ? lightblue : '#fff')
    setBorderColor(added ? lightblue : lightgray)
  }, [added])
  return (
    <View style={[styles.chipContaier, {borderColor: borderColor, backgroundColor: backgroundColor}]}>
      <Text style={[styles.topicName, styles.margin, {color: color}]}>{name}</Text>
      {added ? (
        <CheckIcon width={ICON_SIZE} height={ICON_SIZE} fill={white}></CheckIcon>
      ) : (
        <TouchableOpacity style={[styles.margin]} onPress={onPressAdd}>
          <PlusIcon width={ICON_SIZE} height={ICON_SIZE} fill={lightblue}></PlusIcon>
        </TouchableOpacity>
      )}
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
