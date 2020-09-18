# Datatypes

## Primitieven (1 waarde)

### Number

### String

### Boolean

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

### Object

Notatie: **key/value pair**

```javascript
const Oranjes = {
    "Alexander" : {
        "partner" : "Maxima",
        "kinderen" : ["Amalia", "Alexia","Ariane"]
    },
    "Friso":{
        "partner" : "Mabel",
        "kinderen" : ["Luana", "Zaria"]
    },
    "Constatijn":{
        "partner" : "Laurentien",
        "kinderen" : ["Eloise", "Claus-Casimir","Leonore"]
    }
}
```

```javascript
console.log( Oranjes.Alexander );
```

Geeft als output:

```javascript
{
    "partner" : "Maxima",
    "kinderen" : ["Amalia", "Alexia","Ariane"]
}
```

```javascript
console.log( Oranjes.Alexander.kinderen );
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
