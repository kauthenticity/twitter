import React, {useMemo} from 'react'
import styled from 'styled-components/native'
import {TouchableOpacity, View, Image, Text, StyleSheet, useWindowDimensions} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import moment from 'moment-with-locales-es6'
import HomeIcon from './HomeIcon'
import * as D from '../../data'
import ViewMore from '../../Assets/Icons/view_more.svg'

type TweetProps = {
  person: D.IPerson
}

moment.locale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'seconds',
    ss: '%ss',
    m: 'a minute',
    mm: '%dm',
    h: 'an hour',
    hh: '%dh',
    d: 'a day',
    dd: '%dd',
    M: 'a month',
    MM: '%dM',
    y: 'a year',
    yy: '%dY',
  },
})

const Tweet = ({person}: TweetProps) => {
  const {width} = useWindowDimensions()
  const ImgWidth = useMemo(() => {
    return (3 * width) / 4
  }, [width])

  return (
    <Container>
      <LeftContainer>
        <ProfileImg source={require('../../Assets/Images/default_profile_400x400.png')} />
      </LeftContainer>
      <RightContainer>
        <InfoContainer>
          <View style={{flexDirection: 'row'}}>
            <Name>{person.name}</Name>
            <Id>@{person.id}</Id>
            <Text>·</Text>
            <Created>{moment(person.createdDate).startOf('day').fromNow(true)}</Created>
          </View>
          <TouchableOpacity>
            <ViewMore fill="#acacac" width={18} height={18} />
          </TouchableOpacity>
        </InfoContainer>

        <ContentContainer>
          <Description numberOfLines={3} ellipsizeMode="tail">
            {person.comments}
          </Description>
          <AutoHeightImage style={[styles.imgStyle]} width={ImgWidth} source={{uri: person.image}} />
        </ContentContainer>
        <HomeIcon counts={person.counts} />
      </RightContainer>
    </Container>
  )
}

export default Tweet

const styles = StyleSheet.create({
  imgStyle: {
    borderRadius: 8,
    marginVertical: 10,
  },
})

const Description = styled.Text``

const ContentContainer = styled.View``

const Created = styled.Text`
  color: #6d6d6d;
  margin-left: 2px;
`
const Id = styled.Text`
  margin-left: 5px;
  margin-right: 5px;
  color: #6d6d6d;
`
const Name = styled.Text`
  font-weight: 600;
`

const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const RightContainer = styled.View`
  width: 85%;
  padding-left: 10px;
`

const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  margin: 15px 0px;
`

const LeftContainer = styled.View`
  width: 15%;
`

const ProfileImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
