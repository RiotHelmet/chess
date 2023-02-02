let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let sprite = new Image();
sprite.src = "/sprite.png";

mousePos = {
  x: 0,
  y: 0,
};

gridsize = 750 / 8;
spriteSize = 426.5;
spriteOffset = {
  x: 0,
  y: 0,
};

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
  let i = 0;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
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
  i = 1;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (i % 2 == 0) {
        ctx.fillStyle = "#5d3231";
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
  let i = 0;
  printCheckboard();
  {
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[x].length; y++) {
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        // if (board[x][y] == "k") {
        //   ctx.fillStyle = "red";
        // }

        ctx.beginPath();
        ctx.rect(gridsize * x, gridsize * y, gridsize, gridsize);
        ctx.stroke();

        if (board[x][y] == "bp") {
          ctx.drawImage(
            sprite,
            5 * spriteSize + spriteOffset.x,
            1 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "br") {
          ctx.drawImage(
            sprite,
            4 * spriteSize + spriteOffset.x,
            1 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "bk") {
          ctx.drawImage(
            sprite,
            3 * spriteSize + spriteOffset.x,
            1 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "bb") {
          ctx.drawImage(
            sprite,
            2 * spriteSize + spriteOffset.x,
            1 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "bq") {
          ctx.drawImage(
            sprite,
            1 * spriteSize + spriteOffset.x,
            1 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "ba") {
          ctx.drawImage(
            sprite,
            0 * spriteSize + spriteOffset.x,
            1 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }

        if (board[x][y] == "wp") {
          ctx.drawImage(
            sprite,
            5 * spriteSize + spriteOffset.x,
            0 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "wr") {
          ctx.drawImage(
            sprite,
            4 * spriteSize + spriteOffset.x,
            0 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "wk") {
          ctx.drawImage(
            sprite,
            3 * spriteSize + spriteOffset.x,
            0 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "wb") {
          ctx.drawImage(
            sprite,
            2 * spriteSize + spriteOffset.x,
            0 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "wq") {
          ctx.drawImage(
            sprite,
            1 * spriteSize + spriteOffset.x,
            0 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }
        if (board[x][y] == "wa") {
          ctx.drawImage(
            sprite,
            0 * spriteSize + spriteOffset.x,
            0 * spriteSize + spriteOffset.y,
            spriteSize,
            spriteSize,
            gridsize * x,
            gridsize * y,
            gridsize,
            gridsize
          );
        }

        // if (board[x][y] != "0") {
        //   ctx.fillStyle = "black";
        //   ctx.fillText(
        //     board[x][y],
        //     gridsize * x + gridsize / 2,
        //     gridsize * y + gridsize / 2
        //   );
        // }
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

function gameloop() {
  printBoard(board);

  console.log(checkhover(mousePos));

  ctx.beginPath();
  ctx.arc(mousePos.x, mousePos.y, 10, 0, 2 * Math.PI);
  ctx.fill();

  if (selectedPiece != null) {
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

  if (oldSelectedPiece !== null) {
    board[selectedPiece.x][selectedPiece.y] =
      board[oldSelectedPiece.x][oldSelectedPiece.y];
    board[oldSelectedPiece.x][oldSelectedPiece.y] = "0";

    selectedPiece = null;
  }
});
