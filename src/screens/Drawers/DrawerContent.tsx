import React, {useCallback, useMemo} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Alert, AppState} from 'react-native'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import styled from 'styled-components/native'
import * as D from '../../data'
import {useSelector} from '../../Redux/hooks'
import DrawerListItem from '../../Components/Drawer/DrawerListItem'
import UserAddIcon from '../../Assets/Icons/addAccount.svg'
import BulbIcon from '../../Assets/Icons/bulb.svg'
import QrIcon from '../../Assets/Icons/qrcode.svg'
import UserIcon from '../../Assets/Icons/user.svg'
import ListIcon from '../../Assets/Icons/lists.svg'
import TopicIcon from '../../Assets/Icons/topics.svg'
import BookmarkIcon from '../../Assets/Icons/bookmarks.svg'
import MomentIcon from '../../Assets/Icons/moments.svg'
import CartIcon from '../../Assets/Icons/cart.svg'
import MoneyIcon from '../../Assets/Icons/money.svg'
import ProfessionalIcon from '../../Assets/Icons/professionals.svg'

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props

  const onPressSwitchUser = useCallback(() => Alert.alert('switch user clicked'), [])
  const onPressBulb = useCallback(() => Alert.alert('bulb pressed'), [])
  const onPressQr = useCallback(() => Alert.alert('qr pressed'), [])

  const navigateProfile = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Profile'}), [])
  const navigateLists = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Lists'}), [])
  const navigateTopics = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Topics'}), [])
  const navigateBookmarks = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Bookmarks'}), [])
  const navigateMoments = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Moments'}), [])
  const navigatePurchases = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Purchases'}), [])
  const navigateMonetizations = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Monetizations'}), [])
  const navigateProfessionals = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Professionals'}), [])
  const navigateSettings = useCallback(() => navigation.navigate('MessageNavigator', {type: 'Settings'}), [])

  const {id, followers, following, profileUri} = useSelector(state => state.user.user)

  return (
    <>
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1, marginHorizontal: 25, marginVertical: 10}}>
        <Header>
          <HeaderTop>
            <TouchableOpacity onPress={navigateProfile}>
              <ProfileImg source={{uri: profileUri}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressSwitchUser}>
              <UserAddIcon width={30} height={30} fill="#000" />
            </TouchableOpacity>
          </HeaderTop>
          <HeaderName>
            <Text style={[styles.name, {fontWeight: '800'}]}>강진실</Text>
            <Text style={[styles.gray, styles.small]}>@{id}</Text>
          </HeaderName>
          <HeaderFollow>
            <FollowContainer>
              <Text style={styles.number}>{following}</Text>
              <Text style={[styles.gray, styles.follow]}>Following</Text>
            </FollowContainer>
            <FollowContainer>
              <Text style={styles.number}>{followers}</Text>
              <Text style={[styles.gray, styles.follow]}>Followers</Text>
            </FollowContainer>
          </HeaderFollow>
        </Header>

        <TouchableOpacity onPress={navigateProfile}>
          <DrawerListItem label="Profile">
            <UserIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateLists}>
          <DrawerListItem label="Lists">
            <ListIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateTopics}>
          <DrawerListItem label="Topics">
            <TopicIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateBookmarks}>
          <DrawerListItem label="Bookmarks">
            <BookmarkIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateMoments}>
          <DrawerListItem label="Moments">
            <MomentIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigatePurchases}>
          <DrawerListItem label="Purchases">
            <CartIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateMonetizations} style={[styles.endList]}>
          <DrawerListItem label="Monetizations">
            <MoneyIcon width={22} height={22} fill="#000" />
          </DrawerListItem>
        </TouchableOpacity>
        <View style={[styles.professionalBorder]}>
          <TouchableOpacity onPress={navigateProfessionals}>
            <DrawerListItem label="Twitter for Professionals">
              <ProfessionalIcon width={22} height={22} fill="#000" />
            </DrawerListItem>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={navigateSettings}>
          <Text style={[styles.settings]}>Settings and Privacy</Text>
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
  endList: {
    marginBottom: 10,
  },
  professionalBorder: {
    marginTop: 10,
    borderTopColor: '#f1f1f1',
    borderTopWidth: 1,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  settings: {
    fontSize: 17,
    paddingVertical: 30,
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
  background-color: #fff;
`

const ProfileImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

const Header = styled.View`
  margin-bottom: 10px;
`

const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
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
