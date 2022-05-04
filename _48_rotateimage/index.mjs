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
            let temp = matrix[row][col];
            for (let i = 0; i < 4; i++) {
                const newRow = col;
                const newCol = n - (row + 1);
                [temp, matrix[newRow][newCol]] = [matrix[newRow][newCol], temp];
                row = newRow;
                col = newCol;
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
