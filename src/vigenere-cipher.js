const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(input, keyword) {
    if (!input || !keyword) throw new Error();
    let result = '';
    let count = 0;
    input = input.toUpperCase();
    keyword = keyword.toUpperCase();
    for (let i = 0; i < input.length; i++) {
      if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
        result += String.fromCharCode((((input.charCodeAt(i) - 65) + (keyword.charCodeAt(count % keyword.length) - 65)) % 26) + 65);
        count++;
      } else {
        result += input[i];
      }
    }
    if (!this.direction) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(input, keyword) {
    if (!input || !keyword) throw new Error();
    let result = '';
    let count = 0;
    input = input.toUpperCase();
    keyword = keyword.toUpperCase();
    for (let i = 0; i < input.length; i++) {
      if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
        result += String.fromCharCode((input.charCodeAt(i) + 26 - keyword.charCodeAt(count % keyword.length)) % 26 + 65);
        count++;
      } else {
        result += input[i];
      }
    }
    if (!this.direction) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
