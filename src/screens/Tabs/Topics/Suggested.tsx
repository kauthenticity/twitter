import React, {useState, useCallback, useMemo, useEffect} from 'react'
import {View, TouchableOpacity, Text, ScrollView, RefreshControl, StyleSheet, Dimensions, Touchable} from 'react-native'
import {lightgray, darkgray, lightblue} from '../../../theme'
import {PopularNearMe} from '../../../Components/Topics'

type CategoryComponentProps = {
  categories: string[]
  categoryNum: number
}

const CategorySuggestions = () => {}

const CategoryComponent = ({categories, categoryNum}: CategoryComponentProps) => {
  const showed = categories.slice(0, categoryNum)
  return (
    <View style={[styles.categoryWrapper]}>
      {showed.map(item => (
        <TouchableOpacity>
          <View style={[styles.categoryContainer]}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const {width} = Dimensions.get('window')

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
  const [popularNearMeTopics, setPopularNearMeTopics] = useState<string[]>(['War in Ukraine', 'World news'])
  const onPressShowMore = useCallback(() => {
    setCategoryNum(categoryNum => (categoryNum + 6 > categories.length ? categories.length : categoryNum + 6))
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setCategoryNum(6)
    setRefreshing(false)
  }, [])

  const addPopularNearMe = useCallback(() => {}, [])

  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={[styles.SectionContainer]}>
        <Text style={[styles.title]}>Categories</Text>
        <CategoryComponent categories={categories} categoryNum={categoryNum} />
        {categoryNum != categories.length && (
          <TouchableOpacity style={[styles.showMoreButton]} onPress={onPressShowMore}>
            <Text style={[styles.bold]}>Show More</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.SectionContainer]}>
        <Text style={[styles.title]}>Popular near you</Text>
        <PopularNearMe popularNearMeTopics={popularNearMeTopics} addTopic={addPopularNearMe}></PopularNearMe>
      </View>
    </ScrollView>
  )
}
export default Suggested

const styles = StyleSheet.create({
  categoryText: {
    fontWeight: '700',
    fontSize: 15,
    color: '#fff',
  },
  categoryWrapper: {justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', marginVertical: 15},
  categoryContainer: {
    width: width / 2 - 20,
    height: 80,
    backgroundColor: lightblue,
    marginBottom: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
