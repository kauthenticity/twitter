import React, {useState, useCallback} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, Keyboard, TouchableWithoutFeedback} from 'react-native'
import styled from 'styled-components/native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useAutoFocus, AutoFocusProvider} from '../Contexts'
import Header from '../Components/Index/Header'

const greyColor = '#526371'
const twitterBlue = '#1C9BEF'

const Login = () => {
  const [id, setId] = useState<string>('')
  const navigation = useNavigation()
  const focus = useAutoFocus()

  const navigateForgot = useCallback(() => navigation.navigate('Forgot'), [])
  const navigateLoginPw = useCallback(() => {
    if (id !== '') {
      navigation.navigate('LoginPw', {id: id})
    } else return
  }, [id])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <AutoFocusProvider contentContainerStyle={{flex: 1, justifyContent: 'center'}}> */}
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header cancel />
        <View style={{width: '100%', flex: 1}}>
          <Text style={[styles.headerText]}>To get Started, first enter your phone, email, or @username</Text>
          <TextInput
            style={[styles.input, styles.blue]}
            placeholderTextColor={greyColor}
            placeholder="Phone, email, or username"
            onChangeText={setId}
            onFocus={focus}
            value={id}></TextInput>
        </View>
        <View style={[styles.forgotView]}>
          <TouchableOpacity onPress={navigateForgot}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateLoginPw}>
            <View style={[styles.buttonDefault, {backgroundColor: id === '' ? '#87898b' : '#000'}]}>
              <Text style={[{fontWeight: '700', color: id === '' ? '#c3c4c5' : '#fff'}]}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      {/* </AutoFocusProvider> */}
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    flex: 1,
  },
  headerText: {
    fontWeight: '800',
    fontSize: 24,
    marginVertical: 25,
  },
  gray: {
    color: greyColor,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 2,
    padding: 10,
  },
  forgotView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  blue: {
    color: twitterBlue,
  },
  buttonDefault: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },

  buttonEmpty: {
    backgroundColor: '#87898b',
    color: '#c3c4c5',
  },
  buttonFilled: {},
})
