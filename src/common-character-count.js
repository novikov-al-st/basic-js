const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let firstStringCharactersMap = new Map();
  let secondStringCharactersMap = new Map();

  [...s1].forEach(v => { if(!firstStringCharactersMap.get(v)) firstStringCharactersMap.set(v,countCharacters(v,s1)) });
  [...s2].forEach(v => { if(!secondStringCharactersMap.get(v)) secondStringCharactersMap.set(v,countCharacters(v,s2)) });

  firstStringCharactersMap.forEach((value, key) => {
    let entry = secondStringCharactersMap.get(key);
    if(entry){
      result += Math.min(value, entry);
    }
  });

  return result;
}

function countCharacters(char, string) {
  return string.split('').reduce((a, ch) => ch === char ? ++a: a, 0)
}

getCommonCharacterCount('aabcc', 'adcaa')

module.exports = {
  getCommonCharacterCount
};
