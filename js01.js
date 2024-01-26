let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let userpara = document.querySelector(".userScore");
let comppara = document.querySelector(".compScore");
let msg = document.querySelector(".msg");

let genCompChoice = ()=>{
    let rndmId = Math.floor(Math.random()*3);
    return choices[rndmId].getAttribute("id");
}

const draw =()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userpara.innerText=userScore;
        msg.innerText = `YOU win, ${userChoice} beats ComputerChoice, ${compChoice}`;
        msg.style.backgroundColor="rgb(47, 135, 81)";
    }else{
        compScore++;
        comppara.innerText=compScore;
        msg.innerText = `YOU lose, ${userChoice} lost to ComputerChoice, ${compChoice}`;
        msg.style.backgroundColor="rgb(163, 67, 67)";
    }
};

const playgame=(userChoice)=>{
    let compChoice = genCompChoice();
    let userWin = true;
    if(userChoice==="rock"){
        userWin = compChoice==="scissors"? true:false;
    }else if(userChoice==="paper"){
        userWin= compChoice==="rock"? true:false;
    }else{
        userWin= compChoice==="paper"? true:false;
    }
    showWinner(userWin, userChoice, compChoice);
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
