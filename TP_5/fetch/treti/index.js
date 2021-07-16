const input = document.querySelector('#input');
const button = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
const resultList =  document.querySelector('#result-list');
const url = 'https://api.datamuse.com/words?';
const param = 'rel_rhy=';


async function getWords(){
    const value = input.value;
    const response = await fetch(url + param + value);
    const data = await response.json();
    renderResponse(data.slice(0,10)); 
 }


function renderResponse(res){
    if(!res){
        console.log(res.status);
    }
    else if(!res.length){
        responseField.innerHTML = "nic jsem nenašel";
        console.log(res);
    }
    else{ 
        res.forEach(el => {
            const li = document.createElement('li');
            li.innerText = el.word;
            resultList.appendChild(li);
        });
    }  
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    if(resultList.innerHTML){
        resultList.innerHTML = '';
    }
    getWords();
});

