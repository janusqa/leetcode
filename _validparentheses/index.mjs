/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const brackets = {
    '[': ']',
    '(': ')',
    '{': '}',
  };

  const stack = [];

  for (const char of s) {
    if (!stack.length || char !== brackets[stack[stack.length - 1]])
      stack.push(char);
    else stack.pop();
  }

  return !stack.length;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
