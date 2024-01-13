let buttons = document.querySelectorAll(".buttons-container button");
let playerScoreDisplay = document.querySelector("#player-score");
let cpuScoreDisplay = document.querySelector("#cpu-score");
let messageDisplay = document.querySelector(".message-container");
let roundDisplay = document.querySelector(".round-count");
let restartBtn = document.querySelector(".restart-btn");

let message = "";

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*100);
    let computerChoice;
    
    if(randomNumber<30){
        computerChoice = "rock";
    }else if(randomNumber>= 30 && randomNumber<60){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    
    return computerChoice;
}



function round(computerChoice,playerChoice){
    console.log("player: "+playerChoice);
    console.log("cpu    :"+computerChoice);
    let winner = "";

    if(computerChoice === playerChoice){
        message = ("TIE the round will be replayed!");
        winner = "none";
    }else if(playerChoice === "paper" || playerChoice === "rock" || playerChoice === "scissors"){
        
        if(computerChoice === "rock" && playerChoice === "paper"){
            message = "You won the game!";
            winner = "player";
        }else if(computerChoice === "paper" && playerChoice === "rock"){
            message = ("You loose Paper beats Rock!");
            winner = "cpu";
        }else if(computerChoice === "paper" && playerChoice === "scissors"){
            message = ("You won the game!");
            winner = "player";
        }else if(computerChoice === "scissors" && playerChoice === "paper"){
            message = ("You loose Scissors beats Paper!");
            winner = "cpu";
        }else if(computerChoice === "rock" && playerChoice === "scissors"){
            message = ("You loose Rock beats Scissors!");
            winner = "cpu";
        }else if(computerChoice === "scissors" && playerChoice === "rock"){
            message = ("You won the game!");
            winner = "player";
        }
        
    }else{
        winner = "none";
    }

    messageDisplay.textContent = message

    

    return winner;
}


let playerScore=0,cpuScore=0,gameCount=1;

function game(choice){
    
    
    let roundWinner = round(getComputerChoice(),choice);

    if(roundWinner === "player"){
        playerScore += 1;
        gameCount+=1;
        playerScoreDisplay.textContent = playerScore;
        console.log(`Remaining rounds ${5-(gameCount-1)}`);
    }else if(roundWinner === "cpu"){
        cpuScore += 1;
        cpuScoreDisplay.textContent = cpuScore;
        gameCount+=1;
        console.log(`Remaining rounds ${5-(gameCount-1)}`);
    }


    roundDisplay.textContent = `Remaining rounds ${5-(gameCount-1)}`;
    if(gameCount>= 6){
        buttons.forEach((button)=>{
            button.disabled = true;
        })

        if(playerScore>cpuScore){
            messageDisplay.textContent = "The final winner is Player" ;

        }else{
            messageDisplay.textContent = "The final winner is CPU";
        }
    }
   

}


buttons.forEach((button)=>{
    

    button.addEventListener("click",()=>{
        game(button.id);
    })
    
})


restartBtn.addEventListener("click",()=>{
    location.reload();
})



