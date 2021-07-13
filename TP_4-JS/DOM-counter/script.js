import "./styles.css";

const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');


let counterVal = 0;

increaseButton.onclick = function clickPlus(){
  clickCounter(++counterVal);
}
decreaseButton.onclick = function clickMinus(){
  clickCounter(--counterVal);
}

function clickCounter(val){
  document.querySelector('#counter').innerHTML = val;
}
