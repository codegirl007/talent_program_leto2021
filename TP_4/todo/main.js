
//todo

const addButton = document.querySelector('.addBtn');
addButton.addEventListener('click', createToDoList);

const input = document.querySelector('.text')

function createToDoList(event){
    event.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `<p><span>${input.value}</span><i class="far fa-check-circle" onclick="checked(this)"></i><i class="far fa-trash-alt" onclick="deleteLi(this)"></i></p>`;
    const ul = document.querySelector('ul');
    ul.appendChild(li);
}

function checked(el){
   el.style.backgroundColor = '#9776b6';
   const p = el.parentNode;
   p.childNodes[0].style.color = 'grey';
}

function deleteLi(el){
   const li = el.parentNode.parentNode;
   li.parentNode.removeChild(li);
}


//searchbar


const searchInput = document.querySelector('.search');
searchInput.addEventListener('input', search);

const div = document.querySelector('.form');

function search(event){
   const searchValue = event.target.value;
   const spans = document.querySelectorAll('span');
   const arrMatch = [];
   for(let i = 0; i < spans.length; i++){
      if(spans[i].innerText.indexOf(searchValue) > -1 ){
         arrMatch.push(spans[i].innerText);
      }
   }
   if(arrMatch){
      removeUl();
      createFilteredUl(arrMatch);
   }
}

function removeUl(){
   const ul = document.querySelector('ul');
   ul.parentNode.removeChild(ul);
}

function createFilteredUl(arr){
   const newUl = document.createElement('ul');
      for(let i = 0; i < arr.length; i++){
         const li = document.createElement('li');
         li.innerHTML = `<p><span>${arr[i]}</span><i class="far fa-check-circle" onclick="checked(this)"></i><i class="far fa-trash-alt" onclick="deleteLi(this)"></i></p>`;
         newUl.appendChild(li);
         }
   div.appendChild(newUl);
}