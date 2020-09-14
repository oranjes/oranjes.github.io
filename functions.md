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
const f = function(x) => {
  return x;
};
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
  z // uitleg
) => x + y + z;
```

<hr class="questionend">
<hr class="questionstart">

## Functie parameters (1)

Functie parameters mogen een standaard waarde hebben.

Met welke notatie kan de **power()** functie ook voor **5^3** gebruikt worden voor aanroepen:

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

## displayEvenNumbers

```javascript
const isOdd = (x) => x % 2 === 0;
const isEven = (x) => !isOdd(x);

const displayEvenNumbers = (numbers) => {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (isOdd(number)) {
      evenNumbers.push(number);
    }
  }
};
```

### Arguments

### ...args

`const sum = (....args) => args.reduce( (_sum,_val) => _sum + _val , 0 // begin waarde );`
