// Variables and declarations:
  
  //declarations of the rules- open and close

  const rules = document.getElementById("myRules");	
  const btn = document.getElementById("open");
  const span = document.getElementsByClassName("close")[0];

  //declarations of the score area
  const playerScore_span = document.getElementById("player-score");
  const computerScore_span = document.getElementById("computer-score");
  const resulttime_p = document.querySelector("#action-message");
  const resetGame_div = document.getElementById("reset-game");

  let playerScore = 0;
  let computerScore = 0;

  //declarations of the picture choice area

  const choices = document.querySelectorAll ('.choice');
  
  const gameRules = {
    rock: { beats: ["scissors", "lizard"], message: "You Win !🔥", glowClass: "green-glow" },
    paper: { beats: ["rock", "spock"], message: "You Win !🔥", glowClass: "green-glow" },
    scissors: { beats: ["paper", "lizard"], message: "You Win !🔥", glowClass: "green-glow" },
    lizard: { beats: ["paper", "spock"], message: "You Win !🔥", glowClass: "green-glow" },
    spock: { beats: ["rock", "scissors"], message: "You Win !🔥", glowClass: "green-glow" }
  };
  

  //variables of the timer area

  const timer = document.getElementById('timer');
  let timerInterval;
  let isTimerRunning = false;
  let clickCount = 0;

// functions
  
  //functions of the rules open and close

  btn.addEventListener('click', function() {
  rules.style.display = "block";
  });
 
  span.addEventListener('click', function() {
  rules.style.display = 'none';
  });
 
  window.addEventListener('click', function(event) {
  if (event.target == rules) {rules.style.display = "none";}
  });

//functions of the score area

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

   //functions of the picture choice area

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];
   } 

  function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "It's a Tie !😐";
    if (gameRules[playerChoice].beats.includes(computerChoice)) return "You Win !🔥";
    return "You Lost !😒";
  }
  
  function applyResult(playerChoice, computerChoice, result) {
    const message = `${playerChoice} ${result} ${computerChoice}<br/>`;
    //Define glowclass based on the results  
      let glowClass ='';
      switch (result) {
        case "You Win !🔥":
          playerScore++;
            glowClass = 'green-glow';
            break;
        case "You Lost !😒":
          computerScore++;
            glowClass = 'red-glow';
            break
        default:
            glowClass = 'yellow-glow';
              break;
        } 
    resulttime_p.innerHTML = message;
    document.querySelector(`[data-choice="${playerChoice}"]`).classList.add(glowClass);
    setTimeout(() => {
      document.querySelector(`[data-choice="${playerChoice}"]`).classList.remove(glowClass);
    }, 500);
  }

  function updateScores(playerScore, computerScore) {
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
  }
  
function game(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);
  //Apply the result to the UI
  applyResult(playerChoice, computerChoice, result);
  //Update scores displayed on the UI
  updateScores(playerScore, computerScore);
  }
  
  function main() {
    choices.forEach(choice => {
      choice.addEventListener('click', function() {
        const playerChoice = this.dataset.choice;
        console.log("YOU CLICKED ON " + playerChoice.toUpperCase());
        game(playerChoice);
      });
    });
  }
  
  main();
 
  //functions of the timer area

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
  
  