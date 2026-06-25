let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
     const option = ["rock", "paper", "scissors"];
     const rndIdx = Math.floor(Math.random() * 3);
     return option[rndIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.background = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}` ;
        msg.style.background = "green"
     } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =  `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
     }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice)

    if(userChoice === compChoice){
        //Drwa Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin =  compChoice === "Scissors" ? false :true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice );
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute ("id");
        console.log("Choice was clicked", userChoice)
        playGame(userChoice);
    })
})