const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if( typeof sampleActivity != 'string' || isNaN(sample) || sample <= 0 || sample > MODERN_ACTIVITY){
    return false;
  } else {
    return Math.ceil(Math.log2(MODERN_ACTIVITY / sample) * HALF_LIFE_PERIOD);
  }
}

module.exports = {
  dateSample
};
