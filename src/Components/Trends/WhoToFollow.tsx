import React from 'react'
import styled from 'styled-components/native'
import {StyleSheet, SectionList} from 'react-native'
import WhoToFollowItem from './WhoToFollowItem'
import followRecommends from '../../data/FollowRecommend'

const WhoToFollow = () => {
  return (
    <Container>
      <SectionList
        sections={followRecommends}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => {
          return <WhoToFollowItem followRecommend={item} />
        }}
        renderSectionHeader={({section: {title}}) => <TitleText>{title}</TitleText>}
        scrollEnabled={false}
      />
    </Container>
  )
}

export default WhoToFollow

const Container = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  background-color: #fff;
`

const TitleText = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 18px;
`

//#6F7D89
