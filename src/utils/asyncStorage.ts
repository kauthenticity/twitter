import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeTopics = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('topics', jsonValue)
  } catch (e) {
    // save error
  }
  console.log('Done.')
}

export const getTopics = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('topics')
    return jsonValue != null ? JSON.parse(jsonValue) : {follow: []}
  } catch (e) {
    // read error
  }
  console.log('Done.')
}

export const storeBookmarks = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('bookmarks', jsonValue)
  } catch (e) {
    // save error
  }
  console.log('Done.')
}

export const getBookmarks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('bookmarks')
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : []
  } catch (e) {
    // read error
  }
  console.log('Done.')
}
