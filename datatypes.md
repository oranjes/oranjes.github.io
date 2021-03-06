# dinsdag 22 september - Datatypes Array & Object

## https://oranjes.github.io

- [Leesdocument & oefenvragen](https://github.com/oranjes/oranjes.github.io/blob/master/datatypes.md)
- [Website](https://oranjes.github.io/javascriptians/index.html) - om te analyseren met F12 inspector
- [Broncode op Github](https://github.com/oranjes/oranjes.github.io/tree/master/javascriptians)

# Datatypes

![](https://www.tutsmake.com/wp-content/uploads/2020/05/JavaScript-Data-Types-Examples-1.jpeg)

**Primitieven** kunnen maar 1 waarde zijn/bevatten

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

Bij een vergelijking van een String **met** een Number, interpreteert JavaScript de String als een Number

</details>

<hr>
<hr>

## String && String

```js
console.log("350" < 40, "350" < "40");
```

Wat is de uitvoer in de console?

```basic
1 - false , true
2 - false , false
```

<details><summary><b>Antwoord</b></summary>

Antwoord: **1**

Bij een vergelijking van een String met een String, vergelijkt JavaScript de Strings op basis van Alfabetisch sorting

Dus `"aac" < "aap"` en `"aaap" < "aap"`

Dus bij `"35" < "40"` houdt de **alfabetische** vergelijking op. De "0" wordt niet meer meegenomen in de vergelijking.

</details>

<hr>
<hr>

## Boolean

MDN Documentatie: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

#### Negation

```js
!false === true;
false === !true;

false !== !false;
```

Probeer **negation** te voorkomen:

```javascript
const f = (x) => {
  if (!x) {
    // geen x waarde
  } else {
    // wel een x waarde
  }
};
```

Draai de `if-else` takken om:

```javascript
const f = (x) => {
    if (x) {
        // wel een x waarde
    } else {
        // geen x waarde
    }
}
```

### Falsy values

- Number `0`
- keyword `null`
- keyword `undefined`
- Boolean `false`
- Number `NaN`
- String `""` (of '' en `` )

Deze waarden kun je met _Loose Comparison_ **==** en **!=** vergelijken met **true** en **false**

```javascript
let naam = "";
while (!naam) { // (!naam == true)
  naam = prompt("Wat is je naam");
}
console.log(`Hallo ${naam}`);
```

**Tip:** gebruik zoveel mogelijk _strict comparison_ **`===`** en **`!==`**  
Want dat voorkomt logische fouten.

Bovenstaande kun je ook schrijven als:

```js
while (naam.length === 0) {}
while (naam === "") {}
```

## Datatype: undefined

Wanneer je zelf **geen** return value opgeeft, is er **altijd** (impliciet) een: return `undefined`;

```javascript
const setColor = (value) => {
    document.body.style.background = value;
    /* implicit return undefined; */
}
let functionResult = setColor("red");// undefined
```

### Maak je eigen ketting (chaining function)

Als de functie toch niets terug geeft, kun je er net zo goed gebruik van maken:

```javascript
const setBackground = (value) => {
    document.body.style.background = value;
    return document.body.style;
}
setBackground("red").color = "white";
```

## typeof

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
// helper function
const isArray = (x) => Array.isArray(x);

let kinderen = ["Amalia", "Alexia", "Ariane"];
console.log(isArray(kinderen)); // true
```

</details>

<hr>
<hr>

## Array methods

```javascript
let gezinnen = [
  ["Alexander", ["Amalia", "Alexia", "Ariane"]],
  ["Friso", ["Luana", "Zaria"]],
  ["Constantijn", ["Eloise", "Claus-Casimir", ""]],
];

console.log(gezinnen[1][1].map((x) => x.toUpperCase()));
```

Wat is de uitvoer ?

```basic
1 - "ALEXANDER"
2 - ["LUANA","ZARIA"]
3 - ["Luana","Zaria"]
```

<details><summary><b>Antwoord</b></summary>

Antwoord: **2**

**[1][1]** is:

`gezinnen[1]` --> `["Friso" , ["Luana" , "Zaria"]]`

daarna

`["Friso" , ["Luana" , "Zaria"]][ 1 ]` --> `["Luana" , "Zaria"]`

`["Luana" , "Zaria"].toUpperCase()` --> `["LUANA","ZARIA"]`

</details>

<hr>
<hr>

## Objects

Objects bestaan uit **unieke** `key : value` pairs.

```javascript
let MyObject = {
  key1: "Hello World",
  key2: ["Luana", "Zaria"],
  Alexander: {
    partner: {
      name: "Maxima",
      "person-age": 49,
    },
  },
};
```

### Geldige keys:

- Zijn een String value
- beginnen **niet** met een getal
- Fun fact: Mogen Unicode Strings zijn (aka Emojis)

```
let prinsessen = {
    '👩' : "Amalia",
    '👩‍🦰' : "Alexia",
    '👩‍🦱' : "Ariana"
}
```

### Object values opvragen met:

```javascript
let MyObject = {
    key1 : "Hello World",
  Alexander: {
    partner: {
      name: "Maxima",
      "person-age": 49,
    },
  },
};

const lookup = "Friso";
const age_lookup = "age";
MyObject[lookup][age_lookup]

let lookup = "key1";

console.log(MyObject.key1); // Hello World
console.log(MyObject["key1"]); // Hello World ('brackets notation')
console.log(MyObject[lookup]); // Hello World

lookup = MyObject.Alexander.partner;

console.log(`${lookup.name} is ${lookup["person-age"]} jaar oud`); // Maxima is 49 jaar oud
```

### Vraag:

```javascript
let gezinVan = {
  Constantijn: ["Eloise", "Claus-Casimir", ""],
  Alexander: ["Amalia", "Alexia", "Ariane"],
  Friso: ["Luana", "Zaria" , undefined ,  undefined , "Arie"],
  //Alexander: [ ...gezinVan.Alexander , "Arie" ,  "Alydia"] // Error gezinVan === undefined
};
```

Wat is de uitvoer van `console.log( gezinVan.Alexander )`?

```basic
1 - Error
2 - ["Willy"]
```

<details><summary><b>Antwoord</b></summary>

Antwoord: **2**

De **keys** binnen een Object moeten uniek zijn; een dubbele waarde **overschrijft** de vorige waarde.

**let op!**

Er is **geen** 'volgorde' in een Object.

![](https://i.imgur.com/9shC7WR.png)

- De console _samenvatting_ (1e regel) toont de gebruikte volgorde. ["Willy"] **overschrijft** de eerder gebruikte *key:* Alexander
- De uitgeklapte Array informatie toont de keys in **alfabetische** volgerde

Nogmaals, er **is geen volgorde** in een Object. Het is alleen in de Console dat er een 'volgorde' **lijkt** te zijn

</details>

### Aanvulling: Elementen toevoegen aan Array

```js
//Met ... spread operator
gezinVan.Alexander = [ ...gezinVan.Alexander , "Arie" ,  "Alydia"];
// [ "Amalia", "Alexia", "Ariane" , "Arie" , "Alydia"]
// zonder ... spread operator:
// [  ["Amalia", "Alexia", "Ariane"]  , "Arie" , "Alydia"]
// Met push (1 parameter)
gezinVan.Alexander = gezinVan.Alexander.push( "Arie" );
// Met concat (meerdere parameters)
gezinVan.Alexander = gezinVan.Alexander.concat( "Arie2" ,  "Alydia" );
```

### Aanvulling: Keys/inhoud toevoegen aan Object

```js
// set new key
MyObject.Beatrix = {
    partner:"Claus"
};

// using ... spread Operator
MyObject = { ...MyObject , Friso:{ partner:"Mabel" } };
```

<hr>

### Verdieping `Object.keys()` , `Object.values()` , `Object.Entries()`

Lees: [Medium.com - Sort Objects](https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c#:~:text=An%20object%20type%20is%20a,order%20for%20the%20object%20properties.&text=What%20if%20you%20have%20an,properties%20by%20keys%20or%20values%3F)

<hr>
<hr>

### (optioneel) Functions en Array verdiepingsvraag

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

# Code met Arrays && Objects leren lezen
