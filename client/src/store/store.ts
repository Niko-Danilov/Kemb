'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { persistReducer, persistStore } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducer as marketReducer } from './market/market.slice';
// import storage from 'redux-persist/lib/storage'; // 
import { apis } from '../api/api';
//persist Config
const persistConfig = {
  key: 'root',
  // storage,
}

// combine if reducer`s > 1
const reducers = combineReducers(
  {
    [apis.reducerPath]: apis.reducer,
    market: marketReducer,
  }
)

// persist
// const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apis.middleware),
  // persist
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),


})



//persist export
// export const persistor = persistStore(store)
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>