var newItem = document.querySelector('#in');
var addBtn = document.querySelector('#btn');
var searchItem = document.querySelector('#search');
var searchBtn = document.querySelector('#searchBtn');

function createListItem(text) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(text));
    addIcons(item);
    document.querySelector('#todo').appendChild(item);
}

function createIcon(...iconType) {
    var icon = document.createElement('i');
    icon.setAttribute('aria-hidden', 'true');
    icon.classList.add('fa', 'fa-lg', ...iconType);
    return icon;
}

function addIcons(listEl) {
    var trash = createIcon('fa-trash', 'delete');
    var check = createIcon('fa-check-circle-o', 'check');
    listEl.appendChild(trash);
    listEl.appendChild(check);
}

function deleteItem(listEl) {
    listEl.parentNode.parentNode.removeChild(listEl.parentNode);
}

function checkItem(listEl) {
    listEl.parentNode.style.color = 'grey';
    listEl.style.color = 'rgb(34, 193, 195)';
}

document.querySelector('ul').addEventListener('click', function (event) {
    var item = event.target;
    if (item.classList.contains('delete')) {
        deleteItem(item);
    } else if (item.classList.contains('check')) {
        checkItem(item);
    }
});

addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (newItem.value != '') {
        createListItem(newItem.value);
        newItem.value = '';
    }
    newItem.focus();
})

searchItem.addEventListener('keyup', function (event) {
    event.preventDefault();
    var searchStr = searchItem.value.trim().toLocaleLowerCase();
    console.log(searchStr)
    document.querySelectorAll('li').forEach(item => {
        if (searchStr != '') {
            if (item.textContent.trim().toLocaleLowerCase().indexOf(searchStr) != -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }else{
            item.style.display = 'block';
        }
    })
})