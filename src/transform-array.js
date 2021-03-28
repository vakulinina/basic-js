const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Error');

  const controls = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];

  return arr.reduce((acc, current, index) => {
    if (controls.includes(current)) {
      return acc;
    }
    if (arr[index - 1] === '--discard-next') {
      return acc;
    }
    if (arr[index + 1] === '--double-prev') {
      acc.push(current);
    }
    if (arr[index - 1] === '--double-next') {
      acc.push(current, current);
    } else {
      acc.push(current);
    }
    if (arr[index + 1] === '--discard-prev') {
      acc.splice(acc.length - 1, 1)
    }
    return acc;
  }, [])
}
