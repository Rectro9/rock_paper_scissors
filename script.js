

function excludeNumbers(exclude1, exclude2, exclude3){
    let numbers;

    do{
        numbers = Math.floor(Math.random() * 6);;
    }
    while(
        numbers === exclude1 || numbers === exclude2 || numbers === exclude3
    )

    return numbers;
}


function getComputerChoice(randomNumbers){
    let rock = 0;
    let paper = 5;
    let scissors = 2;

    if(randomNumbers === rock){
        return "rock";
    }
    else if(randomNumbers === paper){
        return "paper";
    }
    else if(randomNumbers === scissors){
        return "scissors";
    }
}


function getHumanChoice(){
    let input = prompt("Please enter your choice: ");

    let caseInsensitive = input.toLowerCase();

    return caseInsensitive;
}


function playGame(){
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){

    if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("Draw");
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("Draw");
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Draw");
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }

}

for(let i = 1; i <= 5; i++){
let randomNumber = excludeNumbers(1, 3, 4);
let computerChoice = getComputerChoice(randomNumber);
let humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);

}

if(humanScore > computerScore){
    console.log("Congratulations! You've won.");
}
else if(humanScore === computerScore){
    console.log("It's a draw.");
}
else{
    console.log("Computer Wins.")
}

return `HumanScore: ${humanScore} ComputerScore: ${computerScore}`;

}

console.log(playGame())