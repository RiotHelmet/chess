let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let sprite = new Image();
sprite.src = "/sprite.png";

mousePos = {
  x: 0,
  y: 0,
};

currentturn = "w";

gridsize = 750 / 8;
spriteSize = 426.5;

ctx.font = "30px Arial";
ctx.textAlign = "center";

let board = [
  ["br", "bp", 0, 0, 0, 0, "wp", "wr"],
  ["bk", "bp", 0, 0, 0, 0, "wp", "wk"],
  ["bb", "bp", 0, 0, 0, 0, "wp", "wb"],
  ["bq", "bp", 0, 0, 0, 0, "wp", "wq"],
  ["ba", "bp", 0, 0, 0, 0, "wp", "wa"],
  ["bb", "bp", 0, 0, 0, 0, "wp", "wb"],
  ["bk", "bp", 0, 0, 0, 0, "wp", "wk"],
  ["br", "bp", 0, 0, 0, 0, "wp", "wr"],
];

function checkBoard() {
  console.log("");
}

function printCheckboard() {
  let i = 1;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      ctx.fillStyle = "#5d3231";
      ctx.beginPath();
      ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
      ctx.fill();
      if (i % 2 == 0) {
        ctx.fillStyle = "#794839";
        ctx.beginPath();
        ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
        ctx.fill();
      }
      i++;
    }
    i++;
  }
}

function printBoard(board) {
  printCheckboard();
  {
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[x].length; y++) {
        ctx.strokeStyle = "black";

        ctx.beginPath();
        ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
        ctx.stroke();

        if (board[x][y][0] == "w") {
          color = 0;
        } else {
          color = 1;
        }

        let piece;

        switch (board[x][y][1]) {
          case "a":
            piece = 0;
            break;
          case "q":
            piece = 1;
            break;
          case "b":
            piece = 2;
            break;
          case "k":
            piece = 3;
            break;
          case "r":
            piece = 4;
            break;
          case "p":
            piece = 5;
            break;
        }

        ctx.drawImage(
          sprite,
          piece * spriteSize,
          color * spriteSize,
          spriteSize,
          spriteSize,
          gridsize * x,
          gridsize * y,
          gridsize,
          gridsize
        );
      }
    }
  }
}

printBoard(board);

function checkhover(mousePos) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (
        mousePos.x > gridsize * x &&
        mousePos.x < gridsize * x + gridsize &&
        mousePos.y > gridsize * y &&
        mousePos.y < gridsize * y + gridsize
      ) {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
        ctx.stroke();
        return { x: x, y: y };
      }
    }
  }
}

function getAvailableMoves(piecePos) {
  piece = board[piecePos.x][piecePos.y];

  if (piece[0] == "w") {
    dir = -1;
  } else {
    dir = 1;
  }

  switch (piece[1]) {
    case "a":
      return [[], []];
    case "q":
      piece = 1;
      break;
    case "b":
      piece = 2;
      break;
    case "k":
      piece = 3;
      break;
    case "r":
      piece = 4;
      break;
    case "p":
      if (piecePos.y == 1 || piecePos.y == 6) {
        return [
          [[piecePos.x], [piecePos.y + dir]],
          [[piecePos.x], [piecePos.y + dir + dir]],
        ];
      }
      return [[[piecePos.x], [piecePos.y + dir]]];
  }
}

function gameloop() {
  printBoard(board);

  if (selectedPiece != null) {
    availableMoves = getAvailableMoves(selectedPiece);
    if (availableMoves !== undefined) {
      availableMoves.forEach((move) => {
        ctx.fillStyle = "grey";
        ctx.beginPath();

        ctx.arc(
          move[0] * gridsize + gridsize / 2,
          move[1] * gridsize + gridsize / 2,
          20,
          0,
          2 * Math.PI
        );
        ctx.fill();
      });
    }

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.rect(
      gridsize * selectedPiece.x,
      gridsize * selectedPiece.y,
      gridsize,
      gridsize
    );
    ctx.stroke();
  }

  requestAnimationFrame(gameloop);
}

sprite.onload = function () {
  gameloop();
};

document.addEventListener("mousemove", function (e) {
  mousePos.x = e.offsetX;
  mousePos.y = e.offsetY;
});

let selectedPiece = null;

document.addEventListener("mousedown", function (e) {
  oldSelectedPiece = selectedPiece;
  selectedPiece = checkhover(mousePos);

  if (board[oldSelectedPiece.x][oldSelectedPiece.y][0] === currentturn) {
    if (
      oldSelectedPiece.x === selectedPiece.x &&
      oldSelectedPiece.y === selectedPiece.y
    ) {
      oldSelectedPiece = null;
      selectedPiece = null;
    }

    if (oldSelectedPiece !== null) {
      board[selectedPiece.x][selectedPiece.y] =
        board[oldSelectedPiece.x][oldSelectedPiece.y];
      board[oldSelectedPiece.x][oldSelectedPiece.y] = "0";

      selectedPiece = null;
    }
    if (currentturn == "w") {
      currentturn = "b";
    } else {
      currentturn = "w";
    }
  }
});
