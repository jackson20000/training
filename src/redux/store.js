import { createStore } from "redux";
import rootReducer from './reducer/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'rootStorage',
  storage,
}

export function configureStore() {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}