const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let currentCharacter;
  let occurenses = 0;

  for (let i = 0; i < str.length; i++) {
    if(currentCharacter != str[i])
    {
      if(occurenses && occurenses > 1){
        result+= occurenses;
      }
      currentCharacter =  str[i];
      if(i){
        result += str[i-1];
      }
      occurenses = 1;
    } else {
      occurenses++;
    }
  }

  if(occurenses) {
    if(occurenses > 1) {
      result += occurenses;
    }
    result += str[str.length -1];
  }

  return result;
}

module.exports = {
  encodeLine
};
