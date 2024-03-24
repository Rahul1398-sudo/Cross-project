let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


let turnO = true; //playerX, playerO


boxes.forEach((box) =>{
  box.addEventListener("click", () => {
    if(turnO) {
       //playerO
      box.innerText ="O";
      turnO = false;
    } else {
      //playerX
      box.innerText ="X";
      turnO = true;
    }
    box.disabled =true; //Use this code for lock the value O and X

    checkWinner();


  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
      //   console.log(
      //     [pattern[0]], 
      //     [pattern[1]], 
      //     [pattern[2]]
      //   );
    
      //   console.log(
      //     boxes[pattern[0]].innerText, 
      //     boxes[pattern[1]].innerText, 
      //     boxes[pattern[2]].innerText
      //   );//This mark is our position

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val)
        showWinner(pos1Val);
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}; // ye code box pe click na krne ke liye hai jb koi team jeet chuki hai, thsi disabled code write over 34 para



const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes(); //not cliked on box X and O when team is winning
};




const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
