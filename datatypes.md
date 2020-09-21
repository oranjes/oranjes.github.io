# Datatypes

![](https://www.tutsmake.com/wp-content/uploads/2020/05/JavaScript-Data-Types-Examples-1.jpeg)


## Number && String

```js
console.log(4 < 40, "4" < 40);
```

Wat is de uitvoer in de console?

```basic
1 - true , true
2 - true , false
```

<details><summary><b>Antwoord</b></summary>

Antwoord: **1**

Bij een vergelijking van een String met een Number, interpreteert JavaScript de String als een Number

</details>

<hr>
<hr>

## String && String

```js
console.log("350" < 40, "350" < "40");
```

Wat is de uitvoer in de console?

```basic
1 - true , true
2 - true , false
```

<details><summary><b>Antwoord</b></summary>

Antwoord: **1**

Bij een vergelijking van een String met een String, vergelijkt JavaScript de Strings op basis van Alfabetisch sorting

Dus `"aac" < "aap"` en `"aaap" < "aap"`

Dus bij `"35" < "40"` houdt de vergelijking op. De "0" wordt niet meegenomen in de (alfabetische) vergelijking.

</details>

<hr>
<hr>

## Boolean

MDN Documentatie: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

#### Negation


#### Falsy values

- Number `0`
- keyword `null`
- keyword `undefined`
- Boolean `false`
- Number `NaN`
- String `""` (of '' en `` )

Deze waarden kun je met _Loose Comparison_ **==** en **!=** vergelijken met `true` en `false`

```js
let naam = "";
while (!naam) {
  naam = prompt("Wat is je naam");
}
console.log(`Hallo ${naam}`);
```

### typeof

**typeof** geeft met een string aan welke type een variable is:

```js
let alex = "Alexander";
let leeftijd = 53;
let kinderen = ["Amalia", "Alexia", "Ariane"];
console.log(typeof alex); // "string"
console.log(typeof leeftijd); // "number"
console.log(typeof kinderen);
```

Wat is de uitvoer van `typeof kinderen`?

```basic
1 - "array"
2 - "object"
```

<details><summary><b>Antwoord</b></summary>

Antwoord: **2**

**Alle complexed** datatypes zijn 'object' in JavaScript.

Een Array check is:

```javascript
const isArray = (x) => Array.isArray(x);

let kinderen = ["Amalia", "Alexia", "Ariane"];
console.log( isArray(kinderen) )
```

</details>

<hr>
<hr>

### Trivial/Other

#### null

#### undefined

```javascript
const f(x) => {
    element.style.background = x;

    // als je zelf geen return value opgeeft, is er (impliciet) een return undefined
    return undefined;
}
```

## Composiet (samengesteld)

### Array

Weer een stapje moeilijker...

```javascript
const capitalize = () => {
    console.log("capitalize");
    return (x) => x.toUpperCase();
}
console.log( ["a","b","c"].map(  capitalize()  );
```

Wat staat er in de console?

```javascript
> "capitalize"
> "capitalize"
> "capitalize"
> (3) ["A","B","C"]
```

### Object

Notatie: **key/value pair**

```javascript
const Oranjes = {
  Alexander: {
    partner: "Maxima",
    kinderen: ["Amalia", "Alexia", "Ariane"],
  },
  Friso: {
    partner: "Mabel",
    kinderen: ["Luana", "Zaria"],
  },
  Constatijn: {
    partner: "Laurentien",
    kinderen: ["Eloise", "Claus-Casimir", "Leonore"],
  },
};
```

```javascript
console.log(Oranjes.Alexander);
```

Geeft als output:

```javascript
{
    "partner" : "Maxima",
    "kinderen" : ["Amalia", "Alexia","Ariane"]
}
```

```javascript
console.log(Oranjes.Alexander.kinderen);
```

Geeft als output:

```
    ["Amalia", "Alexia","Ariane"]
```

```
console.log( Oranjes.Alexander.kinderen[0] );
```

Geeft als output:

```
    "Amalia"
```

#### functies/methods:

- Object.keys(Oranjes)
- Object.values(Oranjes)
- Object.Entries(Oranjes)

### Set

CardMeister IMG

### Map

Landkaart namen: NL, Holland, Netherlands , Nederland / SP , Spain , Espange

const

// Object key met variabele
