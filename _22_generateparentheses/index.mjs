/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = function (n) {
  return generate_combinations(n, 0, 0);
  //return generate_combinations_1(n);
};

const generate_combinations = function (n, lb_used, rb_used) {
  if (n === lb_used && lb_used === rb_used) return [''];

  const combinations = [];

  if (lb_used < n) {
    const combination = generate_combinations(n, lb_used + 1, rb_used);
    const combinationWays = combination.map((item) => `(${item}`);
    combinations.push(...combinationWays);
  }

  if (rb_used < lb_used) {
    const combination = generate_combinations(n, lb_used, rb_used + 1);
    const combinationWays = combination.map((item) => `)${item}`);
    combinations.push(...combinationWays);
  }

  return combinations;
};

const generate_combinations_1 = function (n) {
  if (n === 1) return ['()'];

  const result = [];
  const combinations = generateParenthesis(n - 1);
  for (let i = 0; i < combinations.length; ++i) {
    let lb = 0;
    let rb = 1;
    let candidate = `()${combinations[i]}`;
    if (!result.includes(candidate)) result.push(candidate);
    const candidate_arr = candidate.split('');
    while (lb < candidate_arr.length - 2) {
      [candidate_arr[rb + 1], candidate_arr[rb]] = [
        candidate_arr[rb],
        candidate_arr[rb + 1],
      ];
      rb++;
      [candidate_arr[lb + 1], candidate_arr[lb]] = [
        candidate_arr[lb],
        candidate_arr[lb + 1],
      ];
      lb++;
      candidate = candidate_arr.join('');
      if (!result.includes(candidate)) result.push(candidate);
    }
  }

  return result;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
console.log(generateParenthesis(5));
console.log(generateParenthesis(6));
console.log(generateParenthesis(7));
console.log(generateParenthesis(8));
