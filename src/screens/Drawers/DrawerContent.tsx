import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import styled from 'styled-components/native'
import * as D from '../../data'

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.container]}>
      <Header>
        <HeaderTop>
          <TouchableOpacity>
            <ProfileImg source={{uri: D.randomImage()}} />
          </TouchableOpacity>
        </HeaderTop>
        <HeaderName></HeaderName>
        <HeaderFollow>
          <FollowContainer>
            <FollowNum>1</FollowNum>
            <Follow>Following</Follow>
          </FollowContainer>
          <FollowContainer>
            <FollowNum>0</FollowNum>
            <Follow>Followers</Follow>
          </FollowContainer>
        </HeaderFollow>
      </Header>
    </DrawerContentScrollView>
  )
}
export default DrawerContent

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
})

const ProfileImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

const Header = styled.View``

const HeaderTop = styled.View`
  flex-direction: row;
`
const HeaderName = styled.View``
const HeaderFollow = styled.View`
  flex-direction: row;
`
const FollowContainer = styled.View`
  flex-direction: row;
`
const Follow = styled.Text``
const FollowNum = styled.Text``
