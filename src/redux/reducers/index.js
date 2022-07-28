import { combineReducers } from 'redux';
import cardReducer from './cardReducer';

let reducers = combineReducers({
  cartReducer: cardReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;