import React, {useState, useCallback, useMemo} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, Keyboard, TouchableWithoutFeedback} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useAutoFocus} from '../Contexts'
import Header from '../Components/Index/Header'
import {login} from '../Redux/User/User'
import {useDispatch} from 'react-redux'

const greyColor = '#526371'
const twitterBlue = '#1C9BEF'

const LoginPw = () => {
  const route = useRoute()
  const dispatch = useDispatch()
  const [pw, setPw] = useState<string>('')
  const navigation = useNavigation()
  const focus = useAutoFocus()

  const {id} = route.params

  const navigateForgot = useCallback(() => navigation.navigate('Forgot'), [])
  const onPressLogin = useCallback(() => {
    if (pw !== '') {
      dispatch(login({id: id, password: pw}))
      navigation.navigate('Main')
    }
  }, [pw])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <AutoFocusProvider contentContainerStyle={{flex: 1, justifyContent: 'center'}}> */}
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header cancel />
        <View style={{width: '100%', flex: 1}}>
          <Text style={[styles.headerText]}>Enter Your password</Text>
          <TextInput style={[styles.input]} value={id} editable={false}></TextInput>
          <TextInput
            style={[styles.input, styles.blue]}
            placeholderTextColor={greyColor}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPw}
            onFocus={focus}
            value={pw}></TextInput>
        </View>
        <View style={[styles.forgotView]}>
          <TouchableOpacity onPress={onPressLogin}>
            <View style={[styles.buttonDefault, {backgroundColor: pw === '' ? '#87898b' : '#000'}]}>
              <Text style={[{fontWeight: '800', color: pw === '' ? '#c3c4c5' : '#fff'}]}>Log in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateForgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      {/* </AutoFocusProvider> */}
    </SafeAreaView>
  )
}

export default LoginPw

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    marginBottom: 30,
  },
  forgotView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  blue: {
    color: twitterBlue,
  },
  buttonDefault: {
    paddingVertical: 16,
    paddingHorizontal: (Dimensions.get('screen').width - 90) / 2,
    borderRadius: 32,
    marginVertical: 20,
  },

  buttonEmpty: {
    backgroundColor: '#87898b',
    color: '#c3c4c5',
  },
  buttonFilled: {},
  forgotText: {
    textDecorationLine: 'underline',
    fontWeight: '800',
    fontSize: 16,
  },
})
