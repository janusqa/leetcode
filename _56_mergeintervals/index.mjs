/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function merge(intervals) {
    const mergedIntervals = [];
    intervals.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });

    for (let interval of intervals) {
        if (mergedIntervals.length === 0) mergedIntervals.push(interval);
        else {
            if (
                intersect(interval, mergedIntervals[mergedIntervals.length - 1])
            ) {
                mergedIntervals[mergedIntervals.length - 1][0] = Math.min(
                    mergedIntervals[mergedIntervals.length - 1][0],
                    interval[0]
                );
                mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
                    mergedIntervals[mergedIntervals.length - 1][1],
                    interval[1]
                );
            } else mergedIntervals.push(interval);
        }
    }

    return mergedIntervals;
};

const intersect = function intersect(ai, bi) {
    /***
	if any axis a of cuboid ai does not fall between
	the min and max bounds of axis a of cuboid bi, then
	cuboids ai and bi do not intersect.
	***/
    if (ai[0] > bi[1] || bi[0] > ai[1]) return false;
    return true;
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
);
console.log(
    merge([
        [1, 4],
        [4, 5],
    ])
);
console.log(
    merge([
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [1, 10],
    ])
);
