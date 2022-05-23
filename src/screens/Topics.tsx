import React, {useState, useRef} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Image, StyleSheet, Dimensions} from 'react-native'
import StackHeader from '../Components/StackHeader'
import {white, darkgray, mediumgray, lightgray, black, lightblue} from '../theme'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Followed from './Tabs/Topics/Followed'
import Suggested from './Tabs/Topics/Suggested'
import NotInterested from './Tabs/Topics/NotInterested'

const Tab = createMaterialTopTabNavigator()

const ICON_SIZE = 24
const Topics = () => {
  const [show, setShow] = useState<boolean>(false)
  console.log(show)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StackHeader title="Topics">
          <View style={[styles.ghost]}></View>
        </StackHeader>
      </View>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: '#fff'}}
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarIndicatorStyle: {
            width: 80,
            height: 3,
            marginLeft: Dimensions.get('window').width / 6 - 40,
            borderRadius: 3,
            backgroundColor: '#1C9BEF',
          },
          tabBarInactiveTintColor: '#526371',
        }}>
        <Tab.Screen
          name="Followed"
          options={{
            tabBarLabel: ({focused, color}) => {
              return <Text style={[styles.label, {color: color}]}>Followed</Text>
            },
          }}
          component={Followed}
        />
        <Tab.Screen
          name="Suggested"
          options={{
            tabBarLabel: ({focused, color}) => {
              return <Text style={[styles.label, {color: color}]}>Suggested</Text>
            },
          }}
          component={Suggested}
        />
        <Tab.Screen
          name="NotInterested"
          options={{
            tabBarLabel: ({focused, color}) => {
              return <Text style={[styles.label, {color: color}]}>Not Interested</Text>
            },
          }}
          component={NotInterested}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
export default Topics

const styles = StyleSheet.create({
  ghost: {width: ICON_SIZE, height: ICON_SIZE},
  container: {
    flex: 1,
    backgroundColor: white,
  },
  label: {
    fontWeight: '600',
  },
})
