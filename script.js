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


