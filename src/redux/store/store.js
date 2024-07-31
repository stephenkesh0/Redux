import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/counterSlice'
// When importing counterSlice, the name most change to counterReducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})