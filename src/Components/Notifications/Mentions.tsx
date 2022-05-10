import React, {useMemo} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'

const All = () => {
  return (
    <View style={[styles.container]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.emptyContainer}>
          <Text style={styles.title}>Nothing to see here - yet.</Text>
          <Text style={styles.content}>When someone mentions you, you'll find it here.</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default All

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 30,
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    marginVertical: 8,
  },
  content: {
    fontSize: 15,
    color: '#415260',
  },
  emptyContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  scroll: {
    height: '80%',
    justifyContent: 'center',
  },
})
