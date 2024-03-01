let userScorepara = document.querySelector("#userScore");
let compScorepara = document.querySelector("#compScore");
let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const drawGame = () => {
    console.log("Draw");
    msg.style.backgroundColor = "black";
    msg.innerText = "Draw!";
}

const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose ");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    const compChoice = getCompChoice();
    if(compChoice === userChoice){
        drawGame();
    }else{
       let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice ==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
} )