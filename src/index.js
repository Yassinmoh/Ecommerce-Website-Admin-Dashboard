import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom';

window.store=store;

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


