import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { sampleApi } from './services/sample'

export const store = configureStore({
  reducer: {
    [sampleApi.reducerPath]: sampleApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sampleApi.middleware),
})

setupListeners(store.dispatch)