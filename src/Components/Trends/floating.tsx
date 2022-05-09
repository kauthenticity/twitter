import React from 'react'
import {StyleSheet} from 'react-native'
import {FAB} from 'react-native-paper'
import PlusIcon from '../../Assets/Icons/plus-104.svg'

const Floating = () => {
  return <FAB style={styles.fab} icon={({size, color}) => <PlusIcon fill={color} width={size} height={size} />} onPress={() => console.log('Pressed')} />
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
