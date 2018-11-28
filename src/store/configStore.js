import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const defaultInitialState = {};

const configureStore = (initState = defaultInitialState) => {
  const rootReducer = combineReducers({
    sys: (state = { init: Date.UTC() }) => state,
  });
  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(thunkMiddleware)
  );
  return store;
};

export default configureStore;
