const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  direct = true;

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    if(!this.direct) {
      message = message.split('').reverse().join('');
    }

    let  result = [];
    
    for (let i = 0, keyIndex = 0; i < message.length; i++) {
      if(this.alphabet.includes(message[i].toUpperCase())) {
        const alphabetIndex = (this.alphabet.indexOf(message[i].toUpperCase()) + 
                               this.alphabet.indexOf(key[keyIndex % key.length].toUpperCase())) % this.alphabet.length;

        result.push(this.alphabet[alphabetIndex]);

        keyIndex++;
      } else {
        result.push(message[i]);
      }
    }

    return result.join('');
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    
    if(!this.direct) {
      encryptedMessage = encryptedMessage.split('').reverse().join('');
    }

    let  result = [];
    
    for (let i = 0, keyIndex = 0; i < encryptedMessage.length; i++) {
      if(this.alphabet.includes(encryptedMessage[i])) {
        const alphabetIndex = (this.alphabet.indexOf(encryptedMessage[i]) + 
                               this.alphabet.length -
                               this.alphabet.indexOf(key[keyIndex % key.length].toUpperCase())) % this.alphabet.length;

        result.push(this.alphabet[alphabetIndex]);

        keyIndex++;
      } else {
        result.push(encryptedMessage[i]);
      }
    }

    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
