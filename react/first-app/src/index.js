import React from 'react';
import ReactDOM from 'react-dom';
import mojestyly from './index.module.css';
import reportWebVitals from './reportWebVitals';

var name = "Jana";
var dog = "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg";

const myPage = (
  <>
  <h1 className={mojestyly.fialova} >Moje první aplikace v Reactu</h1>
  <span>Mé jméno: {name}</span><br></br>
  <img src={dog} alt="dog" height="50%" width="50%"></img>
</>
);

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi",
  size: {
    width: "20%",
    height: "20%"
  }
}; 

const animalPict = (
<>
<img src={pics.panda} alt="" width={pics.size.width} height={pics.size.height}></img>
<img src={pics.owl} alt="" width={pics.size.width} height={pics.size.height}></img>
<img src={pics.owlCat} alt="" width={pics.size.width} height={pics.size.height}></img>
</>
);


ReactDOM.render(
  // myPage,
  animalPict,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
