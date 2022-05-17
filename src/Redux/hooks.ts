import {TypedUseSelectorHook, useDispatch, useSelector as useSelectorTemp} from 'react-redux'
import type {RootState, AppDispatch} from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorTemp
