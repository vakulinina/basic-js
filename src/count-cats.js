const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numOfCats = 0;
  matrix.flat(1).forEach(element => {
    if (element === '^^') {
      numOfCats++
    }
  })
  return numOfCats;
};
