import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {getHeaderTitle} from '@react-navigation/elements'

import Home from './Stacks/Home'
import Trend from './Trend'
import Space from './Space'
import Notification from './Notification'
import Message from './Message'
import Header from '../Components/Header'

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
import SettingsIcon from '../Assets/Icons/settings.svg'
import TimelineIcon from '../Assets/Icons/timeline.svg'

type BottomTabParam = {
  Home: undefined
  Trend: undefined
  Space: undefined
  Notifications: undefined
  Message: undefined
}

const Tab = createBottomTabNavigator<BottomTabParam>()

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <HomeIconFilled fill={color} width={size} height={size} /> : <HomeIconOutline fill={color} width={size} height={size} />,

          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name)
            return (
              <Header title={title} placeholder="Search Twitter">
                <TimelineIcon width={24} height={24} fill={'#000'} />
              </Header>
            )
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Trend"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <TrendIconFilled fill={color} width={size} height={size} /> : <TrendIconOutline fill={color} width={size} height={size} />,
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name)
            return (
              <Header title={title} placeholder="Search Twitter">
                <SettingsIcon width={24} height={24} fill={'#000'} />
              </Header>
            )
          },
        }}
        component={Trend}
      />
      <Tab.Screen
        name="Space"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <SpaceIconFilled fill={color} width={size} height={size} /> : <SpaceIconOutline fill={color} width={size} height={size} />,
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name)
            return <Header title={title} placeholder="Search for a Space"></Header>
          },
        }}
        component={Space}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <NotificationIconFilled fill={color} width={size} height={size} /> : <NotificationIconOutline fill={color} width={size} height={size} />,
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name)
            return (
              <Header title={title} placeholder="Search for a Space" text>
                <SettingsIcon width={24} height={24} fill={'#000'} />
              </Header>
            )
          },
        }}
        component={Notification}
      />
      <Tab.Screen
        name="Message"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? <MessageIconFilled fill={color} width={size} height={size} /> : <MessageIconOutline fill={color} width={size} height={size} />,
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name)
            return (
              <Header title={title} placeholder="Search Direct Messages">
                <SettingsIcon width={24} height={24} fill={'#000'} />
              </Header>
            )
          },
        }}
        component={Message}
      />
    </Tab.Navigator>
  )
}
