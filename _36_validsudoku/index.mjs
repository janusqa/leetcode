/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function isValidSudoku(board) {
  const track = {
    columns: [...Array(board.length)].map((v) => new Set()),
    rows: [...Array(board.length)].map((v) => new Set()),
    boxes: [...Array(board.length)].map((v) => new Set()),
  };

  // Switched from objects/dicts to Sets above
  // const track = {
  //   columns: [...Array(board.length)].map((v) => (v = {})),
  //   rows: [...Array(board.length)].map((v) => (v = {})),
  //   boxes: [...Array(board.length)].map((v) => (v = {})),
  // };

  return check_validity(board, 0, 0, track);
};

const check_validity = function check_validity(
  board,
  row,
  column,
  track,
  memo = {}
) {
  const key = `${row},${column}`;
  if (key in memo) return memo[key];

  const row_look = [0, 0, -1, 1, -1, -1, 1, 1];
  const col_look = [-1, 1, 0, 0, -1, 1, -1, 1];
  const row_unit = 3;
  const col_unit = 3;

  // check the validity of this play by
  // checking if this number already exists
  // in current row/column/box
  let is_valid = true;
  if (board[row][column] !== '.') {
    const square_value = `${board[row][column]}`;
    const box_row = Math.floor(row / row_unit);
    const box_column = Math.floor(column / col_unit);
    const box_index = Math.floor(row_unit * box_row + box_column);
    if (track.columns[column].has(square_value)) is_valid = false;
    else track.columns[column].add(square_value);
    if (track.rows[row].has(square_value)) is_valid = false;
    else track.rows[row].add(square_value);
    if (track.boxes[box_index].has(square_value)) is_valid = false;
    else track.boxes[box_index].add(square_value);
  }
  memo[key] = is_valid;

  // Check neighbours for validity
  if (is_valid) {
    for (let direction = 0; direction < row_look.length; direction++) {
      const coord_row = row + row_look[direction];
      const coord_col = column + col_look[direction];
      if (
        0 <= coord_row &&
        coord_row < board.length &&
        0 <= coord_col &&
        coord_col < board[0].length
      ) {
        is_valid =
          is_valid && check_validity(board, coord_row, coord_col, track, memo);
      }
      if (!is_valid) break;
    }
  }

  console.log(track);
  return is_valid;
};

const board_1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const board_2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board_1));
// console.log(isValidSudoku(board_2));
