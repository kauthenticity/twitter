import React, {useRef, useState, useEffect} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View, Animated, Text, Dimensions, StatusBar, Platform} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import {lightblue, white} from '../theme'
import HeaderNavigationBar from '../Components/Profile/HeaderNavigationBar'
import ProfileHeader from '../Components/ProfileHeader'

const Profile = () => {
  const dummyDATA = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
    'item11',
    'item12',
    'item13',
    'item14',
    'item15',
    'item16',
    'item17',
    'item18',
  ]

  let AnimatedHeaderValue = new Animated.Value(0)
  const Header_Max_Height = 242 // mzd height of the header
  const Header_Min_Height = 0 // min height of the header

  // const animatedHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
  //   inputRange: [0, Header_Max_Height],
  //   outputRange: ['blue', 'red'],
  //   extrapolate: 'clamp',
  // })

  const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  })

  const topScrollRef = useRef(null)
  const bottomScrollRef = useRef(null)

  const [pos1, setPos1] = React.useState(0)
  const [pos2, setPos2] = React.useState(0)

  const windowHeight = Dimensions.get('window').height
  const statusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight
  const headerHeight = 242
  const bottomBarHeight = 79

  console.log(windowHeight, statusBarHeight, headerHeight, bottomBarHeight)

  const contentHeight = windowHeight - statusBarHeight - headerHeight - bottomBarHeight

  const [height1, setHeight1] = useState(headerHeight)
  const [height2, setHeight2] = useState(contentHeight)

  // const animatedContentHeight = AnimatedHeaderValue.interpolate({
  //   inputRange: [contentHeight, Header_Max_Height - Header_Min_Height],
  //   outputRange: [Header_Max_Height, Header_Min_Height],
  //   extrapolate: 'clamp',
  // })

  useEffect(() => {
    setPos1(pos2 < 212 ? pos2 : 212)
    setHeight1(headerHeight - pos2)
    setHeight2(contentHeight + pos2)
  }, [pos2])
  // const onlayout = (event: any) => {
  //   const {height} = event.nativeEvent.layout
  //   setHeight1(height)
  // }
  console.log(pos2, pos1)
  console.log(height1, height2)
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigationBar />

      <Animated.ScrollView style={{height: animatedHeaderHeight, zIndex: 2}}>
        <ScrollView contentContainerStyle={{}} showsVerticalScrollIndicator={false} scrollEnabled={false} contentOffset={{x: 0, y: pos1}}>
          <ProfileHeader />
        </ScrollView>
      </Animated.ScrollView>

      <Animated.View style={{height: height2, zIndex: 1}}>
        <ScrollView
          contentOffset={{x: 0, y: height1 < 0 ? pos2 : 0}}
          contentContainerStyle={{backgroundColor: white}}
          scrollEventThrottle={16}
          onScroll={e => {
            setPos2(e.nativeEvent.contentOffset.y)
          }}>
          {dummyDATA.map((item, index) => (
            <Text style={styles.textStyle} key={index}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    padding: 20,
  },
  header: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    height: 60,
  },
})

export default Profile
