import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { animals } from './animal';

const title = '';

const showBackground = true;

const background = (
  <img 
  className = 'background'
  alt = 'ocean'
  src = "https://p1.pxfuel.com/preview/1012/673/251/ice-wall-sea-floor-antarctica-cold.jpg" 
  />
);

const images = [];
for (let animal in animals) {
    images.push(<img
      key = {animal}
      className = 'animal'
      alt = {animal}
      src = {animals[animal].image}
      ariaLabel = {animal}
      role = 'button'
      onClick = {displayFact}
      />
    )
}

function displayFact(e) {
  const chosenAnimal= e.target.alt;
  const concreteAnimal = animals[chosenAnimal];
  const randomIndex = Math.floor(Math.random() * concreteAnimal.facts.length);
  const funFact = concreteAnimal.facts[randomIndex]
  document.getElementById('fact').innerHTML = funFact;
}

const animalFacts = (
  <div>
  <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
  {showBackground && background}
   <div className = 'animals'>{images}</div>
   <p id = "fact"></p>
  </div>
);

ReactDOM.render(
  animalFacts, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
