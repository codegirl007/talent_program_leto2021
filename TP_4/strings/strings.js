/* Variable definition */

var strA = document.querySelector(".str-a").textContent;
var strB = document.querySelector(".str-b").textContent;
var emptyStrA = document.querySelector(".res-a");
var emptyStrB = document.querySelector(".res-b");

var sentence = document.querySelector(".sentence").textContent;
var sentenceArray = document.querySelector(".res-array");

var parragraph = document.querySelector('.p').textContent;
var resUpperCase = document.querySelector('.res-upper');

var card = document.querySelector('.card-number').textContent;
var anonym = document.querySelector('.an');

var sortSentence = document.querySelector('.sort-sentence').textContent;
var sortRes = document.querySelector('.res-sort');

/* Page controller */

emptyStrA.innerHTML = isEmptyString(strA);
emptyStrB.innerHTML = isEmptyString(strB);

sentenceArray.innerHTML = textSlicer(sentence);

resUpperCase.innerHTML = firstLetterToUpperCase(parragraph);

anonym.innerHTML = cardAnonymazer(card);

sortRes.innerHTML = sortStr(sortSentence);

/* Function definition */

function isEmptyString(str) {
    return str === "";
}

function textSlicer(str) {
    return str.split(" ");

}

function firstLetterToUpperCase(str) {
    var arr = str.trim().split(".");
    var result = [];

    for (s of arr) {
        var sTrim = s.trim()
        if (sTrim != "") {
            var sFirstUpper = sTrim.replace(sTrim.charAt(0), sTrim.charAt(0).toUpperCase()) + ".";
            result.push(sFirstUpper);
        }
    }
    return result.join(" ");
}

function cardAnonymazer(num){
    var reg = /[0-9]/g;
    num = num.trim();
    return num.slice(0, num.length - 4).replace(reg, "*") + num.slice(-4);
}

function sortStr(str){
    var arr = str.toLowerCase().split("");
    var result = arr.filter(function(value, index, arr){ 
        return value != " ";
    });
    return result.sort();
}

console.log(sortStr("Tady je dobře"));