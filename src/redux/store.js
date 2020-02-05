import { createStore } from "redux";
import rootReducer from './reducer/rootReducer'

export function configureStore(initialState) {
    const store = createStore(
      rootReducer,
      initialState,
    );
    return store;
  }