import React from 'react';
import ReactDOM from 'react-dom';
import mojestyly from './index.module.css';
import reportWebVitals from './reportWebVitals';

const name = 'Jana';
const dog = 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg';

const myPage =  
<> 
<h1 className={mojestyly.fialova} >Moje první aplikace v Reactu</h1>
<span>Mé jméno: {name}</span><br/>
<img src={dog} alt="dog" height="50%" width="50%"/>
</>;

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi",
  size: {
    width: "20%",
    height: "20%"
  }
}; 

const animalPict = 
<>
<img src={pics.panda} height="20%" width="20%"/>
<img src={pics.owl} height="20%" width="20%"/>
<img src={pics.owlCat} height="20%" width="20%"/>
</>;

ReactDOM.render(
  animalPict,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
