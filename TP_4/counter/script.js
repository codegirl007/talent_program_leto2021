const counter = document.querySelector('.counter');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');

let count = 0;
counter.innerText = count;

increaseBtn.addEventListener('click', function(){
    count++;
    counter.innerText = count;
});

decreaseBtn.addEventListener('click', function(){
    count--;
    counter.innerText = count;
});

