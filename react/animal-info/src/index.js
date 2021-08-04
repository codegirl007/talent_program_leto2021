import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {animals} from './animal';

const title = '';

const showBackground = true;

const background = (
  <img
    className='background'
    alt='ocean'
    src="https://p1.pxfuel.com/preview/1012/673/251/ice-wall-sea-floor-antarctica-cold.jpg" />
);

const images = [];

for (var animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact} />
  )
}

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {showBackground && background}
    <div className='animals'>{images}</div>
    <p id="fact"></p>
  </div>
);

function displayFact(event) {
  const { facts } = animals[event.target.alt];
  const funFact = facts[Math.floor(facts.length * Math.random())]
  document.getElementById('fact').innerHTML= funFact;
  
}


ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
