import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './redux/configStore';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import './index.scss';

ReactDOM.render(

  <Provider store={store}>

    <App />

  </Provider>
  ,
  document.getElementById('root')
);




