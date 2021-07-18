let todoList = document.getElementsByTagName('li');

//přidání koše a check buttonu k li items
for(let i = 0; i < todoList.length; i++){

    let spanCheck = document.createElement('span');
    let imgCheck = document.createElement('img');
    imgCheck.className = 'check';
    imgCheck.src = 'icons/check-mark.svg';
    spanCheck.appendChild(imgCheck);
    todoList[i].appendChild(imgCheck);

    let spanTrash = document.createElement('span');
    let imgTrash = document.createElement('img');
    imgTrash.className = 'delete';
    imgTrash.src = 'icons/trash.svg';
    spanTrash.appendChild(imgTrash);
    todoList[i].appendChild(imgTrash);
}


//odebrání li item při kliku na koš 
let deleteItem = document.getElementsByClassName('delete');   
for(let y = 0; y < deleteItem.length; y++) {
    deleteItem[y].addEventListener('click', function() {
        let div = this.parentElement;
        div.style.display = 'none';
    })
}

//označení checked po kliknutí na check
let checkItem = document.getElementsByClassName('check');
for(let z = 0; z < checkItem.length; z++) {
    checkItem[z].addEventListener('click', function() {
        checkItem[z].setAttribute('src', 'icons/check-mark_yellow.svg');
    })
}

//přidání li item do seznamu UL při kliknutí na button ADD
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.querySelector('#input').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.querySelector('#myUL').appendChild(li);
    };

    //vyčistím input
    document.querySelector('#input').value = '';

    let spanCheck = document.createElement('span');
    let imgCheck = document.createElement('img');
    imgCheck.className = 'check';
    imgCheck.src = 'icons/check-mark.svg';
    spanCheck.appendChild(imgCheck);
    li.appendChild(imgCheck);
   
    let spanTrash = document.createElement('span');
    let imgTrash = document.createElement('img');
    imgTrash.className = 'delete';
    imgTrash.src = 'icons/trash.svg';
    spanTrash.appendChild(imgTrash);
    li.appendChild(imgTrash);

    for(let y = 0; y < deleteItem.length; y++) {
        deleteItem[y].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
        }
    }

    for(let z = 0; z < checkItem.length; z++) {
    checkItem[z].addEventListener('click', function() {
        checkItem[z].setAttribute('src', 'icons/check-mark_yellow.svg');
    }) 
}
}