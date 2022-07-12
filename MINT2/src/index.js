import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import img from './assets/slide-1.jpg';
import img1 from './assets/slide-2.jpg';
import img2 from './assets/slide-3.jpg';
import img3 from './assets/slide-4.jpg';
import img4 from './assets/slide-5.jpg';
import img5 from './assets/slide-6.jpg';
import img6 from './assets/slide-7.jpg';
import img7 from './assets/slide-8.jpg';
console.log(img);
console.log(img1);
console.log(img2);
console.log(img3);
console.log(img4);
console.log(img5);
console.log(img6);
console.log(img7);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
