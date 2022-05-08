import React from 'react'
import styled from 'styled-components/native'
import type {IHappening} from '../../data/IHappening'
import ViewMore from '../Icons/ViewMore'
type WhatsHappeningProps = {
  happening: IHappening
}

const WhatsHappening = ({happening}: WhatsHappeningProps) => {
  return (
    <Container>
      <ContentContainer>
        <Header>
          <Category>{happening.category}</Category>
          <Dot>·</Dot>
          <Live>LIVE</Live>
        </Header>
        <Description>{happening.description}</Description>
      </ContentContainer>
      <ImgContainer>
        <Img source={{uri: happening.uri}} />
      </ImgContainer>
    </Container>
  )
}

export default WhatsHappening
const Description = styled.Text`
  font-weight: 700;
  padding-right: 15px;
`

const Header = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
`

const Dot = styled.Text`
  color: #6f7d89;
  margin-left: 3px;
  margin-right: 3px;
`

const Live = styled.Text`
  color: #6f7d89;
`

const Category = styled.Text`
  color: #6f7d89;
  font-weight: 700;
  font-size: 13px;
`

const Img = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
`

const ImgContainer = styled.View`
  width: 25%;
`
const ContentContainer = styled.View`
  width: 75%;
`

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`
