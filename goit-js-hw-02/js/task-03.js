"Use strict";

const findLongestWord = function(string) {
  let longest = " ";

  const array = string.split(" ");

  for (item of array) {
    if (item.length > longest.length) {
      longest = item;
    }
  }

  return longest;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
