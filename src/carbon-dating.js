const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity || !Number(sampleActivity) || Number(sampleActivity) < 0) {
    return false;
  }
  let numSampleActivity = Number(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / numSampleActivity) / k;
  return t > 0 ? Math.ceil(t) : false;
};
