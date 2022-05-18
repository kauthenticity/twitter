import React, {useCallback, useRef, useState} from 'react'
import {RefreshControl, View, StatusBar, Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import {useNavigation} from '@react-navigation/native'
import {lightblue, blue, mediumgray, lightgray, black, white, darkgray} from '../theme'
import LinearGradient from 'react-native-linear-gradient'
import {useSelector} from '../Redux/hooks'
import LeftArrowIcon from '../Assets/Icons/leftarrow.svg'
import SearchIcon from '../Assets/Icons/search.svg'
import CalendarIcon from '../Assets/Icons/calendar.svg'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Tweets from './Tweets'
import TweetsAndReplies from './TweetsAndReplies'
import Media from './Media'
import Likes from './Likes'

type TabBarParam = {
  Tweets: undefined
  TweetsAndReplies: undefined
  Media: undefined
  Likes: undefined
}
const Tab = createMaterialTopTabNavigator<TabBarParam>()

const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export default function Profile() {
  const [colors, setColors] = useState(['rgba(0, 0, 0, 0.4)', 'transparent'])
  const gradientRef = useRef(null)
  const {id, profileUri, followers, following} = useSelector(state => state.user.user)
  const navigation = useNavigation()

  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setColors(['transparent', 'transparent'])
    wait(1000).then(() => {
      setRefreshing(false)
      setColors(['rgba(0, 0, 0, 0.4)', 'transparent'])
    })
  }, [])
  const onPressGoBack = useCallback(() => navigation.goBack(), [])

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={[styles.container]}>
        <StatusBar barStyle="light-content" translucent={true} />
        <View style={[styles.headerBackground]}>
          <LinearGradient ref={gradientRef} colors={colors} style={styles.lineargradient}>
            {navigation.canGoBack() && (
              <TouchableOpacity style={styles.iconBackground} onPress={onPressGoBack}>
                <LeftArrowIcon style={[styles.icon]} width={18} height={18} fill={white} />
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.iconBackground}>
              <SearchIcon style={[styles.icon]} width={18} height={18} fill={white} />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={[styles.innerContainer]}>
          <View style={[styles.profileImgContainer]}>
            <TouchableOpacity>
              <Image style={[styles.image]} source={{uri: profileUri}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.textSetup]}>Set up profile</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.nameContainer]}>
            <Text style={[styles.name]}>kauthenticity</Text>
            <Text style={[styles.id]}>@{id}</Text>
          </View>
          <View style={[styles.rowContainer, styles.calendarContainer]}>
            <CalendarIcon width={16} height={16} fill={'#536470'} />
            <Text style={{color: '#536470', marginLeft: 5, fontSize: 13, fontWeight: '500'}}>Joined May 2022</Text>
          </View>

          <View style={[styles.rowContainer]}>
            <Text style={[styles.small, styles.followNum]}>{following}</Text>
            <Text style={[styles.small, styles.followText]}>Following</Text>
            <Text style={[styles.small, styles.followNum]}>{followers}</Text>
            <Text style={[styles.small, styles.followText]}>Followers</Text>
          </View>

          <View style={{height: 600, width: '100%'}}>
            <Tab.Navigator
              screenOptions={{
                tabBarIndicatorStyle: {
                  width: 60,
                  height: 3,
                  borderRadius: 3,
                  backgroundColor: '#1C9BEF',
                  marginLeft: 15,
                },
                tabBarInactiveTintColor: '#526371',
                tabBarContentContainerStyle: {
                  justifyContent: 'flex-end',
                },
              }}>
              <Tab.Screen
                name="Tweets"
                options={{
                  tabBarLabel: ({focused, color}) => {
                    return focused ? <Text style={[styles.label, {color: color}]}>Tweets</Text> : <Text style={[styles.label, {color: color}]}>Tweets</Text>
                  },
                }}
                component={Tweets}
              />
              <Tab.Screen
                name="TweetsAndReplies"
                options={{
                  tabBarLabel: ({focused, color}) => {
                    return focused ? <Text style={[styles.label, {color: color}]}>Replies</Text> : <Text style={[styles.label, {color: color}]}>Replies</Text>
                  },
                }}
                component={TweetsAndReplies}
              />
              <Tab.Screen
                name="Media"
                options={{
                  tabBarLabel: ({focused, color}) => {
                    return focused ? <Text style={[styles.label, {color: color}]}>Media</Text> : <Text style={[styles.label, {color: color}]}>Media</Text>
                  },
                }}
                component={Media}
              />
              <Tab.Screen
                name="Likes"
                options={{
                  tabBarLabel: ({focused, color}) => {
                    return focused ? <Text style={[styles.label, {color: color}]}>Likes</Text> : <Text style={[styles.label, {color: color}]}>Likes</Text>
                  },
                }}
                component={Likes}
              />
            </Tab.Navigator>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  small: {fontSize: 13},
  followNum: {
    fontWeight: '800',
    marginRight: 5,
  },
  followText: {
    color: '#536470',
    marginRight: 10,
    fontWeight: '500',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarContainer: {
    marginVertical: 10,
  },
  iconBackground: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(21, 23, 26, 0.65)',

    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  id: {
    color: '#536470',
    marginVertical: 5,
  },
  name: {
    fontWeight: '800',
    fontSize: 20,
    marginTop: 10,
  },
  innerContainer: {
    paddingHorizontal: 15,
  },
  nameContainer: {},
  icon: {},
  textSetup: {
    fontWeight: '700',
    fontSize: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: mediumgray,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
  headerBackground: {
    backgroundColor: lightblue,
    height: '20%',
  },
  profileImgContainer: {
    marginTop: -30,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: white,
    borderWidth: 4,
  },
  lineargradient: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
})
