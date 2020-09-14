# Functions

## Terug naar de wiskunde les

![](https://www.basic-mathematics.com/images/graph-of-linear-parent-function.jpg)

De functie **f(x) = x** wordt in JavaScript geschreven als:

```javascript
    1 - const f = (x) => x;
    2 - const f => (x) = x;
```

<details><summary><b>Antwoord</b></summary>

Antwoord: **1**

De functie wordt toegekend aan _const_ **f**

De uitgeschreven notatie is:

```javascript
const f = (x) => {
  return x;
};
```

De oude JavaScript notatie die je ook tegen kunt komen is:

```javascript
function f(x) {
  return x;
}
```

Voor extra duidelijkheid kun je ook schrijven:

```javascript
const f = function (x) {
  return x;
};
```

Maar **niet!**

```javascript
const f = function(x) => x;
```

</details>

<hr class="questionend">
<hr class="questionstart">

## Functieverwijzingen (1)

```javascript
const f1 = (x) => x + 1;
const f2 = (x) => f1(x);
```

Wat is de uitkomst van **console.log( f2( 5 ) )**

```javascript
1 - 6;
2 - 7;
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **1**

Functie **f2** roept functie **f1** aan, en geeft het resultaat terug

Uitgeschreven als _substituties_:

```javascript
    f2( 5 ) => f1( 5 )
    f2( 5 ) => ( 5 ) => 5 + 1
    f2( 5 ) => 6
    6
```

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## Functieverwijzingen (2)

```javascript
const f1 = (x) => x + 1;
const f2 = (x) => f1(x);
const f3 = f1;
```

Wat is de uitkomst van **console.log( f3(5) )**

```javascript
1 - 6;
2 - 7;
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **1**

Functie **f3** verwijst rechtstreeks naar functie **f1**

De volgorde is belangrijk!!

```javascript
const f3 = f1;
const f1 = (x) => x + 1;
```

geeft een foutmelding, want functie **f1** bestaat nog niet op het moment dat **f3** een waarde(verwijzing) moet krijgen.

Functie **f2** mag wel eerder **gedefinieerd** worden, want de functie **f1** wordt pas _aangeroepen_, nadat **f2** als functie is **aangeroepen**.

```javascript
const f2 = (x) => f1(x);
const f1 = (x) => x + 1;
const f3 = f1;
```

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## Functieverwijzingen (3)

```javascript
let f1 = (x) => x + 1;
let f2 = f1;
f1 = (x) => x + 2;
```

Wat is de uitkomst van **console.log( f2(5) )**

```javascript
1 - 6;
2 - 7;
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **2**

Functies gedragen zich hetzelfde als _variablen_

Functie **f1** is een `let`, en kan dus een andere waarde krijgen, de vorige functie wordt dus overschreven.

Functie **f2** blijft naar **f1** verwijzen; **niet** naar de _waarde/functie_ van **f1**

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## Functieverwijzingen (4)

```javascript
const f1 = (x) => {
  const f2 = (x) => x + 1;
  const f3 = (x) => x - 1;
  return f2(x) + f3(x);
};
```

Wat is de uitkomst van **console.log( f2(5) )**

```javascript
1 - 10;
2 - 11;
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **1**

De waarde x wordt **niet** gewijzigd door functie **f2**, dus x blijft 5 in de aanroep van functie **f3**

```javascript
return 5 + 1 + (5 - 1);
```

Duidelijker uitgeschreven:

```javascript
const f1 = (x) => {
  const f2 = (y) => y + 1;
  const f3 = (z) => z - 1;
  return f2(x) + f3(x);
};
```

En dus mag je **x** ook binnen de lokale functies gebruiken:

```javascript
const f1 = (x) => {
  const f2 = (y) => y + x;
  const f3 = (z) => z - x;
  return f2(x) + f3(x);
};
```


</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## Functieverwijzingen (5)

```javascript
const f1 = (x) => x + 1;
const f2 = (x) => f1(x);
const f3 = f1;

const f4 = (x) => x + 4;
const f5 = () => f4;
```

Bij welke notatie krijg je de waarde **6** in de console?

```javascript
1 - f5()(2);
2 - f5(2)();
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **1**

- Functie **f5** moet worden aangeroepen als functie.
- **f5** retourneert functie **f4**

Dus de uitgevoerde substituties zijn:

```javascript
    f5()(2)
    f4(2)
    (2) => 2 + 4
    6
```

Antwoord 2 is:

```javascript
    f5(2)()
    f4()
    (undefined) => undefined + 4
    NaN (Not a Number)
```

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## Functies IN Functies

```javascript
const twice = (x) => x * 2;
```

Bij welke notatie krijg je de waarde **12** in de console?

```javascript
1 - twice(twice(3));
2 - twice(3) + twice(3);
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **beide antwoorden zijn goed**

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## Wiskunde notaties

Documentatie: [MDN Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

Machtsverheffen: **x²** of **x ^ 2**

```javascript
const power = (x) => x ** 2;
const power = (x) => Math.pow(x, 2); // oude JavaScript notatie
```

Worteltrekken: **√x**

```javascript
const sqrt = (x) => Math.sqrt(x);
```

Welke notatie geeft de constante **π** 3.141592653589793

```javascript
1 - const PI = Math.PI;
2 - const PI = (x) => Math.PI(x);
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **1**

PI is een **constante**, geen functie

Je mag natuurlijk altijd voluit `Math.PI` blijven schrijven.

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## Functie parameters (1)

Functies mogen een (onberkt aantal) parameters hebben

```javascript
const sum = (x, y, z) => x + y + z;
```

parameters mogen worden uitgeschreven over meerdere regels:

```javascript
const sum = (
  x, // uitleg x
  y, // uitleg y
  z //  uitleg z
) => x + y + z;
```

<hr class="questionend">
<hr class="questionstart">

## Functie parameters (2)

Functie parameters mogen een standaard waarde hebben.

Met welke notatie kan de **power()** functie ook voor **5^3** gebruikt worden:

```javascript
1 - const power = (x, p = 2) => x ** p;
2 - const power = (p = 2, x) => x ** p;
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **1**

De standaard exponent is **2**, deze hoef je niet in te voeren om **x^2** te berekenen.

```javascript
power(5); // 5 * 5 = 25
power(5, 3); // 5 * 5 * 5 = 125
```

Met antwoord 2 zul je **altijd** de exponent moeten opgeven:

```javascript
power(2, 5); // 5 * 5 = 25
power(3, 5); // 5 * 5 * 5 = 125
```

Een standaardwaarde opgeven is dan zinloos.

Dus:

- **vereiste** parameters worden als eerst opgegeven.
- **optionele** parameters worden als laatst opgegeven.

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## E = mc^2

```javascript
const E = (
  m, // massa
  c = 299792458 // lichtsnelheid
) => m * power(c);
```

<hr class="questionend">
<hr class="questionstart">

## Helper functions (1)

```javascript
//helper functions
/* 1 */ const isOdd = (x) => x % 2 === 0; // bug van Luc: x % 2 = 0;

//main program
const displayEvenNumbers = (numbers) => {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (isOdd(number)) {
      evenNumbers.push(number);
    }
  }
};

/* 2 */ const isOdd = (x) => x % 2 === 0;
```

Waar in de code moet de **isOdd** functie geplaatst worden?

```basic
1 - voorafgaand aan de DisplayEvenNumbers functie
2 - isOdd mag overal in de code staan;
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **beide antwoorden zijn goed**

Als de functie maar bestaat wanneer displayEvenNumbers er gebruik van gaat maken.

- _Helper Functions_ moeten zo generiek mogelijk zijn
- staan bovenaan de code (leesbaarheid & 100% zekerheid dat functies bestaand)
- OF in een apart bestand (bijvoorbeeld: `helper-functions.js`)

Er bestaan meerdere Helper Functions libraries: Lodash is de meest bekende.
Je moet een afweging maken hoeveel functions je gebruikt; als je slechts 2 functies gebruikt uit de Lodash library is het misschien beter om die 2 functions te copieren naar je eigen `helper.js`. Daarmee ben je niet meer afhankelijk van een _3rd party_ library.

![](https://i.imgur.com/na3TzHs.png)

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## String functies (1)

```javascript
/* 1 */
const upperCase = (x) => x.toUpperCase();
const firstLetter = (x) => x[0];
const remainingLetters = (x) => x.slice(1);
const capitalize = (x) => upperCase(firstLetter(x)) + remainingLetters(x);

/* 2 */
const capitalize = (x) => x[0].toUpperCase() + x.slice(1);
```

Welke van de 2 (dezelfde) functionaliteiten heeft jouw voorkeur?

```basic
1 - zo leesbaar mogelijk
2 - zo kort mogelijk
```

<details><summary><b>Antwoord</b></summary>
<p>

Antwoord: **geen goed of fout antwoord**

Jij en je team bepalen wat de _coding-style_ voor het team/project/bedrijf is.

Technische opmerking: bij het naar een Productie omgeving publiceren van JavaScript bestanden, zullen (nog te leren) tools versie **1** zoveel mogelijk _optimaliseren_ naar versie **2**

</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## String functies (2) - Prinsjesdag

```javascript
const capitalize = (x) => x[0].toUpperCase() + x.slice(1);

const prinsen = ["alexander", "friso", "constatijn"];

const Prinsen = prinsen.map((x) => capitalize(x));
```

Prinsen heeft de waarde:

```js
1 - "Alexander,Friso,Constatijn"
2 - [ "Alexander" , "Friso" , "Constatijn" ]
```

<details><summary><b>Antwoord</b></summary>
<p>

De Array.map functie verwerkt alle array-items, en retourneert een Array met **hetzelfde aantal** items
</p>
</details>

<hr class="questionend">
<hr class="questionstart">

## String functies (3) - Prinsjesdag

Alleen bij **dezelfde** parameters kun je een voorgedefinieerde functie **verwijzing** gebruiken:

```javascript
const capitalize = (x) => x[0].toUpperCase() + x.slice(1);

const prinsen = ["alexander", "friso", "constatijn"];

//const Prinsen = prinsen.map((x) => capitalize(x));
const Prinsen = prinsen.map(capitalize);
```

<hr class="questionend">
<hr class="questionstart">



