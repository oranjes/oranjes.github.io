//oranjes
const a = "alexander";
const b = "beatrix";
const prinsen = ["alexander", "friso", "constatijn"];

const erfgenaam = (kinderen) => kinderen[0];

const kleinkinderen = [
  /* 0 alexander */ [/* 0,0 */ "amalia", /* 0,1 */ "alexia", /* 0,2 */ "ariane"],
  /* 1 friso     */ [/* 1,0 */ "luana", /* 1,1 */ "zaria"],
  /* 2 constatijn*/ [/* 2,0 */ "eloise", /* 2,1 */ "clas-casimir", /* 2,2 */ "leonore"],
];

const kleinkind = (ouder, naam) => {
  const prinsIdx = (x) => prinsen.indexOf(x);
  const idx = prinsIdx(ouder);
  const addPrinsKind = (x, y) => kleinkinderen[x].push(y);
  const isArrayIdx = (x) => x > -1;
  if (isArrayIdx(idx)) {
    addPrinsKind(idx, naam);
  }
  return naam;
};
const kleinkind2 = (ouder, naam) => {
  const prinsIdx = prinsen.indexOf(ouder);
  if (prinsIdx) {
    kleinkinderen[prinsIdx].push(y);
  }
};

kleinkind(a, "willy");

console.log(b);

const fx = (x) => x; // use function?
// of
const fr = (x) => {
  return x;
};
// oude notatie:
function f(x) {
  return x;
}

const f1 = (x) => x + 1;
const f2 = (x) => f1(x);
const f3 = f1;

// f2(4) is gelijk aan f3(4)
const f4 = (x) => f1;
// console.log( f4(9)(7) )\
// A: 8
// B: (x) => x + 1

const twice = (x) => x * 2;

const luckyTV = (x) => (a = "willy");

// f(x) = x ^ 2;
const power = (x) => x ** 2;
const power2 = (x) => Math.pow(x, 2);

const plus1 = (x) => x + 1;
console.log(plus1(a));
const plus2 = (x) => plus1(plus1(x));
console.log(plus2(a));

const sum = (x, y) => x + y;
const E = (m, C) => m * power(C);

//Pythagoras a^2 + b^2 = c^2
//const c =(a,b) => power(a) + power(b) = power(c);
const c = (a, b) => Math.sqrt(power(a) + power(b));

//const power = (x, p = 2) => x ** p;

//const circleArea = (r = Math.PI * power(r));

const sum1 = (x, y) => {
  if (y) {
    console.error("2e parameter ontbreekt");
    return NaN; // Not a Number
  } else {
    return x + y;
  }
};
const sum2 = (x, y = console.error("2e parameter ontbreekt")) => x + y;
console.log(2 + undefined);

const tagged = (tag, content) => `<${tag}>${content}</${tag}>`;
const bold = (x) => tagged("B", x);
const bought = (item) => tagged("LI", item);
const buyDonuts = (amount = 2) => bought(`${amount} donuts`);
const buyCoffee = (blend = "strong") => bought(`${blend} coffee`);
const buyPaper = (name = "NY Post") => bought(name);

const everyMorning = () => [bold("Bought:"), "<UL>", buyDonuts(), buyCoffee(), buyPaper(), "</UL>"];
console.log(everyMorning());

const upperCase = (x) => x.toUpperCase();
const firstLetter = (x) => x[0];
const remainingLetters = (x) => x.slice(1);
const capitalize = (x) => upperCase(firstLetter(x)) + remainingLetters(x);

const splitWords = (x) => x.split(" ");
const joinWords = (x) => x.join(" ");

const capitalizeSentence = (x) => joinWords(splitWords(x).map((word) => capitalize(word)));
//wiskunde: y + x = x + 1
// dan: y = 1
// f2(x) => f1(x)
// f1(x)
const capitalizedWordsArray = (x) => joinWords(splitWords(x).map(capitalize));

// voorwaarden, checks en controles in global Scope
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

const isString = (x) => typeof x === "string";
const isNumber = (x) => typeof x === "number";
const isFunction = (x) => typeof x === "function";

// Alexander van Oranje-Nassau
console.log(sum(a, b));
console.log(capitalize(a));
console.log(capitalizeSentence("alex & max"));

// functions change the outside world
const colorBody = (color) => (document.body.style.background = color);
const addBodyClass = (className) => document.body.classList.add(className);

//<div id=alexander>Alexander van Oranje</div>
const targetClicked = (event) => console.log("You clicked!", event.target.id);
const addClick = (element, clickedFunc) => element.addEventlistener("click", clickedFunc);
const alex = document.getElementById("alexander");

//remove
//addClick( alex , targetClicked   );
//addClick( alex , targetClicked() );

const maxima = document.getElementById("maxima");

//const prinsen = document.querySelector("#beatrix > div");
// ['DIV#alexander','DIV#friso','DIV#constantijn']

prinsen.forEach((prinsDIV) => addClick(prinsDIV, targetClicked));
prinsen.forEach(addClick(targetClicked));

const addClickPrince = (prinsDIV) => addClick(prinsDIV, targetClicked);

prinsen.forEach(addClickPrince);
prinsen.forEach((x) => addClickPrince(x));

prinsen.forEach(targetClicked(addClickPrince));

//A:

// default values

clickedFunc = console.log("This function needs a function as second parameter");

// functions returning functions
