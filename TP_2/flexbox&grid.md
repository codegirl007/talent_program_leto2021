# [Flexbox](#flexbox) & [Grid](#grid)
`Flexbox` a `grid` jsou hodnoty CSS pro vlastnost `display`, pomocí kterých lze vytvářet layout stránek. Při použití v kombinaci s media query, lze nastavit layouty pro různě veliké obrazovky.

## Zdroje:
### Flexbox

* <https://css-tricks.com/snippets/css/a-guide-to-flexbox/> - anglický přehled
* <https://www.vzhurudolu.cz/prirucka/css-flexbox> - český přehled
* <https://tobiasahlin.com/blog/common-flexbox-patterns> - nejčastější příklady užitý s úkázkovým kódem

### Grid
* <https://css-tricks.com/snippets/css/complete-guide-grid/> - anglický přehled
* <https://www.vzhurudolu.cz/prirucka/css-grid> - český přehled
* <https://cssgrid.io/> - video tutoriály jen na css grid
* <http://cssgridgarden.com/#cs> - hra na procvičování

## Flexbox
Je určen pro layout jednotlivých komponent webových stránek jako jsou menu, odkazy, seznamy produktů apod. Pro využití k nastavení layoutu celé stránky je vhodnější `grid` (vysvětlení [zde](https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)). Flexbox vytváří jednorozměrový layout - řádek nebo sloupec, jednotlivé sloupce nebo řádky lze ale zalamovat. Ve flexbox layoutu rozlišujeme dva prvky, které můžeme upravovat samostatně. 

 * **Flexbox container** - obalový element, který v sobě obsahuje další elementy, u kterých nastavujeme layout

 * **Flexbox item** - jednotlivé elementy ve flexbox containeru

 Flexbox je podporován všemi moderními prohlížeči, ale některé vlastnosti mohou vyžadovat specifické prefixy pro konkrétní prohlížeče nebo dokonce daná vlastnost může být pojmenována jinak.

### Flexbox container

#### `display`

* `flex`: nastaví element na flexbox layout a řádky před tímto elementam a za ní zalamuje
* `inline-flex`: nezalamuje elementy před a za flexbox elementem

#### `flex-direction`

* `row`: elementy uvnitř flexbox containeru se rovnají do řádku z leva doprava\* (defaultní hodnota)
* `row-reverse`: elementy uvnitř flexbox conteineru se rovnají do řádku z prava do leva\*
* `column`: elementy uvnitř flexbox containeru se rovnají do slopce zhora dolů
* `column-reverse`: elementy uvnitř flexbox containeru se rovnají do slopce zespoda nahoru

> **\*** směr platí pouze pokud máme nastaveno psaní zleva doprava (`ltr`). Pro nastavení zprava doleva (`rtl`) jsou směry opačně

#### `flex-wrap`
* `nowrap`: nezalamuje
* `wrap`: zalamuje
* `wrap-reverse`: zalamuje ale ze sdola nahoru

#### `flex-flow` 
Zkratka pro `flex-direction` a `flex-wrap`.

```
flex-flow: column wrap
```

#### `justify-content`
* `flex-start`: elementy jsou řazeny od začátku podle hodnoty `flex-direction` (defaultní hodnota)
* `flex-end`: elementy jsou řazeny od konce podle hodnoty `flex-direction`
* `start`: elementy jsou řazeny od začátku podle hodnoty směru psaní
* `end`: elementy jsou řazeny od konce podle hodnoty směru psaní
* `left`: elementy jsou řazeny od levého okraje containeru, pokud to není v rozporu s `flex-direction` v takovém případě se chová, jako by bylo nastaveno `start`
* `right`: elementy jsou řazeny od pravého okraje containeru, pokud to není v rozporu s `flex-direction` v takovém případě se chová, jako by bylo nastaveno `end`
* `center`: elementy jsou vycentrovány v rovině řazení
* `space-between`elementy jsou rozmístěny rovnoměrně, aby pouze mezi nimi byl prostor (první a poslední element je umístěn hned na začátku, respektivě na konci)
* `space-around`: elementy jsou rozmístěny rovnoměrně tak, každý měl kolem sebe stejně široký prostor, což vede k tomo, že opticky nejsou rozmístěny rovnomerně, protože před prvním a za posledním elementem je pouze jeden prostor, kdežto mezi dvěma elementy jsou tyto prostory dva (jeden od jednoho elementu a druhý od druhého)
* `space-evenly`: elementy jsou rozmístěny rovnoměrně
* \+ `safe/unsafe`: definuje zda element může přesahovat flexbox container

