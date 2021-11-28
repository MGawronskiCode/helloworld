import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Greetings from './Greetings/Greetings';
// import App_function from './App_function';
// import App from './App';
// import Counter from './Counter/Counter';

import LoginForm from './LoginForm/LoginForm';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App_function name="Bartosz" /> */}
    {/* <App name="AdvFeb" /> */}
    {/* <Counter /> */}
    <LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
