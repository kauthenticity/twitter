import React, {useCallback} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, Alert} from 'react-native'
import styled from 'styled-components/native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Header from '../Components/Index/Header'

import GoogleIcon from '../Assets/Icons/google.svg'
import AppleIcon from '../Assets/Icons/apple.svg'
const twitterBlue = '#1C9BEF'
const overlay = '#e4ecf2'
const SIZE = 20
const Index = () => {
  const navigation = useNavigation()
  const navigateLogin = useCallback(() => navigation.navigate('LoginId'), [])
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TextContainer>
        <Text style={styles.paragraph}>See What's happening</Text>
        <Text style={styles.paragraph}> in the world right</Text>
        <Text style={styles.paragraph}>now.</Text>
      </TextContainer>
      <ButtonsContainer>
        <TouchableOpacity>
          <View style={styles.button}>
            <GoogleIcon width={SIZE} height={SIZE} style={{marginRight: 15}} />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.button}>
            <AppleIcon width={24} height={24} style={{marginRight: 15}} fill="#000" />
            <Text style={styles.buttonText}>Continue with Apple</Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.or, styles.gray]}>Or</Text>
        <TouchableOpacity>
          <View style={[styles.button, styles.buttonBlack]}>
            <Text style={[styles.buttonText, styles.fontWhite]}>Create account</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.paragrahContainer, {marginVertical: 20}]}>
          <Text style={[styles.gray, styles.small]}>By signing up, you agree to our</Text>
          <TouchableHighlight activeOpacity={0.6} underlayColor={overlay} onPress={() => Alert.alert('wow')}>
            <Text style={[styles.blue]}>Terms</Text>
          </TouchableHighlight>
          <Text style={[styles.gray, styles.small]}>,</Text>
          <TouchableHighlight activeOpacity={0.6} underlayColor={overlay} onPress={() => Alert.alert('wow')}>
            <Text style={[styles.blue]}>Private Policys</Text>
          </TouchableHighlight>
          <Text style={[styles.gray, styles.small]}>, and</Text>
          <TouchableHighlight activeOpacity={0.6} underlayColor={overlay} onPress={() => Alert.alert('wow')}>
            <Text style={[styles.blue]}>Cookie use</Text>
          </TouchableHighlight>
          <Text style={[styles.gray, styles.small]}>.</Text>
        </View>
        <View style={[styles.paragrahContainer, {marginVertical: 25}]}>
          <Text style={[styles.gray]}>Have an account already?</Text>
          <TouchableHighlight activeOpacity={0.6} underlayColor={overlay} onPress={navigateLogin}>
            <Text style={[styles.blue]}>Log in</Text>
          </TouchableHighlight>
        </View>
      </ButtonsContainer>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },

  paragraph: {
    fontWeight: '800',
    fontSize: 28,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 28,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 16,
  },
  fontWhite: {
    color: '#fff',
  },
  buttonBlack: {
    backgroundColor: '#000',
  },
  or: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 5,
  },
  blue: {
    color: twitterBlue,
    marginLeft: 3,
  },
  gray: {
    color: '#526371',
  },
  small: {
    fontSize: 13,
  },
  paragrahContainer: {flexDirection: 'row', width: '100%', flexWrap: 'wrap'},
})

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`
const TextContainer = styled.View``

const ButtonsContainer = styled.View`
  flex-direction: column;
  width: 100%;
`
