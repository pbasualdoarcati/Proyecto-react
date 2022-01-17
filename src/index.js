import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';
import './index.scss';
import './Components/Section1/Section1.scss';
import './Components/Section2/section2.scss';
import './Components/Section3/section3.scss';
import './Components/Section5/section5.scss';
import './Components/Section4/section4.scss';
import 'bootstrap/dist/js/bootstrap.bundle';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
