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

function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice(paper/rock/scissors)");
    playerChoice = playerChoice.toLowerCase();

    return playerChoice;
    
}

function round(computerChoice,playerChoice){
    console.log("player: "+playerChoice);
    console.log("cpu    :"+computerChoice);
    let winner = "";

    if(computerChoice === playerChoice){
        console.log("TIE the round will be replayed!");
        winner = "none";
    }else if(playerChoice === "paper" || playerChoice === "rock" || playerChoice === "scissors"){
        
        if(computerChoice === "rock" && playerChoice === "paper"){
            console.log("You won the game!");
            winner = "player";
        }else if(computerChoice === "paper" && playerChoice === "rock"){
            console.log("You loose Paper beats Rock!");
            winner = "cpu";
        }else if(computerChoice === "paper" && playerChoice === "scissors"){
            console.log("You won the game!");
            winner = "player";
        }else if(computerChoice === "scissors" && playerChoice === "paper"){
            console.log("You loose Scissors beats Paper!");
            winner = "cpu";
        }else if(computerChoice === "rock" && playerChoice === "scissors"){
            console.log("You loose Rock beats Scissors!");
            winner = "cpu";
        }else if(computerChoice === "scissors" && playerChoice === "rock"){
            console.log("You won the game!");
            winner = "player";
        }
        
    }else{
        console.log(`${playerChoice} is not a valid option`);
        winner = "none";
    }

    return winner;
}



function game(){
    let playerScore=0,cpuScore=0,gameCount=1;
    
    
    while(gameCount<=5){
        let roundWinner = round(getComputerChoice(),getPlayerChoice());

        if(roundWinner === "player"){
            playerScore += 1;
            gameCount+=1;
            console.log(`Remaining rounds ${5-(gameCount-1)}`);
        }else if(roundWinner === "cpu"){
            cpuScore += 1;
            gameCount+=1;
            console.log(`Remaining rounds ${5-(gameCount-1)}`);
        }
        
    }

    alert(`PLAYER: ${playerScore} || CPU ${cpuScore}`);

}


game();