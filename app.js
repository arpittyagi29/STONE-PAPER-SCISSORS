const startGameBtn = document.getElementById('start-game-btn');
const ROCK="ROCK";
const PAPER="PAPER";
const SCISSORS="SCISSORS";
const Default_choice="ROCK";
let gameRunning=false;
const Draw="DRAW";
const playerWin="PLAYERWIN";
const computerWin="COMPUTERWIN";


const getPlayerChoice=()=>{
const select=prompt(`${ROCK},${PAPER}, or ${SCISSORS}`,'').toUpperCase();
 if (select!==ROCK &&
        select!==PAPER &&
        select!==SCISSORS){
        alert(`we choose ${Default_choice} for you`);
        return Default_choice;
    }
    return select;
};

const getComputerChoice=()=>{
    const randomvalue=Math.random();
    if(randomvalue<0.37)
        return ROCK;
    else if(randomvalue<0.67)
        return PAPER;
    else
        return SCISSORS; 
};

const getWinner=(cChoice,pChoice)=>{
    if(cChoice===pChoice)
        return Draw;
    else if(cChoice===ROCK && pChoice===PAPER || cChoice===PAPER && pChoice===SCISSORS || cChoice===SCISSORS && pChoice===ROCK)
        return playerWin;
    else
        return computerWin;
};


startGameBtn.addEventListener("click",()=>{
    if(gameRunning){
        return;
    }
    gameRunning=true;
    console.log("game Started");
    const playerchoice=getPlayerChoice();
    const computerchoice=getComputerChoice();
    console.log("Player Choice   "+playerchoice);
    console.log("Computer Choice   "+computerchoice);
    const winner=getWinner(computerchoice,playerchoice)
    console.log(winner);

});