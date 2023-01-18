const rpsSigns = ["rock", "paper", "scissors"];
let signChoice = Math.floor(Math.random()*rpsSigns.length);
let computerSelection = rpsSigns[signChoice];


let playerSelection = prompt ("Choose!").toLowerCase();

alert (playRound())

function playRound(){


    while(playerSelection!="rock" && playerSelection!="scissors" && playerSelection!="paper"){
        alert("You didn't choose valid option, choose again!");
        playerSelection = prompt ("Choose!").toLowerCase();
    }
    
    alert("You choose " + playerSelection);
    alert("Computer chooses " + computerSelection);

    if(playerSelection==="rock"){
        if(computerSelection==="rock"){alert("It's a tie!")}
        else if(computerSelection==="paper"){alert("You lose! Paper beats rock!")}
        else if(computerSelection==="scissors"){alert("You win! Rock beats Scisors") }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){alert("You win! Paper beats rock!")}
        else if(computerSelection==="paper"){alert("It's a tie!")}
        else if(computerSelection==="scissors"){alert("You lose! Scissors beat paper!")}
    }
    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){alert("You lose! Rock beats Scisors!")}
        else if(computerSelection==="paper"){alert("You win! Scissors beat paper!")}
        else if(computerSelection==="scissors"){alert("It's a tie!")}
    }
}
