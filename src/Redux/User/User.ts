import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
interface UserInfo {
  id: string
  password: string
  following: number
  followers: number
  profileUri: string
}

export type UserState = {
  loggedIn: boolean
  user: UserInfo
}
// Define the initial state using that type
const initialState: UserState = {
  loggedIn: false,
  user: {
    id: '',
    password: '',
    following: 45,
    followers: 17,
    profileUri:
      'https://postfiles.pstatic.net/MjAyMjA1MTdfMTQx/MDAxNjUyNzYyNTM4NjAx.r4F8cIpClCyzgIaiwgE7Htn1FclRdvG_ngBV1vXLETsg.tqkW2Hrrp3jbc8vpGwe8PQJxPF-alaaz5WDPZDWI-9Qg.JPEG.js7056/C7DD65AD-F3DA-41FD-918E-027E41517351.jpeg?type=w966',
  },
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{id: string; password: string}>) => {
      const {id, password} = action.payload
      state.loggedIn = true
      state.user.id = id
      state.user.password = password
    },
    // decrement: state => {
    //   state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const {login} = userSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectId = (state: UserState) => state.user.id

export default userSlice.reducer
