import { configureStore, combineReducers } from '@reduxjs/toolkit'

import detailsReducer from './slices/detailsSlice'
import scrollReducer from './slices/scrollSlice'

const rootReducer = combineReducers({
    details: detailsReducer,
    scroll: scrollReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store