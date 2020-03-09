"Use strict";

import users from "./users.js";

const getSortedUniqueSkills = users => {
  let allSkills = [];
  users.map(user => {
    allSkills.push(...user.skills);
  });

  const unicSkills = allSkills.reduce((acc, skill) => {
    return {
      ...acc,
      [skill]: acc.hasOwnProperty(skill) ? (acc[skill] += 1) : 1
    };
  }, {});

  const sortedSkills = Object.keys(unicSkills).sort();

  return sortedSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
