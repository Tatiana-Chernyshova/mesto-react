import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

function run() {
fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards`, {
    method: 'POST',
    headers: {
      authorization: '36ca9ef1-bd1d-492c-84aa-4de20805470a',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Жара',
      link: 'https://kubnews.ru/upload/resize_cache/iblock/480/800_533_2/4801e63eca06a48687e0bf26fe7b3f66.png'
    })
  })
}

//  run();


function start(pol) {
  var step;
for (step = 0; step < pol; step++) {
    run();
}
}

// start(3);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
