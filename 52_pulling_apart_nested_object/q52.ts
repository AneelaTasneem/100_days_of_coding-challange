// Nested object representing skills of a programmer:

let programmerSkills = {
  languages: ["Java", "Typescript", "python"],
  tools: ["Visual Studio Code", "GitHub", "Atom"],
  frameworks: ["React", "Django", "Angular"],
};

// // Getting three specific skills:

let languageSkill = programmerSkills.languages[2]; //python
let toolSkill = programmerSkills.tools[0]; //Visual Stodio Code
let frameworkSkill = programmerSkills.frameworks[1]; //Django

//Display the skills:
console.log(`Language Skills : ${languageSkill}`);
console.log(`Tool Skills : ${toolSkill}`);
console.log(`Framework Skills: ${frameworkSkill}`);
