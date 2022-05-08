import React from 'react'
import styled from 'styled-components/native'
import {SectionList} from 'react-native'
import WhatsHappeningItem from './WhatsHappeningItem'
import happenings from '../../data/happenings'

const WhatsHappening = () => {
  return (
    <Container>
      <SectionList
        sections={happenings}
        keyExtractor={(item, index) => item.category + index}
        renderItem={({item}) => {
          return <WhatsHappeningItem happening={item} />
        }}
        renderSectionHeader={({section: {title}}) => <TitleText>{title}</TitleText>}
      />
    </Container>
  )
}

export default WhatsHappening

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
