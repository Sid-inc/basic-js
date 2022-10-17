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

  for(let i = 0; i < str.length; i++) {
    let counter = 1;
    let sym = '';
    for (let j = i + 1; j <= str.length; j++) {
      if (str[i] === str[j]) {
        counter++;          
      } else {
          if(counter > 1) {
            sym += counter + str[i];
            result += sym;
          } else {
            result += str[i];
          }
          sym = '';
          counter = 1;
          i = j;
      }
    }
  } 
  return result;
}

module.exports = {
  encodeLine
};
