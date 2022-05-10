import React, {useMemo} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'

const All = () => {
  const title = useMemo(() => 'Find more accounts to follow', [])
  const description = useMemo(
    () => "Retweets, recommendations, and more will pop up here as you follow more accounts. Get started by finding some you're interested in.",
    [],
  )
  return (
    <View style={[styles.container]}>
      <ScrollView>
        <Text style={[styles.textTitle]}>{title}</Text>
        <Text style={[styles.textDescription]}>{description}</Text>
        <TouchableOpacity style={[styles.button]}>
          <Text style={[styles.textButton]}>Find accounts</Text>
        </TouchableOpacity>
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
  textTitle: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 15,
  },
  textDescription: {
    fontSize: 15,
    color: '#415260',
  },
  button: {
    backgroundColor: '#000',
    width: '45%',
    paddingVertical: 12,
    borderRadius: 24,
    marginVertical: 30,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
})
