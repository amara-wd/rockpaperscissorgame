let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice=() =>{
    const options= ["rock","paper","scissors"];
    //random no between 0 and 2
  const randIdx= Math.floor(Math.random() * 3); 
//   console.log(randIdx);
  return options[randIdx];
};

const drawGame=() =>{
    // console.log("Game was draw");
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
    
}



const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){//userWin=true
        userScore++;
        userScorePara.innerHTML=userScore;
        // console.log("you win!");
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        // console.log("you lose");
        msg.innerText=`you lost. ${compChoice} beats your ${userChoice}  `;
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoice) =>{
    // console.log("User choice =", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    // console.log("Comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;

        }
       else if(userChoice === "paper"){
        //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //scissor for user
            //comp rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });

});