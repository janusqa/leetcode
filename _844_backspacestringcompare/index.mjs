/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const max = function max(a, b) {
  if (a > b) return a;
  else return b;
};

const backspaceCompare = function (s, t) {
  const ss = [];
  const ts = [];

  for (let i = 0; i < max(s.length, t.length); i++) {
    if (i < s.length) {
      if (s[i] !== '#') ss.push(s[i]);
      else ss.pop();
    }
    if (i < t.length) {
      if (t[i] !== '#') ts.push(t[i]);
      else ts.pop();
    }
  }
  return ss.toString() === ts.toString();
};

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a#c', 'b'));
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));
