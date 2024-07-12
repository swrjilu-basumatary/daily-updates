const boxes = document.querySelectorAll(".box");
const msg = document.querySelector(".msg");
const msgcontainer = document.querySelector(".msgcontainer");
const Reset = document.querySelector("#reset");
const newGame = document.querySelector("#newgame");
let turnO = true;


const options = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const RESETGAME = ()=>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const showwinner = (winner)=>{
     msg.innerText = `Congratulations Winner Is ${winner}`
     msgcontainer.classList.remove("hide");
     disableboxes();
    };

const checkWinner = () =>{
    for(let option of options){
    let pos1val = boxes[option[0]].innerText;
    let pos2val = boxes[option[1]].innerText;
    let pos3val = boxes[option[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
             console.log("Winner = ", pos1val);
             showwinner(pos1val); 
        }
    }
}
}; 

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
   if(turnO){
    box.innerText = "O";
    turnO = false;
   }else{
    box.innerText = "X";
    turnO = true;
   }
   box.disabled = true;
   checkWinner();
    });
});

Reset.addEventListener("click", RESETGAME);
newGame.addEventListener("click", RESETGAME);