```
justify-content: flex-end safe
```

> Ne všechny prohlížeče podporují všechny hodnoty.

#### `align-items`
* `stretch`: elementy se natáhnou v opačné ose než je `flex-direction`, aby vyplnily container, stalé ale budou respektovat hodnoty `min-width` a `max-width` (defaultní hodnota)
* `flex-start / start / self-start`: elementy jsou zarovnané na začátek v opačné ose, než je `flex-direction` rozdíl mezi jednotlivýma hodnotame je stejný jako u `justify-content`
* `flex-end / end / self-end`: elementy jsou zarovnané na konec v opačné ose, než je `flex-direction` rozdíl mezi jednotlivýma hodnotame je stejný jako u `justify-content`
* `center`: elementy jsou vycentrivané v opačné ose než je `flex-direction`
* `baseline`: elementy jsou zarovnány podle pomyslné linky pod textem
* \+ `safe/unsafe`: definuje zda element může přesahovat flexbox container

```
align-items: flex-end safe
```

#### `align-content`

Chová se stejně jako `justify-content` jen se netýká jednotlivých elementů ve flexboxu zvlášť, ale zarovnává je jako jeden celek. Má efekt pouze u víceřádkových (případně vícesloupcových) flexboxů.

* `normal`
* `flex-start / start`
* `flex-start / start`
* `center`
* `space-between`
* `space-around`
* `space-evenly` 
* `stretch`
* \+ `safe/unsafe`: definuje zda element může přesahovat flexbox container

```
align-content: flex-end safe
```

#### `place-items`

Zkratka pro zarovnání položek v obou směrech.

#### `place-content`

Zkratka peo zarovnání všech položek jako celku v obouch směrech.

### Flexbox item

#### `order`

Určuje pořadí elementů ve flexboxu. Defaultně jsou rozmístěny, tak jak jsou uloženy v DOMu. Hodnotou je celé číslo a může být i záporné.

#### `flex-grow`

Definuje jak se může element rozšiřovat, pokud má místo. Zadávané hodnoty jsou bez jednotek. Pokud všechny elementy budou mít nastaveno 

```
flex-grow: 1
```
tak budou distrinuovány rovnoměrně. Pokud jeden z elementů bude mít nastavenou hodnotu 2, tak tento element bude zabírat 2x více místa než ostatní. Pouze kladná čísla.

#### `flex-shrink`

Definuje zda a o kolik se může slement smrštit, pokud je to potřeba. Pouze kladná čísla.

#### `flex-basis`

Definuje defaultní velikost elementu, než je rozdistribuován zbylý prostor okolo elementů. Pokud je nastavena hodnota 0, není zbylé místo využito. Může být zadán v různých jednotkách (20%, rem, aj.) nebo slovně.
* `auto`: zbylé místo je rozdistribuováno podle hodnoty `flex-grow`
* `max-content, min-content, fit-content`: není příliš dobře podporováno prohlížeči

Odkaz na názorný [obrázek](https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg).

#### `flex`

Zkratka pro `flex-grow`, `flex-shrink` a `flex-basis`. Povinný je pouze `flex-grow`. Defaultně je nastaveno `1 0 auto`.

#### `align-self`

