const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];
  let result = arr.slice(0);
  for (let i = 0; i < result.length; i++) {
    if (typeof result[i] === 'string') {
      if (result[i] === '--double-next') {
        if(result[i + 1] && !commands.includes(result[i + 1])) {
          result.splice(i + 1, 0, result[i + 1]);
        }
      }
      if (result[i] === '--discard-next') {
        if (result[i + 1] && !commands.includes(result[i + 1])) {
          result.splice(i + 1, 1);
        }
      }
      if (result[i] === '--double-prev') {
        if(result[i - 1] && !commands.includes(result[i - 1])) {
          result.splice(i - 1, 0, result[i - 1]);
          i++;
        }
      }
      if (result[i] === '--discard-prev') {
        if(result[i - 1] && !commands.includes(result[i - 1])) {
          result.splice(i - 1, 1);
        }
      }
    }
  }
  
  let ret = [];
  for (let j = 0; j < result.length; j++) {
    if (!commands.includes(result[j])) {
      ret.push(result[j]);
    } 
  }
  return ret;
}

module.exports = {
  transform
};
