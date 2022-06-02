import { PriorityQueue } from './PriorityQueue.mjs';
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function canJump(nums) {
    // return getJumpsR(0, nums);
    // return getJumpsD(nums);
    return getJumpsReverseNR(nums.length - 1, nums);
};

// One of the best tools in problem solving is
// always look at the problem in reverse
// NON -Recursion
const getJumpsReverseNR = function getJumpsReverseNR(goal, nums) {
    goal = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i < goal && goal <= i + nums[i]) goal = i;
    }
    return goal === 0;
};

// recursive algorithm attempt with memoization
const getJumpsR = function getJumpsR(curr, nums, memo = {}) {
    const key = `${curr}${nums[curr]}`;

    if (key in memo) return memo[key];
    if (curr === nums.length - 1) return true;

    for (let i = curr + 1; i <= curr + nums[curr]; i++) {
        const result = getJumpsR(i, nums, memo);
        if (result) return result;
    }

    memo[key] = false;
    return false;
};

//Dijkstra's Algorithm attempt
const getJumpsD = function getJumpsD(nums) {
    const visited = {};
    const destination = nums.length - 1;
    const pq = new PriorityQueue();
    pq.enqueue({ data: 0, priority: nums[0] });

    while (!pq.isEmpty()) {
        const current = pq.dequeue();
        if (!(`${current.data}${current.priority}` in visited)) {
            visited[`${current.data}${current.priority}`] = current.data;
            if (current.data === destination) return true;
            for (
                let i = current.data + 1;
                i <= current.data + current.priority;
                i++
            ) {
                pq.enqueue({ data: i, priority: nums[i] });
            }
        }
    }
    return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([1]));
console.log(canJump([2, 0]));
console.log(canJump([1, 0]));
console.log(canJump([2, 0, 0]));
