
let menuClick = document.querySelector(".ticon");
let menu =document.querySelector(".menu");
let closeClick = document.querySelector(".close-icon");

menuClick.addEventListener("click", () => {
    menu.style.right = "0";
    closeClick.addEventListener("click", () => {
        menu.style.right = "-100%"
    })
})






let userChoice;

let possibleChoices = document.querySelectorAll(".choice");

possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener("click", (e) =>{
    userChoice = e.target.id;
    // alert(`${userChoice} is working!`);

    hideFirstElements();
    showSecondElements();
    generateComputerResult(userChoice);
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
    setTimeout(function() {
        let random = Math.floor (Math.random() * 3) + 1;
        let resultDisplay = document.querySelector(".result-display");
        let tryAgain = document.getElementById("try-again-link");

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
        resultDisplay.style.display= "flex";
            // Replacing the user choice img
            let userImg = document.getElementById("user-imgid");
            if(userChoice === "rock"){
                userImg.src = "/root/images/rock_without_bg.png";
            }
            else if(userChoice === "paper"){
                userImg.src = "/root/images/paper_without_bg.png";
            }
            else if(userChoice === "scissors"){
                userImg.src = "/root/images/scissors_without_bg.png";
            }
    
        // Replacing the computer choice img
        let computerImg = document.getElementById("computer-imgid");
        if(computerRandChoice === "rock"){
            computerImg.src = "/root/images/rock_flip.png";
        }
        else if(computerRandChoice === "paper"){
            computerImg.src = "/root/images/paper_flip.png";
        }
        else if(computerRandChoice === "scissors"){
            computerImg.src = "/root/images/scissors_flip.png";
        }

        tryAgain.style.display = "flex";
    }, 1000);
}

