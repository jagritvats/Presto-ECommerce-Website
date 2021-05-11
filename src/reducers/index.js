import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import prodReducer from './prodReducer';
import authReducer from './authReducer';
import orderReducer from './orderReducer';

const allReducers = combineReducers({cart:cartReducer,auth:authReducer, products:prodReducer, orders:orderReducer});

export default allReducers;