import React from 'react'
import {useSelector} from '../Redux/hooks'
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native'
import CalendarIcon from '../Assets/Icons/calendar.svg'
import {lightblue, white, mediumgray} from '../theme'

export default function ProfileHeader() {
  const {id, profileUri, followers, following} = useSelector(state => state.user.user)

  return (
    <View style={[styles.container]}>
      <View style={[styles.profileImgContainer]}>
        <TouchableOpacity>
          <Image style={[styles.image]} source={{uri: profileUri}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.textSetup]}>Set up profile</Text>
        </TouchableOpacity>
      </View>
      <View style={[]}>
        <Text style={[styles.name]}>kauthenticity</Text>
        <Text style={[styles.id]}>@{id}</Text>
      </View>
      <View style={[styles.rowContainer, styles.calendarContainer]}>
        <CalendarIcon width={16} height={16} fill={'#536470'} />
        <Text style={{color: '#536470', marginLeft: 5, fontSize: 13, fontWeight: '500'}}>Joined May 2022</Text>
      </View>

      <View style={[styles.rowContainer]}>
        <Text style={[styles.small, styles.followNum]}>{following}</Text>
        <Text style={[styles.small, styles.followText]}>Following</Text>
        <Text style={[styles.small, styles.followNum]}>{followers}</Text>
        <Text style={[styles.small, styles.followText]}>Followers</Text>
      </View>
      <View style={[styles.rowContainer]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  small: {fontSize: 13},
  followNum: {
    fontWeight: '800',
    marginRight: 5,
  },
  followText: {
    color: '#536470',
    marginRight: 10,
    fontWeight: '500',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarContainer: {
    marginVertical: 10,
  },
  id: {
    color: '#536470',
    marginVertical: 5,
  },
  name: {
    fontWeight: '800',
    fontSize: 20,
    marginTop: 10,
  },
  textSetup: {
    fontWeight: '700',
    fontSize: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: mediumgray,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: white,
    borderWidth: 4,
  },
  profileImgContainer: {
    marginTop: -30,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  innerContainer: {
    paddingHorizontal: 15,
  },
  lineargradient: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  container: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 50,
  },
})
