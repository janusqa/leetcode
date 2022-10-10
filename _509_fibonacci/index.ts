const fib = (n: number, memo: { [key: string]: number } = {}): number => {
    if (memo[`${n}`]) return memo[`${n}`];
    if (n < 2) return n;

    const result = fib(n - 2) + fib(n - 1);

    memo[`${n}`] = result;
    return result;
};
