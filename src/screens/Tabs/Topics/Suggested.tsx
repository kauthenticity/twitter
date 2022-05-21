import React, {useState, useCallback, useMemo, useEffect} from 'react'
import {View, Text, ScrollView, RefreshControl, StyleSheet} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {lightgray, darkgray, lightblue} from '../../../theme'

type CategoryComponentProps = {
  categories: string[]
  categoryNum: number
}

const CategoryComponent = ({categories, categoryNum}: CategoryComponentProps) => {
  return <View></View>
}

const Suggested = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [categoryNum, setCategoryNum] = useState<number>(6)
  const categories = useMemo(
    () => [
      'Fashion & beauty',
      'Outdoors',
      'Arts & culture',
      'Animation & comics',
      'Business & finance',
      'Food',
      'Travel',
      'Entertainment',
      'Music',
      'Gaming',
      'Careers',
      'Family & relationships',
      'Fitness',
      'Sports',
      'Technology',
      'Science',
    ],
    [],
  )

  const onPressShowMore = useCallback(() => {
    setCategoryNum(categoryNum => (categoryNum + 6 > categories.length ? categories.length : categoryNum + 6))
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])
  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={[styles.SectionContainer]}>
        <Text style={[styles.title]}>Categories</Text>
      </View>
      <View style={[styles.SectionContainer]}>
        <CategoryComponent categories={categories} categoryNum={categoryNum} />
        <TouchableOpacity style={[styles.showMoreButton]} onPress={onPressShowMore}>
          <Text style={[styles.bold]}>Show More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default Suggested

const styles = StyleSheet.create({
  showMoreButton: {
    width: '100%',
    borderColor: lightgray,
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 18,
    paddingVertical: 10,
  },
  SectionContainer: {
    padding: 15,
    borderBottomWidth: 1 / 3,
    borderBottomColor: lightgray,
  },
  container: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  darkgray: {color: darkgray},
  bold: {fontWeight: '700'},
})
