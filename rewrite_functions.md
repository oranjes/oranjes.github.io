# Functies herkennen en herschrijven

![](https://images-na.ssl-images-amazon.com/images/I/51VZOdAoo-L._AC_.jpg)

```javascript
//Helpersfunctie bovenaan
const haalElement = (id) => document.getElementById(id);

const openMenu = () => {
  haalElement("navigation-toggle").style.visibility = "visible";
};

const closeMenu = () => {
  haalElement("navigation-toggle").style.visibility = "hidden";
};
```

<details><summary>Doublures in functies spotten</summary>
<p>

```javascript
const __OPENMENU__ = () => {
  haalElement("navigation-toggle").style.visibility = "__VISIBLE__";
};

const __CLOSEMENU__ = () => {
  haalElement("navigation-toggle").style.visibility = "__HIDDEN__";
};
```

</p>
</details>

<details><summary>nieuwe Functie bedenken</summary>
<p>

1. **opencloseMenu( "visible/hidden ")**

2. **toggleMenu( state )**

</p>
</details>

<details><summary>nieuwe Functie maken</summary>
<p>

```javascript
const toggleMenu = (state = "hidden") => {
  haalElement("navigation-toggle").style.visibility = state;
};
```

</p>
</details>

<hr>
<hr>

# Color that body!

```javascript
const openRed = () => (document.body.style.backgroundColor = "#e60000");
const openBlue = () => (document.body.style.backgroundColor = "#00b8e6");
const openGreen = () => (document.body.style.backgroundColor = "#2eb82e");
const openYellow = () => (document.body.style.backgroundColor = "#ffff00");
const openBrown = () => (document.body.style.backgroundColor = "#332600");
```

<details><summary>nieuwe Functie maken</summary>
<p>

```javascript
const colorBody = (color = "white") => (document.body.style.backgroundColor = color);

const openRed = () => colorBody("#e60000");
const openBlue = () => colorBody("#00b8e6");
const openGreen = () => colorBody("#2eb82e");
const openYellow = () => colorBody("#ffff00");
const openBrown = () => colorBody("#332600");
```

</p>
</details>

<hr>
<hr>

# Click crazy

```javascript
haalElement("nav-menu").addEventListener("click", openMenu);
haalElement("nav-toggle-red").addEventListener("click", openRed);
haalElement("nav-toggle-blue").addEventListener("click", openBlue);
haalElement("nav-toggle-green").addEventListener("click", openGreen);
haalElement("nav-toggle-yellow").addEventListener("click", openYellow);
haalElement("nav-toggle-brown").addEventListener("click", openBrown);
```

<details><summary>nieuwe Functie maken</summary>
<p>

```javascript
const addClick(id,colorFunc) => haalElement(id).addEventListener("click",colorFunc);
addClick("nav-menu",openMenu );
addClick("nav-toggle-red", openRed);
addClick("nav-toggle-blue", openBlue);
addClick("nav-toggle-green", openGreen);
addClick("nav-toggle-yellow", openYellow);
addClick("nav-toggle-brown", openBrown);
```

</p>
</details>

<hr>
<hr>

# Alle code tot nu toe:

```javascript
//Helpersfunctie bovenaan
const haalElement = (id) => document.getElementById(id);
const toggleMenu = (state = "hidden") => haalElement("navigation-toggle").style.visibility = state;
const addClick(id,colorFunc) => haalElement(id).addEventListener("click",colorFunc);
const openRed = () => colorBody("#e60000");
const openBlue = () => colorBody("#00b8e6");
const openGreen = () => colorBody("#2eb82e");
const openYellow = () => colorBody("#ffff00");
const openBrown = () => colorBody("#332600");

addClick("nav-menu",openMenu );
addClick("nav-toggle-red", openRed);
addClick("nav-toggle-blue", openBlue);
addClick("nav-toggle-green", openGreen);
addClick("nav-toggle-yellow", openYellow);
addClick("nav-toggle-brown", openBrown);
```

<details><summary>nieuwe Functie maken</summary>
<p>

```javascript
const openRed = () => colorBody("#e60000");
addClick("nav-toggle-red", openRed);

const f1 = () => x;
addClick("nav-toggle-red", f1);
```

</p>
</details>

<details><summary>nieuwe Functie maken</summary>
<p>

```javascript
const openRed = () => colorBody("#e60000");
addClick("nav-toggle-red", openRed);

//const f1 = () => x;
addClick("nav-toggle-red", colorBody("#60000"));
```

</p>
</details>

# Alle code tot nu toe:

```javascript
//Helpersfunctie bovenaan
const getElementById = (id) => {
    console.log(`getElementById: ${id}`);
    return document.getElementById(id);
}
const toggleMenu = (state = "hidden") => getElementById("navigation-toggle").style.visibility = state;
const addClick(id,colorFunc) => getElementById(id).addEventListener("click",colorFunc);

addClick("nav-menu",openMenu );
addClick("nav-toggle-red", ()=> colorBody("red"));
addClick("nav-toggle-blue", ()=>colorBody("blue"));
addClick("nav-toggle-green", ()=>colorBody("green"));
addClick("nav-toggle-yellow", ()=>colorBody("yellow"));
addClick("nav-toggle-brown", ()=>colorBody("brown"));

const addColorClick = ( id, kleur   ) => addClick(   id , ()=>colorBody(kleur)    );
addColorClick("nav-toggle-purple", "purple");
addColorClick("nav-toggle-hotpink", "hotpink");
addColorClick("nav-toggle-lightgreen", "lightgreen");

["red","blue","hotpink"]

```

<details><summary>nieuwe Functie maken</summary>
<p>

```javascript
const setElementColorOnClick(id)= addClick(id, colorBody(id.split("_")[3]));

setElementColorOnClick("nav-toggle-red")
setElementColorOnClick("nav-toggle-blue");
setElementColorOnClick("nav-toggle-green");
setElementColorOnClick("nav-toggle-yellow");
setElementColorOnClick("nav-toggle-brown");
```

</p>
</details>

# Alle code tot nu toe:

```javascript
//Helpersfunctie bovenaan
const getElementById = (id) => {
    console.log(`getElementById: ${id}`);
    return document.getElementById(id);
}
const toggleMenu = (state = "hidden") => getElementById("navigation-toggle").style.visibility = state;
const addClick(id,colorFunc) => getElementById(id).addEventListener("click",colorFunc);

const setElementColorOnClick(id)= addClick(id, colorBody(id.split("_")[3]))

addClick("nav-menu",openMenu );

let colors=["red","blue","green","yellow","brown"];
//nodig: Array en String kennis

setElementColorOnClick("nav-toggle-red");
setElementColorOnClick("nav-toggle-blue");
setElementColorOnClick("nav-toggle-green");
setElementColorOnClick("nav-toggle-yellow");
setElementColorOnClick("nav-toggle-brown");
```

# Kan het nog kleiner

```javascript
//Helpersfunctie bovenaan
const getElementById = (id) => {
    console.log(`getElementById: ${id}`);
    return document.getElementById(id);
}
const toggleMenu = (state = "hidden") => getElementById("navigation-toggle").style.visibility = state;
const addClick(id,colorFunc) => getElementById(id).addEventListener("click",colorFunc);

const setElementColorOnClick(id)= addClick(id, colorBody(id.split("_")[3]))

addClick("nav-menu",openMenu );

let colors=["red","blue","green","yellow","brown"];
//nodig: Array en String kennis

//setElementColorOnClick("nav-toggle-red");

colors.forEach(color=>setElementColorOnClick("nav-toggle-"+color));

```
