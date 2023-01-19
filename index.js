const rpsSigns = ["rock", "paper", "scissors"];
let signChoice;
let computerSelection;

let playerSelection="";

let player=0;
let computer=0;

function playRound(){
    signChoice = Math.floor(Math.random()*rpsSigns.length);
    playerSelection = prompt ("Choose!").toLowerCase();
    computerSelection = rpsSigns[signChoice];

while(playerSelection!="rock" && playerSelection!="scissors" && playerSelection!="paper"){
        alert("You didn't choose valid option, choose again!");
        playerSelection = prompt ("Choose!").toLowerCase();
    }
    
    alert("You choose " + playerSelection);
    alert("Computer chooses " + computerSelection);

    if(playerSelection==="rock"){
        if(computerSelection==="rock"){return "It's a tie!";}
        else if(computerSelection==="paper"){computer++;return"You lose! Paper beats rock!"; }
        else if(computerSelection==="scissors"){player++;return"You win! Rock beats Scisors"; }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){player++;return"You win! Paper beats rock!"; }
        else if(computerSelection==="paper"){return("It's a tie!");}
        else if(computerSelection==="scissors"){computer++;return"You lose! Scissors beat paper!"; }
    }
    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){computer++;return"You lose! Rock beats Scisors!"; }
        else if(computerSelection==="paper"){player++;return"You win! Scissors beat paper!"; }
        else if(computerSelection==="scissors"){return("It's a tie!");}
    }
}


function game(){
    for (i=1; i<5; i++){
        console.log("Player: " + player + "   " + "Computer: " + computer)
        alert(playRound())
    }

    if(player>computer){
        return "You WIN with " + player + " points!";
    }
    else if(computer>player){
        return "You lose! Computer has " + computer + " points!";
    }
    else{return "It's a tie! You have " + player + " points, and computer has " + computer + " points ."}
}