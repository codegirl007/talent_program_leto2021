const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');

const toggleHiddenElement = (domElement) => {
    if(domElement.style.display === 'none') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(imgElement);
})



















// let Menu = {
//     starters: 'Shrimps',
//     pasta: 'spaghetti',
//     dessert: 'cheesecake'
// }

// let starters = 'Shrimps';
// let pasta = 'spaghetti';
// let dessert = 'cheesecake';

// export default Menu;

// import Menu from './menu.js';

// export { starters as smallBeginning, dessert as sthSweet};

// import { smallBeginning, sthSweet} from './menu';

// import * as Carte from './menu.js';
//     Carte.smallBeginning;
//     Carte.sthSweet;

// export { starters as smallBeginning, dessert as sthSweet};
// export default pasta;

// export let Menu = {
//                     starters: 'Shrimps',
//                     pasta: 'spaghetti',
//                     dessert: 'cheesecake'
//                     };
// export default isVegetarian; //isVegetarian je funkce, kterou jsme si dříve deklarovali

// import { starters } from './menu.js';
// import isVegetarian from './menu.js';