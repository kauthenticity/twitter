import React, {useCallback, useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, RefreshControl, Pressable, ScrollView, StyleSheet, Alert} from 'react-native'
import styled from 'styled-components/native'
import {darkgray, white, mediumgray, lightblue, lightgray} from '../../../theme'
import SpeechBubbleIcon from '../../../Assets/Icons/speechBubbleFilled.svg'
import {storeObject, getObject, getString} from '../../../utils/asyncStorage'
import SuggestedTopics from '../../../data/SuggestedTopics'
import SuggestedTopicsComponent from '../../../Components/Topics/SuggestedTopics'

const ICON_SIZE = 16

type FollowedTopicItemProps = {
  name: string
  followedTopics: string[]
  setFollowedTopics: React.Dispatch<React.SetStateAction<string[]>>
}

const FollowedTopicItem = ({name, followedTopics, setFollowedTopics}: FollowedTopicItemProps) => {
  const [following, setFollowing] = useState(true)
  const [text, setText] = useState('Following')
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [color, setColor] = useState('#000')

  const onPressFollow = useCallback(() => {
    const filtered = followedTopics.filter(topic => topic != name)
    storeObject('topics', filtered)
    setFollowing(following => !following)
  }, [])

  useEffect(() => {
    setText(following ? 'Following' : 'Follow')
    setBackgroundColor(following ? '#fff' : '#000')
    setColor(following ? '#000' : '#fff')
  }, [following])

  return (
    <View style={[styles.row, {marginVertical: 15}]}>
      <View style={styles.SpeechBubbleIconContainer}>
        <SpeechBubbleIcon width={ICON_SIZE} height={ICON_SIZE} fill={white}></SpeechBubbleIcon>
      </View>
      <View style={[styles.infoContainer]}>
        <Text style={[styles.bold]}>{name}</Text>
        <Text style={[styles.gray]}>All about {name}</Text>
      </View>
      <TouchableOpacity style={[styles.follow, {backgroundColor: backgroundColor}]} onPress={onPressFollow}>
        <Text style={[styles.bold, {textAlign: 'center', color: color}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Followed = () => {
  const [followedTopics, setFollowedTopics] = useState<string[]>([])
  const [suggestedTopics, setSuggestedTopics] = useState<string[]>(SuggestedTopics)
  const [refreshing, setRefreshing] = React.useState(false)

  const addTopic = useCallback(
    (name: string) => {
      console.log(followedTopics, name)
      storeObject('topics', {follow: [...followedTopics, name]}).then(() => {
        setFollowedTopics(followedTopics => [...followedTopics, name])
        setSuggestedTopics(suggestedTopics.filter(topic => topic != name))
      })
    },
    [followedTopics],
  )

  const removeTopic = useCallback(
    (name: string) => {
      setSuggestedTopics(suggestedTopics.filter(topic => topic != name))
    },
    [suggestedTopics],
  )

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getObject('topics').then(res => {
      console.log('after refreshing : ', res)

      setFollowedTopics(res?.follow)
      setRefreshing(false)
    })
  }, [followedTopics])

  useEffect(() => {
    getObject('topics').then(res => {
      console.log('topics from async storage : ', res)
      setFollowedTopics(res?.follow)
    })
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={[styles.SectionContainer]}>
        <Text style={styles.descriptor}>
          The topics you followed are used to personalized the Tweets, events, and ads that you see, and show up publicly on your profile.
        </Text>
      </View>
      {followedTopics.length > 0 && (
        <View style={[styles.SectionContainer]}>
          {followedTopics.map(topic => (
            <FollowedTopicItem key={topic} name={topic} followedTopics={followedTopics} setFollowedTopics={setFollowedTopics}></FollowedTopicItem>
          ))}
        </View>
      )}
      <View style={styles.SectionContainer}>
        <Text style={styles.title}>Suggested Topics</Text>
        <Text style={[styles.gray]}>You'll see top Tweets abou these right in your Home timline.</Text>
        <SuggestedTopicsComponent suggestedTopics={suggestedTopics} addTopic={addTopic} removeTopic={removeTopic}></SuggestedTopicsComponent>
      </View>
    </ScrollView>
  )
}
export default Followed

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 18,
    paddingVertical: 10,
  },
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
    //flex: 1,
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
