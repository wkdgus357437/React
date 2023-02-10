import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//-------------------------------------------------------
import rootReducer from './store';
//import {createStore} from 'redux'; //deprecated(작동은 된다)
import {legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
//-------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root')); // root는 이미 있으니 그대로 쓰자.
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> {/* <App> 아래의 후손까지 store 써도 된다. */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
