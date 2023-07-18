import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/Components/Asstets/Css/Navbar/Navbar.css'
import App from './App';
import './Components/Asstets/Css/Global/Global.css'
import './Components/Asstets/Css/Hero/Hero.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
