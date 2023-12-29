import { authSlice } from '@/features/auth';
import { chatSlice } from '@/features/chats';
import { profileSlice } from '@/features/users';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  auth: authSlice.reducer,
  profile: profileSlice.reducer,
  chat: chatSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  // timeout: 10000000,
};

const persitedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persitedReducers,
});
