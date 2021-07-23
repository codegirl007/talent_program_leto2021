/* Úkol s kartama */

const cards = ['piky', 'srdce', 'kary', 'krize'];

var l = cards.length;
var currentCard = cards[0];

while (currentCard != 'srdce') {
    var i = Math.floor(Math.random() * l);
    currentCard = cards[i];
    console.log(currentCard);
}

/* Úkol falsey */

if (false) {
    console.log("truthy")
} else {
    console.log("falsey")
}

if (0) {
    console.log("truthy")
} else {
    console.log("falsey")
}

if (null) {
    console.log("truthy")
} else {
    console.log("falsey")
}

/* Nullish úkol */

let data = [1, 2, null, "false", undefined, 0, []];
let output = [];

for(item of data){
    output.push(item ?? "nedefinováno");
}
console.log(output);

