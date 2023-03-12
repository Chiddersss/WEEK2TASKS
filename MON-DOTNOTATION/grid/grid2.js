let board = [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
];

// Printing each row of the board
for (let row = 0; row < board[0].length; row++) {
  console.log('|   '.repeat(board.length + 1));

  let row_with_items = '';
  for (let col = 0; col < board.length; col++) {
    row_with_items += ('| ' + board[col][row]) + ' ';
  }
  console.log(row_with_items + '|');

  console.log('|   '.repeat(board.length + 1));
  
  console.log('+---'.repeat(board.length) + '+');
}


let space1 = "X";
let space2 = "O";
let space3 = "X";
let space4 = "X";
let space5 = "0";
let space6 = "0";
let space7 = "X";

console.log(board.push(space1))