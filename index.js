const convert = (str, frombase, tobase) => {
  let range =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  let fromrange = range.slice(0, frombase);
  let torange = range.slice(0, tobase);
  let decvalue = str
    .split("")
    .reverse()
    .reduce(function (carry, digit, index) {
      if (fromrange.indexOf(digit) === -1) {
        return false;
      }
      return (carry += fromrange.indexOf(digit) * Math.pow(frombase, index));
    }, 0);
  let newvalue = "";
  while (decvalue > 0) {
    newvalue = torange[decvalue % tobase] + newvalue;
    decvalue = (decvalue - (decvalue % tobase)) / tobase;
  }
  return newvalue || "0";
};
convert("FF28A", 16, 23);
