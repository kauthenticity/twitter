import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeNavigator from './Stacks/HomeNavigator'
import TrendNavigator from './Stacks/TrendNavigator'
import SpaceNavigator from './Stacks/SpaceNavigator'
import NotificationNavigator from './Stacks/NotificationNavigator'
import MessageNavigator from './Stacks/MessageNavigator'

import HomeIconOutline from '../Assets/Icons/home_outline.svg'
import HomeIconFilled from '../Assets/Icons/home_filled.svg'
import TrendIconOutline from '../Assets/Icons/hashtag_outline.svg'
import TrendIconFilled from '../Assets/Icons/hashtag_filled.svg'
import SpaceIconOutline from '../Assets/Icons/mic_outline.svg'
import SpaceIconFilled from '../Assets/Icons/mic_filled.svg'
import NotificationIconOutline from '../Assets/Icons/notification_outline.svg'
import NotificationIconFilled from '../Assets/Icons/notification_filled.svg'
import MessageIconOutline from '../Assets/Icons/message_outline.svg'
import MessageIconFilled from '../Assets/Icons/message_filled.svg'

import Drawer from './Drawer'

type BottomTabParam = {
  HomeNavigator: undefined
  TrendNavigator: undefined
  SpaceNavigator: undefined
  NotificationNavigator: undefined
  MessageNavigator: undefined
  Drawer: undefined
}

const Tab = createBottomTabNavigator<BottomTabParam>()

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeNavigator"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <HomeIconFilled fill={color} width={size} height={size} /> : <HomeIconOutline fill={color} width={size} height={size} />,
        }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="TrendNavigator"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <TrendIconFilled fill={color} width={size} height={size} /> : <TrendIconOutline fill={color} width={size} height={size} />,
        }}
        component={TrendNavigator}
      />
      <Tab.Screen
        name="SpaceNavigator"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <SpaceIconFilled fill={color} width={size} height={size} /> : <SpaceIconOutline fill={color} width={size} height={size} />,
        }}
        component={SpaceNavigator}
      />
      <Tab.Screen
        name="NotificationNavigator"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <NotificationIconFilled fill={color} width={size} height={size} /> : <NotificationIconOutline fill={color} width={size} height={size} />,
        }}
        component={NotificationNavigator}
      />
      <Tab.Screen
        name="MessageNavigator"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <MessageIconFilled fill={color} width={size} height={size} /> : <MessageIconOutline fill={color} width={size} height={size} />,
        }}
        component={MessageNavigator}
      />
    </Tab.Navigator>
  )
}
