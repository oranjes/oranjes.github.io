# Functions

## Terug naar de wiskunde les

![](https://www.basic-mathematics.com/images/graph-of-linear-parent-function.jpg)
``
``

Deze wiskundige functie wordt in JavaScript geschreven als:

1 -
``
    const f = (x) => x;
``

2 -
``
    const f => (x) = x;
``

<details><summary><b>Antwoord</b></summary>
<p>

#### Antwoord: 1

const fr = (x) => {
  return x;
};
// oude notatie:
function f(x) {
  return x;
}

</p>
</details>

<hr>

## displayEvenNumbers

``
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
``

### Arguments


### ...args

``
const sum = (....args) => args.reduce( 
                                       (_sum,_val) => _sum + _val , 
                                       0 // begin waarde 
                                    );
``

