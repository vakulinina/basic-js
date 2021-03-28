const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach(elem => {
      let depth = 1;
      if (Array.isArray(elem)) {
        depth += this.calculateDepth(elem);
        maxDepth = Math.max(maxDepth, depth);
      };
    });
    return maxDepth;
  }
};
