function getComputerChoice(){
    let weight=Math.floor(Math.random()*100);
    let choice;
    if(weight<=100 && weight>=67){
        choice="scissors";
    }else if(weight<=32 && weight>=0){
        choice="paper";
    }else{
        choice="rock";
    }
    return choice;
}
function getHumanChoice(){
    let choice=prompt("rock, paper, scissors shoot!!:").toLowerCase();
    if((choice!="rock")&&(choice!="paper")&&(choice!="scissors")){
        choice = null;
    }
    return choice;
}
let humanScore=0,computerScore=0;
function playRound(humanChoice, computerChoice) {
    if(computerChoice=="rock"){
        switch(humanChoice) {
            case 'rock':
              computerScore+=0;humanScore+=0;console.log("nilnil");
              break;
            case 'paper':
              humanScore+=1;console.log("You win! Paper beats Rock");
              break;
            case 'scissors':
              computerScore+=1;console.log("You lose! Rock beats scissors");
              break;
            default:
              alert('play again. and input something this time.');
              playRound(getHumanChoice(),getComputerChoice());
              break;
          }
    }else if(computerChoice=="paper"){
        switch(humanChoice) {
            case 'rock':
                computerScore+=1;console.log("You lose! Paper beats Rock");
            break;
            case 'paper':
                computerScore+=0;humanScore+=0;console.log("nilnil");
            break;
            case 'scissors':
                humanScore+=1;console.log("You win! scissors beats paper");
            break;
            default:
                alert('play again. and input something this time.');
                playRound(getHumanChoice(),getComputerChoice());
              break;
            }        
    }else{
        
        switch(humanChoice) {
            case 'rock':
                humanScore+=1;console.log("You win! Rock beats scissors");
                break;
            case 'paper':
                computerScore+=1;console.log("You lose! scissors beats paper");
                break;
            case 'scissors':
                computerScore+=0;humanScore+=0;console.log("nilnil");
                break;
            default:
                alert('play again. and input something this time.');
                playRound(getHumanChoice(),getComputerChoice());
                break;
            }   
    }

}

for(let i=1;i<=5;i++){
console.log(`round ${i}:\n-----------------`);
playRound(getHumanChoice(),getComputerChoice());
console.log(`human   computer\n   ${humanScore}   :   ${computerScore   }\n-----------------!`); 
}

if (humanScore>computerScore){
    console.log("human wins!!");
}else if(humanScore<computerScore){
    console.log("computer win!!");
}else{
    console.log("its a tie!!");
}
