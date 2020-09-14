# De Console

`console.log()` is waarschijnlijk de meest gebruikte functie.

Maar bijna niemand leest de documentatie: https://developer.mozilla.org/en-US/docs/Web/API/console#Usage

Als de eerste parameter een **%c** markering bevat, dan is de **2e** parameter CSS voor de **1e** parameter:

```javascript
console.log(`%c Hello World `, "background:green;color:yellow;font-size:20px");
```

![](https://i.imgur.com/RK0LiK0.png)

## De eerste functie in elk nieuw project


```javascript
console.savedlog = console.log;
console.log = (...args) => {
  // local helper functions
  const isString = (x) => typeof x === "string";
  const isNumber = (x) => typeof x === "number";
  const isFunction = (x) => typeof x === "function";

  //const args =[ par1 , par2 , par3 , ....];

  let label = "";
  const css = "background:green;color:yellow";

  if (isString(args[0])) label = args.shift();
  // args = [ par2 , par3 , ....]
  // args = [ par1 , par2 , par3 , ...]

  console.savedlog(`%c${label}`, css, ...args);
};

console.log(["Alexander", "Friso", "Constatijn"]);
console.log("Prinsen:", ["Alexander", "Friso", "Constatijn"]);
```

![](https://i.imgur.com/HAH9NrE.png)