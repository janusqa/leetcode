/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let answer = '';
    if (i % 3 == 0) {
      answer = `${answer}Fizz`;
    }
    if (i % 5 == 0) {
      answer = `${answer}Buzz`;
    }
    if (answer.length == 0) {
      answer = `${answer}${i}`;
    }
    result.push(answer);
  }
  return result;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
