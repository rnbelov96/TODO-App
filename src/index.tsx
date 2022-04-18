import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style/bootstrap-reboot.min.css';
import './style/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './redux/reducers/root-reducer';

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
