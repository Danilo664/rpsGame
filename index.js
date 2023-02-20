const rpsSigns = ["rock", "paper", "scissors"];
let signChoice;
let computerSelection;

let playerSelection="";

let playerPoints= 0;
let computerPoints= 0;

let player= document.getElementById("player")
player.innerText = playerPoints;
let computer= document.getElementById("computer")
computer.innerText = computerPoints;
let outcomeTxt= document.getElementById("outcomeTxt")
outcomeTxt.innerText = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", ()=>{
    playerSelection= "rock";
    playGame();
});
paper.addEventListener("click", ()=>{
    playerSelection= "paper";
    playGame();
});
scissors.addEventListener("click", ()=>{
    playerSelection= "scissors";
    playGame();
});

function playGame(){
    if(playerPoints==5||computerPoints==5){
        playerPoints=0;
        computerPoints=0;
    }
    signChoice = Math.floor(Math.random()*rpsSigns.length);
    computerSelection = rpsSigns[signChoice];

    if(playerSelection==="rock"){
        if(computerSelection==="rock"){outcomeTxt.innerText="It's a tie";}
        else if(computerSelection==="paper"){ outcomeTxt.innerText="Ouch, paper beats rock!" ;computerPoints++;cS();}
        else if(computerSelection==="scissors"){ outcomeTxt.innerText="YES! Rock beats scissors!" ;playerPoints++;cS();}
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){outcomeTxt.innerText="YES! Paper beats rock!" ;playerPoints++;cS();}
        else if(computerSelection==="paper"){outcomeTxt.innerText="It's a tie";}
        else if(computerSelection==="scissors"){outcomeTxt.innerText="Ouch, scissors beat paper!" ;computerPoints++; cS();}
    }
    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){outcomeTxt.innerText="Ouch, rock beat scissors!" ;computerPoints++; cS();}
        else if(computerSelection==="paper"){outcomeTxt.innerText="YES! Scissors beat paper!" ;playerPoints++; cS();}
        else if(computerSelection==="scissors"){outcomeTxt.innerText="It's a tie";}
    }
    computer.innerText = computerPoints;
    player.innerText = playerPoints;
}
function cS(){
    if(playerPoints==5){
        outcomeTxt.innerText="You WIN! You managed to get 5 points!";
    }
    else if(computerPoints==5){
        outcomeTxt.innerText="You LOSE! Computer managed to get 5 points!";
    }
}