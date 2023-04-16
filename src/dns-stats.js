const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 */
function getDNSStats(domains) {
  let result = {};

  domains.forEach(domain => {
    let parts = domain.split('.').reverse();
    for (let i = 0; i < parts.length; i++) {
      addDns(result, '.' + parts.slice(0, i + 1).join('.'));
    }
  });

  return result;
}

function addDns(dnsNames, name) {
  if(dnsNames[name]){
    dnsNames[name] += 1; 
  } else {
    dnsNames[name] = 1;
  }
}

module.exports = {
  getDNSStats
};
