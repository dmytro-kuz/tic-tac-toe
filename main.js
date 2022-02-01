const area = document.getElementById("area");
let move = 0;
let result = "";
let btnClose = document.querySelector(".btn-close");
let content = document.querySelector(".content");
let modalWin = document.querySelector(".modal-result-wrapper");

area.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "0");
    move++;
    check();
  }
});

let check = () => {
  let boxes = document.getElementsByClassName("box");
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    console.log(boxes[arr[(0, 1, 2)][0]].innerHTML);
    if (
      boxes[arr[i][0]].innerHTML === "X" &&
      boxes[arr[i][1]].innerHTML === "X" &&
      boxes[arr[i][2]].innerHTML === "X"
    ) {
      result = "крестики";
      prepereResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML === "0" &&
      boxes[arr[i][1]].innerHTML === "0" &&
      boxes[arr[i][2]].innerHTML === "0"
    ) {
      result = "нолики";
      prepereResult(result);
    } else if (move == 9 && result !== "крестики") {
      result = "Ничия";
      prepereResult(result);
    }
  }
};

const prepereResult = (winner) => {
  content.innerHTML = `Перемогли ${winner} !`;
  modalWin.style.display = "block";
  // console.log('no one')
};

let closeModal = () => {
  modalWin.style.display = "none";
  location.reload();
};

btnClose.addEventListener("click", closeModal);
