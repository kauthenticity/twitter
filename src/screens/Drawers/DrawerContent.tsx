import React, {useCallback} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import styled from 'styled-components/native'
import * as D from '../../data'
import DrawerListItem from '../../Components/Drawer/DrawerListItem'
import UserAddIcon from '../../Assets/Icons/addAccount.svg'
import BulbIcon from '../../Assets/Icons/bulb.svg'
import QrIcon from '../../Assets/Icons/qrcode.svg'
import UserIcon from '../../Assets/Icons/user.svg'

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props

  const onPressProfileImg = useCallback(() => Alert.alert('profile img clicked'), [])
  const onPressSwitchUser = useCallback(() => Alert.alert('switch user clicked'), [])
  const onPressBulb = useCallback(() => Alert.alert('bulb pressed'), [])
  const onPressQr = useCallback(() => Alert.alert('qr pressed'), [])

  const navigateProfile = useCallback(() => navigation.navigate('Profile'), [])

  return (
    <>
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1, marginVertical: 25, marginHorizontal: 10}}>
        <Header>
          <HeaderTop>
            <TouchableOpacity onPress={onPressProfileImg}>
              <ProfileImg source={{uri: D.randomImage()}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressSwitchUser}>
              <UserAddIcon width={30} height={30} fill="#000" />
            </TouchableOpacity>
          </HeaderTop>
          <HeaderName>
            <Text style={[styles.name]}>강진실</Text>
            <Text style={[styles.gray, styles.small]}>@kauthenticity</Text>
          </HeaderName>
          <HeaderFollow>
            <FollowContainer>
              <Text style={styles.number}>1</Text>
              <Text style={[styles.gray, styles.follow]}>Following</Text>
            </FollowContainer>
            <FollowContainer>
              <Text style={styles.number}>0</Text>
              <Text style={[styles.gray, styles.follow]}>Followers</Text>
            </FollowContainer>
          </HeaderFollow>
        </Header>

        <TouchableOpacity onPress={navigateProfile}>
          <DrawerListItem label="Profile">
            <UserIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
      </DrawerContentScrollView>
      <Bottom>
        <TouchableOpacity onPress={onPressBulb}>
          <BulbIcon width={22} height={22} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressQr}>
          <QrIcon width={20} height={20} fill="#000" />
        </TouchableOpacity>
      </Bottom>
    </>
  )
}
export default DrawerContent

const styles = StyleSheet.create({
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  gray: {
    color: '#526371',
  },
  small: {
    fontSize: 13,
  },
  number: {
    fontWeight: '600',
    marginRight: 5,
  },
  follow: {
    marginRight: 10,
    fontSize: 13,
  },
})

const Bottom = styled.View`
  flex-direction: row;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 9.5%;
  border-top-color: #f1f1f1;
  border-top-width: 1px;
  padding-vertical: 10px;
  padding-horizontal: 25px;
  justify-content: space-between;
`

const ProfileImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

const Header = styled.View``

const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5;
`
const HeaderName = styled.View`
  margin-vertical: 5px;
`
const HeaderFollow = styled.View`
  flex-direction: row;
`
const FollowContainer = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
`
