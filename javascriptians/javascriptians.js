/* Display Bronze, Silver, Gold ranked Javascriptians */
// FUNCTIONS
const HTML = {
  tag: (tag, content, clss = "") => `<${tag} class="${clss}">${content}</${tag}>`,
  "DIV-tag": ({ content, clss }) => HTML.tag("DIV", content, clss),
};

const rankArray = (rank) => new Array(HTML.tag("H2", `Rank ${rank}`, "rank")); // ["Level 1", "Lydia", ...]

const addMember = (str /* eg. "Lydia,1" */) => {
  const [name, rank = 1] = str.split(","); // 'destructure constants from:' [ "Lydia" , "1" ]
  const html = HTML["DIV-tag"]({ content: name, clss: "member" });
  programData.output[rank].push(html);
};

// PROGRAM
let testMembers = ["Alexia,3", "Amalia,2", "Ariane"];
// testMembers = [];

const programData = {
  output: [HTML.tag("H1", "Javascriptians"), rankArray(1), rankArray(2), rankArray(3)],
  members: ["Lydia,1", "Arnold,1", ...testMembers], // ... is: spread operator
};

programData.members.forEach(addMember); // (str) => addMember(str)

// ["<H1>Javascriptians</H1>" , [ "Level 1" , "Lydia" .. ] , [ "Level 2" , "JS#2" .. ] ]
const html = programData.output.flat().join("");
console.log(html);
document.body.innerHTML = html;

/**
 * Separate parameters versus one Object
 *
 */

//hmm.. okay.. 3 parameters
const rankArray1 = (rank) => new Array(HTML.tag("H2", `Rank ${rank}`, "rank")); // ["Level 1", "Lydia", ...]

//maybe better .. 1 parameter Object
const rankArray2 = (rank) =>
  new Array(
    HTML.tag({
      tag: "H2",
      content: `Rank ${rank}`,
      clss: "rank",
    })
  );
