import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import prodReducer from './prodReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({cart:cartReducer,auth:authReducer, products:prodReducer});

export default allReducers;