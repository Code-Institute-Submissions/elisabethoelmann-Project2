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