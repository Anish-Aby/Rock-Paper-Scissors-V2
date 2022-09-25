let userChoice;

let possibleChoices = document.querySelectorAll(".choice");

possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener("click", (e) =>{
    userChoice = e.target.id;
    // alert(`${userChoice} is working!`);

    hideFirstElements();
    showSecondElements();
    setInterval(generateComputerResult(userChoice), 1000)
}))

function hideFirstElements(){
    let rockHide = document.getElementById("rock");
    let paperHide = document.getElementById("paper");
    let scissorsHide = document.getElementById("scissors");
    let chooseHeader = document.querySelector(".choose-header");

    rockHide.style.display = "none";
    paperHide.style.display = "none";
    scissorsHide.style.display = "none";
    chooseHeader.style.display = "none";
}

function showSecondElements(){
    let resultShow = document.querySelector(".result-header");
    let computerShow = document.querySelector(".computer-img");
    let userShow = document.querySelector(".user-img");
    let computerShowContainer = document.querySelector(".computer-choice-container");
    let userShowContainer = document.querySelector(".user-choice-container");

    resultShow.style.display = "flex";
    computerShow.style.display= "flex";
    userShow.style.display= "flex";
    computerShowContainer.style.display= "flex";
    userShowContainer.style.display= "flex";
}

function generateComputerResult(userChoice){
    let random = Math.floor (Math.random() * 3) + 1;
    let resultDisplay = document.querySelector(".result-display");

    let computerRandChoice;
    if (random == 1){
        computerRandChoice = "rock";
    }
    else if (random == 2){
        computerRandChoice = "paper";
    }
    else if (random == 3){
        computerRandChoice = "scissors";
    }

    if (computerRandChoice == userChoice){
        resultDisplay.innerHTML = "Draw!";
    }
    else if (computerRandChoice == "rock" && userChoice == "scissors"){
        resultDisplay.innerHTML = "You Lost!";
    }
    else if (computerRandChoice == "paper" && userChoice == "rock"){
        resultDisplay.innerHTML = "You Lost!";
    }
    else if (computerRandChoice == "scissors" && userChoice == "paper"){
        resultDisplay.innerHTML = "You Lost!";
    }
    else{
        resultDisplay.innerHTML = "You Won!";
    }

    // Replacing the user choice img
    let userImg = document.querySelector(".user-img");
    if(userChoice == "rock"){
        userImg.src = "/images/rock_without_bg.png";
    }
    else if(userChoice == "paper"){
        userImg.src = "/images/paper_without_bg.png";
    }
    else if(userChoice == "scissors"){
        userImg.src = "/images/scissors_without_bg.png";
    }

    // Replacing the computer choice img
    let computerImg = document.querySelector(".computer-img");
    if(computerRandChoice == "rock"){
        computerImg.src = "/images/rock_flip.png";
    }
    else if(computerRandChoice == "paper"){
        computerImg.src = "/images/paper_flip.png";
    }
    else if(computerRandChoice == "scissors"){
        computerImg.src = "/images/scissors_flip.png";
    }

    resultDisplay.style.display= "flex";
}
