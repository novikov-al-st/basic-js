const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || position > this.chain.length || position < 1) {
      this.clearChain();
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.length == 0 ? '' : '( ' + this.chain.map(e => e===null ? "null" : e).join(' )~~( ') + ' )';
    this.clearChain();
    return result;
  },
  clearChain(){
    this.chain = [];
  }
};

module.exports = {
  chainMaker
};
