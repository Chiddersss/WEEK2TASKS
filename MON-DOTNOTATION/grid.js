const grid = [  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < grid.length; i++) {
  let row = "";
  for (let j = 0; j < grid[i].length; j++) {
    row += grid[i][j] + " ";
  }
  console.log(row);
}
