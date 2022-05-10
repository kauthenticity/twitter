import React from 'react'
import {StyleSheet} from 'react-native'
import {FAB} from 'react-native-paper'
import {SvgProps} from 'react-native-svg'

type floatingProps = {
  Icon: React.FC<SvgProps>
  onPress: () => void
}

const Floating = ({Icon, onPress}: floatingProps) => {
  return <FAB style={styles.fab} icon={({size, color}) => <Icon fill={color} width={size} height={size} />} onPress={onPress} />
}

export default Floating

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#1C9BEF',
    color: 'white',
  },
})
