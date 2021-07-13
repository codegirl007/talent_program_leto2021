# Čas v JS

Javascript nabízí objekt [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) pro práci s daty a časem. Tento objekt vznikl podle objektu java.Util.Date v Javě, který sám o sobě má omezenou funkcionalitu a navíc se tak stalo před čtvrt stoletím. Zatímco Java už má i modernější řešeno pro práci s čase, Javascript stále nativně obsahuje jen zmíněný Date. Kromě toho, že neobsahuje všechny funkce, které jsou pro práci s časem užitečné, nemá podporu pro time zones a locale. Připravuje se nový objekt [Temporal](https://tc39.es/proposal-temporal/docs/), už je ve fázi, kdy ho implementují prohlížeče, ale ještě není určen pro produkční prostředí.

## Knihovny pro data a časy

* ### [date-fns](https://date-fns.org/)

    Moderní knihovna s mnoha doporučeními.

* ### [Luxone](https://moment.github.io/luxon/#/)

    Napsaná jedním z autorů [Moment.js](https://momentjs.com/). Šikovně řešení time zones.

* ### [Moment.js](https://momentjs.com/)

    LEGACY v nových projektech již nepoužívat. Nicméně aktuálně nejvíce používaná.

* ### [Day.js](https://day.js.org/)

    Stejná funkcionalita jako [Moment.js](https://momentjs.com/), ale je extrémně malá (2kB), takže pokud se používá v prohlížeči, je načítání rychlejší.

* ### [js-Joda](https://js-joda.github.io/js-joda/)

    Podobná logika jako v Javě.

* ### [date-and-time](https://javascript.info/date)

* ### [Date.js](http://date.js.org/)

### Důležité pojmy

* Immutability

    Jednotlivé časové instance se nepřepisují, vždy se vytvoří nová.

* Tree shaking

    Při optimalizování kódu pro produkci, se z výsledného balíčku vyhází nepoužitý kód knihovny.

## Knihovny pro kalendáře


* ### [Fullcalendar.io](https://fullcalendar.io/)

    Knihovna použitelná pro vanilla Javascript, React, Vue i Angular. Vetšina funcionalit open-source, ale Scheduler je zpoplatněný. Nejpoužívanější knhovna pro kalendář.

* ### [TOAST UI Calendar](https://ui.toast.com/tui-calendar)

    Nepodporuje zobrazení více zdrojů.

* ### [React Big Calendar](https://jquense.github.io/react-big-calendar/examples/index.html)

    Kalendář ispirovaný [Fullcalendar.io](https://fullcalendar.io/) vytvořený pro React. Výhoda je, že ani rozšířené funkcionality nejsou zpoplatněné.

## Zajímavé články

[Date Manipulation in JavaScript - A Complete Guide](https://livecodestream.dev/post/date-manipulation-in-javascript-a-complete-guide/)

[The best JavaScript date libraries in 2021](https://www.skypack.dev/blog/2021/02/the-best-javascript-date-libraries/)

[JavaScript for impatient programmers (ES2021 edition) - Dates](https://exploringjs.com/impatient-js/ch_dates.html)

[UTC is Enough for Everyone, Right?](https://zachholman.com/talkutc-is-enough-for-everyone-right)