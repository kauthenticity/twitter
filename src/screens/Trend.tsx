import React from 'react'
import {StyleSheet, View, Text, ImageBackground, ScrollView} from 'react-native'
import styled from 'styled-components/native'
import TrendsForYou from '../Components/Trends/TrendsForYou'
import WhatsHappening from '../Components/Trends/WhatsHappening'
import WhoToFollow from '../Components/Trends/WhoToFollow'
import Floating from '../Components/Trends/floating'
import Header from '../Components/Header'
import SettingsIcon from '../Assets/Icons/settings.svg'

export default function Happening() {
  return (
    <View style={[styles.container]}>
      <Header title="Trend" placeholder="Search Twitter">
        <SettingsIcon width={24} height={24} fill={'#000'} />
      </Header>
      <ScrollView>
        <ImageBackground source={require('../Assets/Images/trend.jpeg')} resizeMode="cover" style={styles.bgImg}>
          <View style={[styles.topTextContainer]}>
            <TopNormalContainer>
              <TopNormal>War in Ukraine</TopNormal>
              <Dot>·</Dot>
              <Live>LIVE</Live>
            </TopNormalContainer>
            <TopBold>Evacuation efforts continue in Mariupol as Ukraine accuses Russia of violating ceasefire</TopBold>
          </View>
        </ImageBackground>
        <TrendsForYou />
        <WhatsHappening />
        <WhoToFollow />
      </ScrollView>
      <Floating />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  bgImg: {
    width: '100%',
    height: 200,
  },
  topTextContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  topFontColor: {
    color: '#000',
  },
})

const Dot = styled.Text`
  color: #fff;
  margin-left: 5px;
  margin-right: 5px;
`

const TopNormalContainer = styled.View`
  flex-direction: row;
`

const Live = styled.Text`
  color: #fff;
`
const TopNormal = styled.Text`
  color: #fff;
  font-weight: 700;
`

const TopBold = styled.Text`
  color: #fff;
  font-size: 23;
  font-weight: 800;
`
