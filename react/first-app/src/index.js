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
)

ReactDOM.render(
  myPage,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
