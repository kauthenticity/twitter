import React, {useState, useEffect} from 'react'
import {Modal, View, StyleSheet} from 'react-native'

const PopupDialog = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => {
      clearTimeout(id)
    }
  }, [])

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible)
        }}></Modal>
    </View>
  )
}

export default PopupDialog

const styles = StyleSheet.create({})
