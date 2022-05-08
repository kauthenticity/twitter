import React from 'react'
import styled from 'styled-components/native'
import {StyleSheet, SectionList} from 'react-native'
import TrendsForYouItem from './TrendsForYouItem'
import trends from '../../data/trends'

const TrendsForYou = () => {
  return (
    <Container>
      <SectionList
        sections={trends}
        keyExtractor={(item, index) => item.keyword + index}
        renderItem={({item}) => {
          return <TrendsForYouItem trend={item} />
        }}
        renderSectionHeader={({section: {title}}) => <TitleText>{title}</TitleText>}
        scrollEnabled={false}
      />
    </Container>
  )
}

export default TrendsForYou

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
