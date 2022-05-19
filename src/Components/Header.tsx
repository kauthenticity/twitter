import React, {useCallback} from 'react'
import {View, Text, Platform, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation, DrawerActions} from '@react-navigation/native'
import {useSelector} from '../Redux/hooks'

type HomeHeaderProps = {
  title: string
  children?: React.ReactNode
  placeholder?: string
  text?: boolean
}

const Header = ({title, placeholder, children, text}: HomeHeaderProps) => {
  const navigation = useNavigation()
  const {profileUri} = useSelector(state => state.user.user)

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer())
  }, [])

  return (
    <View style={[styles.viewStyle]}>
      <TouchableOpacity onPress={openDrawer}>
        <Image style={[styles.image]} source={{uri: profileUri}} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        {text ? <Text style={styles.title}>{title}</Text> : <TextInput style={styles.textInput} placeholder={placeholder} />}
      </View>
      <TouchableOpacity>{children}</TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 15,
  },
  textInput: {
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    width: 'auto',
    height: 30,
    paddingHorizontal: 15,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
})
