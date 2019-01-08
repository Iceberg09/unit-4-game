
//Create initial variables
var currentTargetScore = "";
var possibleTargetScores = [54, 37, 23, 19]
var currentScore = "";
var wins = 0;
var losses = 0;
var crystalOneValue = 0;
var crystalTwoValue = 0;
var crystalThreeValue = 0;
var crystalFourValue = 0;

function initializeGame () {
    var randomNumber = Math.floor(Math.random () * 4);

    currentTargetScore = possibleTargetScores[randomNumber];

    $("#target-score").text(currentTargetScore);

    currentScore = 0;

    $("#current-score").text(currentScore);

    if (currentTargetScore === 54) {
        crystalOneValue = 7;
        crystalTwoValue = 10;
        crystalThreeValue = 8;
        crystalFourValue = 2;
    }

    if (currentTargetScore === 37) {
        crystalOneValue = 3;
        crystalTwoValue = 7;
        crystalThreeValue = 11;
        crystalFourValue = 9;
    }
    if (currentTargetScore === 23) {
        crystalOneValue = 5;
        crystalTwoValue = 1;
        crystalThreeValue = 3;
        crystalFourValue = 7;
    }
    if (currentTargetScore === 19) {
        crystalOneValue = 6;
        crystalTwoValue = 3;
        crystalThreeValue = 2;
        crystalFourValue = 1;
    }

    $("#wins").text(wins);
    $("#losses").text(losses);
}

function evaluateWinLoss() {
    if (currentScore === currentTargetScore) {
        alert("Congrats, you won!!!");
        wins++;
        $("#wins").text(wins);
        initializeGame();
    }

    if (currentScore > currentTargetScore) {
        alert("Sorry, you lost :(");
        losses++;
        $("#losses").text(losses);
        initializeGame();
    }
}

$(document).ready(function() {
    initializeGame();

    $(document).on("click", "#crystal1", function(){
        currentScore = currentScore + crystalOneValue;
        $("#current-score").text(currentScore);
        evaluateWinLoss();
    })
    
    $(document).on("click", "#crystal2", function(){
        currentScore = currentScore + crystalTwoValue;
        $("#current-score").text(currentScore);
        evaluateWinLoss();
    })
    
    $(document).on("click", "#crystal3", function(){
        currentScore = currentScore + crystalThreeValue;
        $("#current-score").text(currentScore);
        evaluateWinLoss();
    })
    
    $(document).on("click", "#crystal4", function(){
        currentScore = currentScore + crystalFourValue;
        $("#current-score").text(currentScore);
        evaluateWinLoss();
    })
})

