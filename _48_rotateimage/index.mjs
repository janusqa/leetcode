/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    const n = matrix.length;
    let lbound = 0;
    let ubound = n - 1;

    for (let row = lbound; row < ubound; row++) {
        for (let col = lbound; col < ubound; col++) {
            let rr = row;
            let cc = col;
            let temp = matrix[rr][cc];
            for (let i = 0; i < 4; i++) {
                [matrix[cc][n - (rr + 1)], temp] = [
                    temp,
                    matrix[cc][n - (rr + 1)],
                ];
                [rr, cc] = [cc, n - (rr + 1)];
            }
        }
        lbound += 1;
        ubound -= 1;
    }

    for (let row of matrix) {
        console.log(row);
    }
};

rotate([[1]]);

rotate([
    [1, 2],
    [4, 5],
]);

rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
]);
