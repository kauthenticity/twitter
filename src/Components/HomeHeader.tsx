import React from 'react'
import {StyleProp, ViewStyle, View, Text, Platform, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import TimelineIcon from '../Assets/Icons/timeline.svg'

type HomeHeaderProps = {
  title: string
  style?: StyleProp<ViewStyle>
}

const viewStyle: StyleProp<ViewStyle> = {
  backgroundColor: '#fff',
  flexDirection: 'row',
  height: 100,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: Platform.OS == 'ios' ? 50 : 0, // only for IOS to give StatusBar Space
  paddingLeft: 10,
  paddingRight: 10,
}

const HomeHeader = ({title, style}: HomeHeaderProps) => {
  return (
    <View style={viewStyle}>
      <TouchableOpacity>
        <Image style={[styles.image]} source={require('../Assets/Images/default_profile_400x400.png')} />
      </TouchableOpacity>
      <TextInput style={styles.textInput} placeholder="Search Twitter" />
      <TouchableOpacity>
        <TimelineIcon height={24} width={24} fill={'#000'} />
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#f3f3f3',
    width: '75%',
    borderRadius: 16,
    height: '65%',
    paddingHorizontal: 16,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
})
