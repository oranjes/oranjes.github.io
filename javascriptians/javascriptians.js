/* Display 1=Bronze , 2=Zilver, 3=Gold  ranked Javascriptians */
// FUNCTIONS
const HTML = {
  tag: (tag, content) => `<${tag}>${content}</${tag}>`,
  "member-tag": ({ content }) => HTML.tag("DIV", content),
};

const rankArray = (rank) => new Array(HTML.tag("H2", `Rank ${rank}`));
// return ["<H2>Rank Bronze</H2>"]
// wordt later: ["<H2>Rank Bronze</H2>", "<DIV class=".member">Lydia</DIV>", ...]

function addMember(str /* eg. "Lydia,1" */) {
  const [name, rank = 1] = str.split(","); // 'destructure constants from:' [ "Lydia" , "1" ]
  const html = HTML["member-tag"]({ content: name });
  programData.output[rank].push(html);
}

// PROGRAM
let testMembers = ["Alexia,3", "Amalia,2", "Ariane"];
// testMembers = [];
let ranks = ["Bronze", "Zilver", "Gold"].map(rankArray); // (rank) => rankArray(rank)

const programData = {
  output: [HTML.tag("H1", "Javascriptians"), ...ranks],
  members: ["Lydia,1", "Arnold,1", ...testMembers], // ... is: spread operator
};
console.log("programData:", programData);
programData.members.forEach(addMember); // (str) => addMember(str)

// delete programData.members;
// console.log("programData:", programData);

// ["<H1>Javascriptians</H1>" , [ "Level 1" , "Lydia" .. ] , [ "Level 2" , "JS#2" .. ] ]
const html = programData.output.flat().join("");
console.log("html:", html);
document.querySelector("DIV").innerHTML = html;

/**
 * Separate parameters versus one Object
 *
 */

//hmm.. okay.. 2 parameters
const rankArray1 = (rank) => new Array(HTML.tag("H2", `Rank ${rank}`)); // ["Bronze", "Lydia", ...]

//maybe better .. 1 parameter Object
const rankArray2 = (rank) =>
  new Array(
    HTML.tag({
      tag: "H2",
      content: `Rank ${rank}`,
      //className: "rank",
      //id:"unique ID"
    })
  );
