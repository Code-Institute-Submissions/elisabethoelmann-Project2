//function of the rules area open and close

var rules = document.getElementById("myRules");	
var btn = document.getElementById("open");
var span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function() {
  rules.style.display = "block";
});
 
span.addEventListener('click', function() {
  rules.style.display = 'none';
});
 
window.addEventListener('click', function(event) {
  if (event.target == rules) {rules.style.display = "none";}
});

//the score area

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const resulttime_p = document.querySelector("#action-message");
const resetGame_div = document.getElementById("reset-game");

let playerScore = 0;
let computerScore = 0;

 function resetScores() {
  playerScore = 0;
  computerScore = 0;
  playerScore_span.innerText = 0;
  computerScore_span.innerText = 0;
  resulttime_p.innerText = "";
 }
 
 resetGame_div.addEventListener('click', function() {
  resetScores() 
  });

  //the picture choice area

 const rock_div = document.getElementById("rock");
 const paper_div = document.getElementById("paper");
 const scissors_div = document.getElementById("scissors");
 const lizard_div = document.getElementById("lizard");
 const spock_div = document.getElementById("spock");
 
 function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
   const randomNumber = (Math.floor(Math.random() * 5));
   return choices[randomNumber];
 }
 
 function win(playerChoice, computerChoice) {
   playerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   resulttime_p.innerHTML = playerChoice + " beats " + computerChoice + '<br/>' + "You Win !🔥";
   document.getElementById(playerChoice).classList.add('green-glow');
   setTimeout(function() { document.getElementById(playerChoice).classList.remove('green-glow'); }, 500);
 }
 
 function lose(playerChoice, computerChoice) {
   computerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   resulttime_p.innerHTML = playerChoice + " loses " + computerChoice + '<br/>'+ "You Lost !😒";
   document.getElementById(playerChoice).classList.add('red-glow');
   setTimeout(function() { document.getElementById(playerChoice).classList.remove('red-glow'); }, 500);
 }
 
 function tie(playerChoice, computerChoice) {  
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   resulttime_p.innerHTML = playerChoice + " equals " + computerChoice + '<br/>'+ "It's a Tie !😐";
   document.getElementById(playerChoice).classList.add('yellow-glow');
   setTimeout(function() { document.getElementById(playerChoice).classList.remove('yellow-glow'); }, 500);
 }
 
 function game(playerChoice) {
   const computerChoice = getComputerChoice();
   switch (playerChoice + computerChoice) {
   case "rockscissors":
   case "rocklizard":
   case "scissorspaper":
   case "scissorslizard":
   case "paperrock":
   case "paperspock":
   case "lizardspock":
   case "lizardpaper":
   case "spockscissors":
   case "spockrock":
   win(playerChoice, computerChoice);
   break;
 
   case "scissorsrock":
   case "lizardrock":
   case "paperscissors":
   case "lizardscissors":
   case "rockpaper":
   case "spockpaper":
   case "spocklizard":
   case "paperlizard":
   case "scissorsspock":
   case "rockspock":
   lose(playerChoice, computerChoice);
   break;
 
   case "rockrock":
   case "paperpaper":
   case "scissorsscissors":
   case "lizardlizard":
   case "spockspock":
   tie(playerChoice, computerChoice);
   break;
 }
 }
 
 function main(){
   rock_div.addEventListener('click', function() {
       console.log("YOU CLICKED ON ROCK");
       game("rock");
   });
 
   paper_div.addEventListener('click', function() {
       console.log("YOU CLICKED ON PAPER");
       game("paper");
   });
   scissors_div.addEventListener('click', function() {
       console.log("YOU CLICKED ON SCISSORS");
       game("scissors");
   });
 
   lizard_div.addEventListener('click', function() {
       console.log("YOU CLICKED ON LIZARD");
       game("lizard");
   });
 
   spock_div.addEventListener('click', function() {
       console.log("YOU CLICKED ON SPOCK");
       game("spock");
   });
 }
 
 main();

 //the timer area

const timer = document.getElementById('timer');
let timerInterval;
let isTimerRunning = false;
let clickCount = 0;

function startTimer() {
   clearInterval(timerInterval);
   let second = 0;
   let minute = 0;
   let hour = 0;

   timerInterval = setInterval(function() {
      timer.innerHTML = 
        (hour ? hour + ':' : '') +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second);
        second++;
        if (second == 60) {
           minute++;
           second = 0;
        }
        if (minute == 60) {
           hour++;
           minute = 0;
        }
   }, 1000);
   isTimerRunning = true;
}

function stopAndShowTime() {
   clearInterval(timerInterval);
   isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timer.innerHTML = '00:00';
  clickCount = 0;
}

function startAndStopTimer() {
  clickCount++;
  if (clickCount === 2){
    stopAndShowTime();
  } else if (clickCount === 3) {
    resetTimer();
  }
  else {
    if (isTimerRunning) {
    stopAndShowTime();
  } else {
        startTimer();
      }
    }
  }
  
  