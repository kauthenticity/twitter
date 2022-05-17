import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
interface UserInfo {
  id: string
  password: string
}

export type UserState = {
  loggedIn: boolean
  user: UserInfo
}
// Define the initial state using that type
const initialState: UserState = {
  loggedIn: false,
  user: {id: '', password: ''},
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
