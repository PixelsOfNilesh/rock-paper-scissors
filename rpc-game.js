let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msgId= document.querySelector("#msg");
const humanscore = document.querySelector("#humanscore");
const compscore = document.querySelector("#compscore");
const gameover = document.querySelector("#gameover");
const resetbtn = document.querySelector("#resetbtn");
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
const userChoice = choice.getAttribute("id");
        let compChoice;
const geneCompChoice = ()=>{ 
    let options= ["rock", "paper", "scissor"];
let randomChoice = options[Math.floor(Math.random() * options.length)];
return randomChoice;
}
compChoice= geneCompChoice();
const showWinner=(userWin)=>{

if (userWin==true){
msgId.innerText="You won";
msgId.style.backgroundColor= "green";
userScore++;
humanscore.innerText = userScore;
}else{
    msgId.innerText="Computer won";
    msgId.style.backgroundColor= "red";
    compScore++;
    compscore.innerText = compScore;
}
}

if(userScore=== 15 || compScore===15){
choices.forEach(choice => choice.classList.add("disabled"));
 if (userScore === 15) {
    gameover.innerText = "Game Over – You win!";
  } else {
    gameover.innerText = "Game Over – Computer wins!";
  }
gameover.style.visibility= "visible";
resetbtn.style.display= "block";
}

const resetGame = ()=>{
    gameover.style.visibility= "hidden";
    resetbtn.style.display= "none";
    msgId.innerText="Play your Move";
    msgId.style.backgroundColor= "";
    humanscore.innerText = 0;
    compscore.innerText = 0;
    userScore= 0;
    compScore= 0;
    choices.forEach(choice => choice.classList.remove("disabled"));
}
resetbtn.addEventListener("click", resetGame);

//         if (compChoice==="rock" && userChoice==="paper"){
//          msgId.innerText="You won";
// } else if (compChoice==="rock" && userChoice==="scissor") {
//  msgId.innerText="Computer won";
// }else if (compChoice==="paper" && userChoice==="scissor"){
//      msgId.innerText="You won";
// }else if (compChoice==="paper" && userChoice==="rock"){
//      msgId.innerText="computer won";
// }else if (compChoice==="scissor" && userChoice==="rock"){
//      msgId.innerText="You won";
// }else if (compChoice==="scissor" && userChoice==="paper"){
//      msgId.innerText="Computer won";
// }else if (compChoice===userChoice){
//      msgId.innerText="It's a tie";
// }

// Optimized way

if (userChoice===compChoice){
  msgId.innerText="It's a tie";
  msgId.style.backgroundColor= "";
}else{
    let userWin= true;
    if(userChoice==="rock"){
     userWin= compChoice === "paper"? false : true;
    } else if (userChoice=== "paper"){
        userWin= compChoice === "scissor"? false : true;
    }else {
        userWin= compChoice === "rock"? false : true;
    }
    showWinner(userWin); 
}
    })
});
