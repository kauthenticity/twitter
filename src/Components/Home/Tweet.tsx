import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {TouchableOpacity, View, Image, Text, StyleSheet, useWindowDimensions} from 'react-native'
import moment from 'moment-with-locales-es6'
import HomeIcon from './HomeIcon'
import ViewMore from '../Icons/ViewMore'

import * as D from '../../data'

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
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

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
            <ViewMore />
          </TouchableOpacity>
        </InfoContainer>

        <ContentContainer>
          <Description numberOfLines={3} ellipsizeMode="tail">
            {person.comments}
          </Description>
          <Image style={[styles.imgStyle]} source={{uri: person.image}} />
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
    width: '100%',
    height: 200,
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
  height: auto;
`

const LeftContainer = styled.View`
  width: 15%;
`

const ProfileImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
