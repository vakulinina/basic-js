const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secondsForTurn = 3600 / turnsSpeed;
  const turns = 2 ** disksNumber - 1;
  return {
    turns: turns,
    seconds: Math.floor(turns * secondsForTurn)
  };
}
