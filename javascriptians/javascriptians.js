/* Display 1=Bronze , 2=Zilver, 3=Gold  ranked Javascriptians 

let testMembers = ["Alexia,3", "Amalia,2", "Ariane"];
Of: { name:"Alexia" , rank:3 }

data model HTML array: 
[
  0: "<h1>Javascriptians</h1>" ,
  1: [ 
     0: "Rank Bronze" , 
     1: "<DIV>Ariane</DIV" ,  (push)
    ] ,
  2: [ 
     0: "Rank Zilver" , 
     1: "<DIV>Amalia</DIV" ,  (push)
    ] ,
  3: [ 
     0: "Rank Gold" , 
     1: "<DIV>Alexia</DIV" ,  (push)
    ] ,
]
*/
// FUNCTIONS IN een HTML Object, alles netjes bijelkaar, en door altijd HTML.tag() te schrijven is de code leesbaarder
const HTML = {
  f: (x) => x + 1,
  tag: (tag, content) => `<${tag}>${content}</${tag}>`,
  membertag: ({ content }) => HTML.tag("DIV", content),
};

const rankArray = (rank) => new Array(HTML.tag("H2", `Rank ${rank}`));
// return ["<H2>Rank Bronze</H2>"]
// wordt later: ["<H2>Rank Bronze</H2>", "<DIV>Lydia</DIV>", ...]

function addMember(str /* eg. "Lydia,1" */) {

  const [name, rank = 1] = str.split(","); // destructure ["Lydia",1] naar const met zelf te geven naam, rank krijg een default waarde

  const html = HTML.membertag({ content: name });
  programData.output[rank].push(html);
}

// PROGRAM
let testMembers = ["Alexia Test,3", "Amalia Test,2", "Ariane Test"];// Ariane default to 1 in addMember functie
// testMembers = [];
let ranks = ["Bronze", "Zilver", "Gold"].map(rankArray); // (rank) => rankArray(rank)

const programData = {
  output: [HTML.tag("H1", "Javascriptians"), ...ranks],
  members: ["Lydia,1", "Arnold,1","Gregor,1", ...testMembers], // ... is: spread operator
};
console.log("programData:", programData);

programData.members.forEach(addMember); // forEach((str) => addMember(str)) hoeven we niet te schrijven

// ["<H1>Javascriptians</H1>" , [ "Rank Bronze" , "Lydia" .. ] , [ "Rank Zilver" , "JS#2" .. ] ]

const html = programData.output.flat().join("");

console.log("html:", html);

document.querySelector("DIV").innerHTML = html;


