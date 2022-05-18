import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import styled from 'styled-components/native'
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import All from '../Components/Notifications/All'
import Mentions from '../Components/Notifications/Mentions'
import Floating from '../Components/Trends/floating'
import SettingsIcon from '../Assets/Icons/settings.svg'
import Header from '../Components/Header'

type TopTabParam = {
  All: undefined
  Mentions: undefined
}

const Tab = createMaterialTopTabNavigator<TopTabParam>()

function MyTabs() {
  return (
    <View style={styles.view}>
      <Header title="notifications" placeholder="Search for a Space" text>
        <SettingsIcon width={24} height={24} fill={'#000'} />
      </Header>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarIndicatorStyle: {
            width: 80,
            height: 3,
            marginLeft: Dimensions.get('window').width / 4 - 40,
            borderRadius: 3,
            backgroundColor: '#1C9BEF',
          },
          tabBarInactiveTintColor: '#526371',
        }}>
        <Tab.Screen
          name="All"
          options={{
            tabBarLabel: ({focused, color}) => {
              return focused ? <Text style={[styles.label, {color: color}]}>All</Text> : <Text style={[styles.label, {color: color}]}>All</Text>
            },
          }}
          component={All}
        />
        <Tab.Screen
          name="Mentions"
          options={{
            tabBarLabel: ({focused, color}) => {
              return focused ? <Text style={[styles.label, {color: color}]}>Mentions</Text> : <Text style={[styles.label, {color: color}]}>Mentions</Text>
            },
          }}
          component={Mentions}
        />
      </Tab.Navigator>
      <Floating />
    </View>
  )
}
export default MyTabs

const styles = StyleSheet.create({
  label: {
    fontWeight: '600',
  },
  view: {
    flex: 1,
  },
})
