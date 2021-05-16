import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';

import allReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
    allReducer
);

// on cart change the sessionStorage is updated
store.subscribe(()=>{
  sessionStorage.setItem('localCart', JSON.stringify(store.getState().cart))
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

