import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, SafeAreaView} from 'react-native'
import {red100} from 'react-native-paper/lib/typescript/styles/colors'
import StackHeader from '../Components/StackHeader'
import {white, darkgray, lightblue} from '../theme'

const ICON_SIZE = 24
const overlay = '#e4ecf2'

const Moments = () => (
  <SafeAreaView style={{backgroundColor: white, flex: 1}}>
    <StackHeader title="Moments">
      <View style={[styles.ghost]}></View>
    </StackHeader>
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Waiting on a Moment</Text>

      <View style={[styles.paragraphContainer]}>
        <Text style={[styles.description]}>
          Moments are curated stories about what's happening—powered by Tweets. It's easy to create your own story with Twitter Moments on twitter.com.
          <Text> </Text>
          <Text onPress={() => {}} style={{color: lightblue}}>
            Learn More
          </Text>
        </Text>
      </View>
    </View>
  </SafeAreaView>
)

export default Moments

const styles = StyleSheet.create({
  paragraphContainer: {
    width: '100%',
  },
  description: {
    color: darkgray,
    fontSize: 15,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,

    width: '100%',
    marginTop: 50,
  },
  ghost: {width: ICON_SIZE, height: ICON_SIZE},
})
