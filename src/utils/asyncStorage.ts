import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}

export const storeObject = async (key: string, object: any) => {
  try {
    const jsonValue = JSON.stringify(object)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
  }
}
export const getString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
      // value previously stored
    } else {
      return null
    }
  } catch (e) {
    console.log(e)
    // error reading value
  }
}

export const getObject = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return JSON.stringify(value)
      // value previously stored
    } else {
      return null
    }
  } catch (e) {
    console.log(e)
    // error reading value
  }
}
