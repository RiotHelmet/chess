let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let sprite = new Image();

sprite.src = "sprite.png";

gridsize = 750 / 8;

ctx.font = "30px Arial";
ctx.textAlign = "center";

let board = [
  ["r", "p", 0, 0, 0, 0, "p", "r"],
  ["k", "p", 0, 0, 0, 0, "p", "k"],
  ["b", "p", 0, 0, 0, 0, "p", "b"],
  ["q", "p", 0, 0, 0, 0, "p", "q"],
  ["a", "p", 0, 0, 0, 0, "p", "a"],
  ["b", "p", 0, 0, 0, 0, "p", "b"],
  ["k", "p", 0, 0, 0, 0, "p", "k"],
  ["r", "p", 0, 0, 0, 0, "p", "r"],
];

function checkBoard() {
  console.log("");
}

function printCheckboard() {
  let i = 0;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (i % 2 === 0) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
        ctx.fill();
      } else {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
        ctx.fill();
      }
    }
  }
}

function printBoard(board) {
  let i = 0;
  printCheckboard();
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      ctx.strokeStyle = "black";
      ctx.fillStyle = "white";
      if (board[x][y] == "k") {
        ctx.fillStyle = "red";
      }
      ctx.beginPath();
      ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
      ctx.fill();
      ctx.stroke();
      if (board[x][y] != "0") {
        ctx.fillStyle = "black";
        ctx.fillText(
          board[x][y],
          gridsize * x + gridsize / 2,
          gridsize * y + gridsize / 2
        );
      }
    }
  }
}

printBoard(board);
