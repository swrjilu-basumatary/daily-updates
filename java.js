let userScore = 0;
let compScore = 0;
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const mm = document.getElementById("mm");
const mm1 = document.getElementById("mm1");

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText = `you Win! your ${userChoice} beats ${compChoice}`;
        mm.innerText = `computer choice = ${compChoice}`;
        mm1.innerText = `Your choice = ${userChoice}`;
    }else{
        compScore++;
        compScorepara.innerText=compScore; 
        console.log("You Lose");
        msg.innerText = `you Lose! ${compChoice} beats your ${userChoice}`;
    }

};

const drawGame = () =>{
     console.log("Game Was draw");
     msg.innerText = "Game was draw play again";
};

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"]
   const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const palyGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp Choice=", compChoice);


    if (userChoice===compChoice){
        drawGame();
    }else {
         let userWin = true;
         if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
         }else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
         }else if(userChoice==="scissors"){
            userWin = compChoice === "rock" ? false : true;
         }
showWinner(userWin, userChoice, compChoice);
    }
};


 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        palyGame(userChoice);
    });
}); 