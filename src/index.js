import './style/bootstrap-reboot.min.css'
import './style/main.sass'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";

const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log(store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));