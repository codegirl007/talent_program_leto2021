# Cykly neboli Loops

Cykly se v programování používají, pokud chceme stejný kód nechat běžet několikrát za sebou, pokaždé ale s jinými hodnotami. Cyklů máme několik typů:

* [while](#while)
* [do while](#do-while)
* [for](#for)
* [for...in](#forin)
* [for...of](#forof)

Každý z těchto cyklů je v různých prohlížečích vykonáván různou rychlostí. Srovnání naleznete [zde](https://blog.bitsrc.io/measuring-performance-of-different-javascript-loop-types-c0e9b1d193ed). Jak optimalizovat jednotlivé typy cyklů si můžete přečíst [zde](https://www.freecodecamp.org/news/how-to-optimize-your-javascript-apps-using-loops-d5eade9ba89f/). Pro testování vlastního kódu a jeho optimalizaci můžete zkusit online nástroj [jsben.ch](https://jsben.ch/wY5fo).

Cykly můžeme přerušit pomocí následujících příkazů: 
* [break](#break)
* [continue](#continue)
* [pojmenované příkazy](#pojmenované-příkazy)

> U všech cyklů si musíme dávat pozor, abychom nechtěně nevytvořili nekonečnou smyčku.

## while

```js
while (podmínka) {
    příkaz;
}
```

Náplň cyklu while se opakuje stále dokola, dokud je podmínka v závorce splněná. V okamžiku kdy podmínka = false, cyklus končí a pokračuje se příkazem následujícím za cyklem. U cyklu while se podmínka vyhodnotí i před první během cyklu (pozn. tím se liší od cyklu [do while](#do_while)).

### Příklad:

```js
var i = 1;

while (i < 3) {
    console.log(i);
    i++;
}
/* Output:
    1
    2
*/
```

## do while

```js
do {
    příkaz;
} while (podmínka);
```

Cyklus do while funguje obdobně jako cyklus while s tím rozdílem, že příkazy v bloku po "do" se na poprvé vykonají vždy i když je podmínka false. Po prvním vykonání příkazů se zkontroluje podmínka a dokud je pravdivá, příkazy se vykonávají stéle dokola. V okamžiku kdy podmínka = false, cyklus končí a vykoná se příkaz následující za cyklem.

### Příklad

```js
var i = 1

do {
    console.log(i);

} while(i < 1);
/* Output:
    1
*/
```

Pokud se stejnými hodnotami vytvoříme cyklus [while](#while) dostaneme rozdílný výsledek:

```js
var i = 1

while(i < 1) {
    console.log(i);
}
/* Output:
*/

```

## for

```js
for (
    inicializace;    // kód který proběhne před začátkem cyklu
    podmínka;        // Kód, který se vykoná před začátkem každé iterace
    finální výraz) { // kód, který se vykoná po každě iteraci
    příkaz;
}
```
Cyklus [for](#for) slouží pro opakování příkazu/skupiny příkazu pro předem daný počet iterací. Pro definování chování cyklu for slouží tři volitelné výrazy. Standartní přehledný zápis je uveden v příkladu:

### Příklad

```js
for(var i = 0; i < 3; i++) {
    console.log(i);
}
/* Output:
    0
    1
    2
*/
```

Zároveň všech může být for cyklus definován neobvykle. První výraz může obsahovat jakýkoliv příkaz, který s má vykonat před započetím cyklu. Může například inicializovat a deklarovat více promněných, které nemusejí mít žádnou spojitost s iterací. Druhý výraz může kromě podmínky obsahovat předem definovanou funkci, která však musí vracet boolean hodnotu, ale kromě této hodnoty může vykonávat jakékoliv příkazy. Tato funkce bude volána před začátkem každé iterace. Třetí výraz je naopak volán na konci každé iterace a nejčastěji inkrementuje nebo dekrementuje promněnou pomocí které iterujeme, ale tato část kódu může zase obsahovat jakékoliv příkazy. Neobvyklé zápisy cyklů for naleznete [zde](https://blog.bitsrc.io/3-flavors-of-the-for-loop-in-javascript-and-when-to-use-them-f0fb5501bdf3).

### Příklad neobvyklého zápisu

```js
for (let a = 0, b = 0; a < 10 && b < 100; console.log("Iterace:", ++a, b+=10)){}
/* Output:
    Iterace: 1 10
    Iterace: 2 20
    Iterace: 3 30
    Iterace: 4 40
    Iterace: 5 50
    Iterace: 6 60
    Iterace: 7 70
    Iterace: 8 80
    Iterace: 9 90
    Iterace: 10 100
*/
```

Zpět ale ke standardním zápisům. V inicializaci definujeme proměnou, která nám bude určovat, kolikátá iterace zrovna běží. Tato promněnná může být i definovaná před cyklem [for](#for):

```js
var i = 0;

for (; i < 3; i++){
    console.log(i);
}
/* Output:
    0
    1
    2
*/
```

Stejně tak i podmínka může být z definice cyklu [for](#for) vyjmuta a definována uvnitř cyklu pomocí podmínky if (výraz [break](#break) si vysvětlíme dále):

```js 
var i = 0;

for (;;i++) {
    if(i >= 3) {
        break;
    }
    console.log(i);
}
/* Output:
    0
    1
    2
*/
```

Podmínka musí být uvnitř cyklu definovaná, jinak bysme vytvořili nikdy nekončící smyčku s kterou by si prohlížeč neporadil.

Stejně jako předchozí dva výrazy, i finální výraz můžeme definovat až uvnitř cyklu:

```js 
var i = 0;

for (;;) {
    if(i >= 3) {
        break;
    }
    console.log(i);
    i++;
}
/* Output:
    0
    1
    2
*/
```

## for...in

Cyklus [for...in](#forin) iteruje přes vlastnosti objektu s kterým pracuje.

### Příklad

```js
var person = {
    firstName: "Joe",
    secondName: "Doe",
    age: 30,
}

for (prop in person) {
    console.log(prop);
}
/* Output:
    firstName
    secondName
    age
*/

```

V případě iterování skrze String dostaneme tento výsledek:

```js
var text = "Je pátek.";

for(letter in text) {
    console.log(letter);
}
/* Output
    0
    1
    2
    3
    4
    5
    6
    7
    8
*/
```

Pokud chceme, aby nám cyklus vypsal písmena stringu, musíme použít [for...of](#forof) nebo změnit proměnou pro vypisování:

```js
var text = "Je pátek.";

for(letter in text) {
    console.log(text[letter]);
}
/* Output:
    J
    e
    
    p
    á
    t
    e
    k
    .
*/

```

## for...of

Cylus [for...of](#forof) slouží pro iterace skrz iterovatelné objekty jako jsou Array, String, Map, TypedArray, Set nebo Generator. Cyklus for těmito objekty projde skrze všechny jeho členy.

### Příklad

```js
var arr = ["Křemílek", "Vochomůrka", "Rákosníček", "Motýl Emanuel"];

for (postava of arr) {
    console.log(postava + " je pohádková postava.");
}

/* Output:
    Křemílek je pohádková postava.
    Vochomůrka je pohádková postava.
    Rákosníček je pohádková postava.
    Motýl Emanuel je pohádková postava.
*/
```

Cyklus [for...of](#forof) vypisuje hodnoty iterovaného přemětu (ne názvy vlastností nebo indexy, jako je tomu u cyklu [for...in](#forin)). Je proto vhodný pro použití u stringů:

```js
var text = "Je pátek.";

for(letter of text) {
    console.log(letter);
}
/* Output:
    J
    e
    
    p
    á
    t
    e
    k
    .
*/

```
## break

Příkaz [break](#break) slouží pro přerušení cyklu mimo předem stanovné podmínky. Po přerušení příkazem break program ukončí právě probíhající cyklus a pokračuje příkazem, který následuje po tomto cyklu. Příkaz break přeruší vždy právě jeden nejbližší nadřazený cyklus.

Příklad

```js
var i = 0;
var arr = ["jeden", "dva", "tři"]

while (i < 4) {
    for (word of arr){
        if (word == "dva") {
            break;
        }
        console.log(word)
    }
    i++;
    console.log(i);
}
/* Output
    jeden
    1
    jeden
    2
    jeden
    3
    jeden
    4
*/
```

## continue

Příkaz [continue](#continue) neukončí právě probíhjící cyklus, ale ukončí pouze právě probíhající iteraci:

### Příklad

```js
var i = 0;
var arr = ["jeden", "dva", "tři"]

while (i < 4) {
    for (word of arr){
        if (word == "dva") {
            continue;
        }
        console.log(word)
    }
    i++;
    console.log(i);
}
/* Output:
    jeden
    tři
    1
    jeden
    tři
    2
    jeden
    tři
    3
    jeden
    tři
    4
*/
```

## pojmenované příkazy
### (Labeled statement)

V javascriptu se příkazy pojmenovávají pokud chceme [break](#break) nebo [continue](#continue) použít na jiný cyklus, než nejbližší nadřazený.

```js
var i = 0;
var arr = ["jeden", "dva", "tři"]

first: while (i < 4) {
    for (word of arr){
        if (word == "dva") {
            break first;
        }
        console.log(word)
    }
    i++;
    console.log(i);
}

/* Output:
    jeden
*/ 
```