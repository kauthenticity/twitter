import React, {useCallback} from 'react'
import {View, Text, TouchableOpacity, Pressable, StyleSheet, Alert} from 'react-native'
import styled from 'styled-components/native'
import {darkgray, white, mediumgray, lightblue, lightgray} from '../../../theme'
import SpeechBubbleIcon from '../../../Assets/Icons/speechBubbleFilled.svg'
import {storeObject, getObject, getString} from '../../../utils/asyncStorage'

const ICON_SIZE = 16

type FollowedTopicItemProps = {
  name: string
  descriptor: string
}

const FollowedTopicItem = ({name, descriptor}: FollowedTopicItemProps) => {
  return (
    <View style={[styles.row, {marginVertical: 15}]}>
      <View style={styles.SpeechBubbleIconContainer}>
        <SpeechBubbleIcon width={ICON_SIZE} height={ICON_SIZE} fill={white}></SpeechBubbleIcon>
      </View>
      <View style={[styles.infoContainer]}>
        <Text style={[styles.bold]}>{name}</Text>
        <Text style={[styles.gray]}>{descriptor}</Text>
      </View>
      <Pressable style={[styles.follow]} onPress={() => Alert.alert('wow')}>
        <Text style={[styles.bold, {textAlign: 'center'}]}>Following</Text>
      </Pressable>
    </View>
  )
}

const Followed = () => {
  storeObject('topics', {followed: 'Art & Culture'})
  const followed = getObject('topics')

  return (
    <View style={styles.container}>
      <View style={[styles.SectionContainer]}>
        <Text style={styles.descriptor}>
          The topics you followed are used to personalized the Tweets, events, and ads that you see, and show up publicly on your profile.
        </Text>
      </View>
      <View style={[styles.SectionContainer]}>
        <FollowedTopicItem name="Arts & Culture" descriptor="All about arts & culture" />
        <FollowedTopicItem name="Fashion & Beauty" descriptor="All about fashion & beauty" />
        <FollowedTopicItem name="Outdoors" descriptor="All about outdoor activities" />
      </View>
    </View>
  )
}
export default Followed

const styles = StyleSheet.create({
  follow: {
    paddingVertical: 6,
    borderColor: mediumgray,
    borderWidth: 1,
    width: 100,
    borderRadius: 16,
  },
  gray: {color: darkgray},
  bold: {fontWeight: '700'},
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  SpeechBubbleIconContainer: {
    width: (ICON_SIZE * 3) / 2,
    height: (ICON_SIZE * 3) / 2,
    borderRadius: (ICON_SIZE * 3) / 4,
    backgroundColor: lightblue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  SectionContainer: {
    padding: 15,
    borderBottomWidth: 1 / 3,
    borderBottomColor: lightgray,
  },
  descriptor: {
    color: darkgray,
    marginBottom: 10,
  },
})
