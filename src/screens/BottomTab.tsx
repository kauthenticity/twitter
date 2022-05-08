import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Trend from './Trend';
import Space from './Space';
import Notification from './Notification';
import Message from './Notification';

import HomeIconOutline from '../Assets/Icons/home_outline.svg';
import HomeIconFilled from '../Assets/Icons/home_filled.svg';

import TrendIconOutline from '../Assets/Icons/hashtag_outline.svg';
import TrendIconFilled from '../Assets/Icons/hashtag_filled.svg';

import SpaceIconOutline from '../Assets/Icons/mic_outline.svg';
import SpaceIconFilled from '../Assets/Icons/mic_filled.svg';

import NotificationIconOutline from '../Assets/Icons/notification_outline.svg';
import NotificationIconFilled from '../Assets/Icons/notification_filled.svg';

import MessageIconOutline from '../Assets/Icons/message_outline.svg';
import MessageIconFilled from '../Assets/Icons/message_filled.svg';

type BottomTabParam = {
  Home: undefined;
  Happening: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParam>();

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
            focused ? (
              <HomeIconFilled fill={color} width={size} height={size} />
            ) : (
              <HomeIconOutline fill={color} width={size} height={size} />
            ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Trend"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <TrendIconFilled fill={color} width={size} height={size} />
            ) : (
              <TrendIconOutline fill={color} width={size} height={size} />
            ),
        }}
        component={Trend}
      />
      <Tab.Screen
        name="Space"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <SpaceIconFilled fill={color} width={size} height={size} />
            ) : (
              <SpaceIconOutline fill={color} width={size} height={size} />
            ),
        }}
        component={Space}
      />
      <Tab.Screen
        name="Notification"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <NotificationIconFilled fill={color} width={size} height={size} />
            ) : (
              <NotificationIconOutline
                fill={color}
                width={size}
                height={size}
              />
            ),
        }}
        component={Notification}
      />
      <Tab.Screen
        name="Message"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <MessageIconFilled fill={color} width={size} height={size} />
            ) : (
              <MessageIconOutline fill={color} width={size} height={size} />
            ),
        }}
        component={Message}
      />
    </Tab.Navigator>
  );
}
