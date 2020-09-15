# De Console

`console.log()` is waarschijnlijk de meest gebruikte functie.

Maar bijna niemand leest de documentatie: https://developer.mozilla.org/en-US/docs/Web/API/console#Usage

Wanneer de eerste parameter een **%c** markering bevat, dan is de **2e** parameter CSS voor de **1e** parameter:

```javascript
console.log(`%c Hello World `, "background:green;color:yellow;font-size:20px");
```

![](https://i.imgur.com/RK0LiK0.png)

## Mijn eerste functie in elk nieuw project:


```javascript
console.savedlog = console.log;//bewaar de oorspronkelijk functie
//OVERSCHRIJF de bestaande functie
console.log = (...args) => {
  //...REST parameter maakt een array van alle argumenten: let args =[ arg1 , arg2 , arg3 , ....];

  // local helper functions
  const isString = (x) => typeof x === "string";
  const isNumber = (x) => typeof x === "number";
  const isFunction = (x) => typeof x === "function";

  let label = "";
  const css = "background:green;color:yellow";

  //als arg1 een String is.. wordt dat het label
  if (isString(args[0])) label = args.shift();
  // Array args is nu:
  // args = [ arg2 , arg3 , ....]
  // of
  // args = [ arg1 , arg2 , arg3 , ...]

  //roep de oorspronkelijke .log functie aan
  console.savedlog(`%c${label}`, css, ...args);// SPREAD
  // ...args *spreid* alle args uit als losse functie parameters
};

console.log(["Alexander", "Friso", "Constatijn"]);
console.log("Prinsen:", ["Alexander", "Friso", "Constatijn"]);
```

### uitvoer in de console:

![](https://i.imgur.com/HAH9NrE.png)

### Meer console goodies:

RTFM: https://developer.mozilla.org/en-US/docs/Web/API/console#Usage


# Voorbeeld in een (groot) project

Waar veel ontwikkelaars de console gebruiken als *trace/check* optie; of anderen gebruik van de console zelfs afwijzen als *bad programming*.
Kun je de console ook gebruiken als **aanvulling** op je code.

Onderstaande _kerstboom_ is de console uitvoer van een online game waar ik aan werk.

Op deze manier kan ik de uitvoer van een script **meelezen in de console**

**tip:** gebruik het Filter veld om niet alle console regels te zien

**tip** Vergeet dat Filter veld niet leeg te maken... anders ben je 15 minuten op zoek in code waarom de console.log niets laat zien... duh

![](https://i.imgur.com/eXfqwVU.png)