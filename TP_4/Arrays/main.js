/* Variables */

var div1 = document.querySelector('.one');
var div2 = document.querySelector('.two');
var div3 = document.querySelector('.three');
var div4 = document.querySelector('.four');

const barvy = ['Mám', 'ráda', 'programování'];

const myArray = [16, 19, 20];
const yourArray = [19, 81, 2];

let bobsFollowers = ['Mary', 'John', 'Kate', 'Andy', 'Ola'];
let tnasFollowers = ['Sandy', 'Kate', 'John'];

/* Controller */

div1.innerHTML = createStr(barvy);

div2.innerHTML = firstSame(myArray,yourArray);

div3.innerHTML = same(bobsFollowers,tnasFollowers);

div4.innerHTML = removeElement([2,5,9,6], 5);

randomEl(bobsFollowers);

/* Functions */

function createStr(arr) {
    return arr.join(' ');
}

function firstSame(arr1, arr2) {
    for (item1 of arr1) {
        for (item2 of arr2) {
            if (item1 == item2) {
                return item2;
            }
        }
    }
}

function same(arr1, arr2) {
    let result = [];
    for (item1 of arr1) {
        for (item2 of arr2) {
            if (item1 == item2) {
                result.push(item2);
            }
        }
    }
    return result
}

function removeElement(array, element) {
    array.splice(array.indexOf(element), 1);
    return array;    
}

function randomEl(arr) {
    var l = arr.length;
    var i = Math.round(Math.random() * l);
    console.log(arr[i]);
}