Umožňuje definovat zarovnání pouze určitých elementů ve flexboxu, vlastnost `align-items` bude touto vlastností přepsána pro daný element. Může nabývyt stejných hodnot jako [`align-items`](#align-items).

#### `place-self`

Zkratka pro zarovnání položky v obou směrech.

## Grid

Frid slouží pro vytvoření layoutu, který je dvourozměrný. Je tedy ideální pro rozvržení celé webové stránky (hlavička, postraní navigace, obsah, patička). Stejně jako u flexboxu rozlišujeme dva základní prvky:

* **Grid container** - obalový element, který v sobě obsahuje další elementy, u kterých nastavujeme layout

* **Grid item** - jednotlivé elementy v grid containeru

### Grid container

#### `display`
* `grid`: zalamuje okolní řádky
* `inline-grid`: nezalamuje okolní řádky

#### `grid-template-columns` & `grid-template-rows`
Nastavuje kolik bude řádků a kolik bude sloupců 

```
/* bez pojmenování oddělujících čar */
grid-template-columns: 40px auto 20px;
grid-template-rows: 25% auto 100px;
```

```
/* s pojmenováním oddělujících čar */
grid-template-columns: [first] 40px [second] auto [third] 20px;
grid-template-rows: [1] 25% [2] auto [3] 100px [4];
```

Oddělující čáry mohou mít i více jak jedno pojmenování, oddělujeme je mezerou.

> "fr" jednotka, která zastupuje poměry volného prostoru. 1fr 1fr 1fr rozdělí grid na třetiny.

#### `grid-template-areas`

Slouží k pojmenování oblastí v gridu, aby jsme na ně poté mohli jednotlivými vnitřními elementy odkazovat.

```
grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer"
```

Tečka zastupuje prázdnou buňku.

#### `grid-template`

Zkratka pro vlastnosti `grid-template-columns, grid-template-rows` a `grid-template-areas`.

#### `column-gap` & `row-gap` & `grid-column-gap` & `grid-row-gap`

Definuje šířku prostoru mezi buňkami.

#### `gap`

Zkratka pro `row-gap` a `column-gap`

#### `justify-items`

Stejné jako u flefboxu.

* `start`
* `end`
* `center`
* `stretch`: defaultní hodnota

#### `align-items`

Stejné jako u flefboxu.

* `start`
* `end`
* `center`
* `stretch`: defaultní hodnota

#### `place-items`

Zkratka pro nastavení `justify-items` a `align-items` v jednom kroku.

#### `justify-content`

Stejné jako u flexboxu.

* `start`
* `end`
* `center`
* `stretch`
* `space-around`
* `space-btween`
* `space-evenly`

#### `align-content`

Stejné jako `justify-content`, ale ve vertikální ose.

#### `place-content`

Zkratka pro `justify-content` a `align-content`.

#### `grid-auto-columns` & `grid-auto-rows`

Specifikuje velikost položek, která přesahují definovaný template `grid`.

#### `grid-auto-flow`

Určuje kam umístit elementy, která nemají konkrétně specifikované místo.

* `row`: vyplňuje řádky
* `column`: vyplňuje sloupce
* `dense`: vyplňuje mezery

#### `grid`

Zkratka pro `grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns` a `grid-auto-flow`.

### Grid item

#### `grid-column-start`, `grid-column-end`, `grid-row-start` a `grid-row-end`

Určuje polohu elementu v grid containeru.

#### `grid-column` a `grid-row`

Zkratky pro `grid-column-start`+ `grid-column-end` a `grid-row-start` + `grid-row-end`

#### `grid-area`

Dá elementu referenci ke `grid-area`. Připadě lze i využít jako zkratka pro `grid-column-start`+ `grid-column-end` + `grid-row-start` + `grid-row-end`

#### `justify-self`

Zarovná se v řádku.

* `start`
* `end`
* `center`
* `stretch`

#### `align-self`

Zarovná se ve sloupci.

* `start`
* `end`
* `center`
* `stretch`

#### `place-self`

Zkratka pro `justify-self` a `align-self`.