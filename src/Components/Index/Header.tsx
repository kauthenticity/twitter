import React, {useCallback} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import TwitterIcon from '../../Assets/Icons/bird.svg'

const twitterBlue = '#1C9BEF'

type HeaderProps = {
  cancel?: boolean
}

const Header = ({cancel}: HeaderProps) => {
  const navigation = useNavigation()
  const goBack = useCallback(() => navigation.goBack(), [])

  return (
    <View style={[styles.iconContainer]}>
      {cancel && (
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      )}
      <View style={[styles.view]}>
        <TwitterIcon width={28} height={28} fill={twitterBlue} />
      </View>

      {cancel && <Text style={[styles.cancel, styles.ghost]}>Cancel</Text>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  iconContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  cancel: {
    fontSize: 16,
  },
  ghost: {
    color: 'transparent',
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
})
