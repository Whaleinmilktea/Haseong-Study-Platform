import { configureStore } from '@reduxjs/toolkit'
import contentReducer from './reducer/contentController'

export default configureStore({
  reducer: {
    contents: contentReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})