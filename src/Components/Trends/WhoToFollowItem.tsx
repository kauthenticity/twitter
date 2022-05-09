import React from 'react'
import styled from 'styled-components/native'
import {View, Text} from 'react-native'
import type {IFollowRecommend} from '../../data/IFollowRecommend'
import BadgeIcon from '../../Assets/Icons/badge.svg'
import {Badge} from 'react-native-paper'
type WhatsHappeningProps = {
  followRecommend: IFollowRecommend
}

const WhatsHappening = ({followRecommend}: WhatsHappeningProps) => {
  return (
    <Container>
      <ImgContainer>
        <Img source={{uri: followRecommend.profileUri}} />
      </ImgContainer>

      <ContentContainer>
        <Top>
          <View>
            <NameContainer>
              <Name>{followRecommend.name}</Name>
              {followRecommend.badge && <BadgeIcon width={14} height={14} fill="#1C9BEF" />}
            </NameContainer>
            <Id>@{followRecommend.id}</Id>
          </View>
          <FollowButton>
            <Text style={{color: '#fff'}}>follow</Text>
          </FollowButton>
        </Top>
        <Bottom>
          <Bio>{followRecommend?.bio}</Bio>
        </Bottom>
      </ContentContainer>
    </Container>
  )
}

export default WhatsHappening

const Bio = styled.Text``

const FollowButton = styled.TouchableOpacity`
  background-color: #000;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 24px;
`

const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const Id = styled.Text`
  color: #6f7d89;
  margin-top: 2px;
  margin-bottom: 2px;
`

const Name = styled.Text`
  font-weight: 700;
  margin-right: 2px;
`

const ContentContainer = styled.View`
  flex: 1;
  padding-left: 10px;
`
const Bottom = styled.View``

const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const ImgContainer = styled.View``

const Img = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: auto;
`

const Container = styled.View`
  flex-direction: row;
  /*justify-content: space-between;*/
  width: 100%;
  margin-bottom: 20px;
`
