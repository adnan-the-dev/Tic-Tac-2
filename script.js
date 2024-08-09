let boxes = document.querySelectorAll(".box");
let message = document.getElementById("message");
let reset = document.getElementById("rest-btn");

let moveO = true;

const winners = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (moveO) {
      box.innerText = "O";
      moveO = false;
    } else {
      box.innerText = "X";
      moveO = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const checkWin = () => {
  for (let winner of winners) {
    let pos1 = boxes[winner[0]].innerText;
    let pos2 = boxes[winner[1]].innerText;
    let pos3 = boxes[winner[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

const showWinner = (win) => {
  message.innerText = `Winner player: ${win}`;
  disabledBtn();
};

function disabledBtn() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

function restore() {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  message.innerText = "";
}

reset.addEventListener("click", restore);
