import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/counter/authSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
  },
})