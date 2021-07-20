function searchBar() {
    let inputSearch = document.querySelector('#input-search');
    inputSearch = inputSearch.value.toLowerCase();

    let ul = document.querySelector('#myUL');
    let li = ul.getElementsByTagName('li');

    for(let i = 0; i < li.length; i++) {
        let textInput = li[i].textContent || li[i].innerText;
        if(textInput.toLowerCase().indexOf(inputSearch) > - 1) {
            li[i].style.display='';
        } else {
            li[i].style.display = 'none';
        }
    }
}


//VERZE 2 - pomocí includes()
// function searchBar() {
//     let inputSearch = document.querySelector('#input-search').value;
//     inputSearch = inputSearch.toLowerCase();

//     let li = document.getElementsByTagName('li');

//     for(let i = 0; i < li.length; i++) {
//         if(!li[i].innerHTML.toLowerCase().includes(inputSearch)) {
//             li[i].style.display='none';
//         } else {
//             li[i].style.display = 'list-item';
//         }
//     }
// }

