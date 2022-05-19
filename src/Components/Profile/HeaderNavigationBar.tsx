import React, {useCallback} from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {lightblue} from '../../theme'
import LeftArrowIcon from '../../Assets/Icons/leftarrow.svg'
import SearchIcon from '../../Assets/Icons/search.svg'

const HeaderNavigationBar = () => {
  const navigation = useNavigation()
  const onPressGoBack = useCallback(() => navigation.goBack(), [])
  return (
    <View style={[styles.container]}>
      {navigation.canGoBack() && (
        <TouchableOpacity style={styles.iconBackground} onPress={onPressGoBack}>
          <LeftArrowIcon width={18} height={18} fill={'#fff'} />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.iconBackground}>
        <SearchIcon width={18} height={18} fill={'#fff'} />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderNavigationBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: lightblue,
  },
  iconBackground: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(21, 23, 26, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
