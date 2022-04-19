import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style/bootstrap-reboot.min.css';
import './style/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/root-reducer';
import App from './components/app/app';

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
