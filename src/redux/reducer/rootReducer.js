import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import voteReducer from './voteReducer'

export default combineReducers({
  loginState: loginReducer,
  voteState: voteReducer
});