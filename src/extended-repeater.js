const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  switch (str) {
    case null:
      str = 'null';
      break;
    case false:
      str = 'false';
      break;
    default:
      break;
  }
  
  switch (options.addition) {
    case null:
      options.addition = 'null';
      break;
    case false:
      options.addition = 'false';
      break;
    default:
      break;
  }
  
  if(!str) {
    return '';
  }

  return Array(options.repeatTimes).
              fill( str + 
                 repeater(options.addition ? options.addition : '', {
                    repeatTimes: options.additionRepeatTimes, 
                    separator: options.additionSeparator,
                    additionContext: true
                 })
         ).join( options.separator || (options.additionContext ? '|' : '+'));
}


module.exports = {
  repeater
};
