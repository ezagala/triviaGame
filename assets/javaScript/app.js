$(document).ready(function() {
    $("#gamePlay").hide(); 
    $("#results").hide();

    $("#startButton").on("click", function(){
        $("#startButton").hide(); 
        $("#gamePlay").show(); 
        timer.start();     
    })

    $("#resetButton").on("click", function(){
        location.reload();  
    })

}); 

var timeRemaining; 
var correctAnswers; 
var incorrectAnswers; 
var unanswered; 
var questionList = [
    {
    question: "Coffee beans are seeds. Where to they come from?", 
    answer: "Stone Fruit",
    answer: "Melons", 
    correctAnswer: 'Cherries', 
    answer: "Some weird fruit you've never heard of."
    }, 
    {
    question: "Most of the coffee we drink is...", 
    correctAnswer: "Arabica",
    answer: "Robusto", 
    },
    {
    question: "Coffee with a dark roast usually has more caffeine than lightly roasted coffee", 
    answer: "true",
    correctAnswer: "false"
    },
    {
    question: "The espresso machine was invented in...", 
    answer: "France",
    answer: "Portugal", 
    answer: "Spain", 
    correctAnswer: "Italy"
    },
    {
    question: "Legend has it that the first coffee forest was found in... ", 
    correctAnswer: "Ethiopia",
    answer: "Brazil", 
    answer: "Columbia", 
    answer: "Sumatra"
    },
    {
    question: "This is a question", 
    answer: "Answer one",
    answer: "Answer two", 
    correctAnswer: "Answer three", 
    answer: "Answer four"
    },
    {
    question: "Coffee beans start our as _______ colored cherries.", 
    correctAnswer: "Yellow",
    answer: "Red", 
    answer: "Blue", 
    answer: "Purple"
    },
    {
    question: "Coffee ranks as the ____ most traded commodity in the word.", 
    answer: "4th",
    answer: "9th", 
    correctAnswer: "2nd", 
    answer: "16th"
    }
]; 


var timer = {
    time: 1000, 
    start: function() {
        setInterval(timer.count, 1000); 
    },
    count: function(){
        if (timer.time !== 0) {
        timer.time--
        var converted = timer.timeConverter(timer.time);
        console.log(converted); 
        $("#displayTime").text(' ' + converted)
        } else {
            $("#gamePlay").remove(); 
            $("#results").show()
        }
    },
    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
        seconds = "0" + seconds;
        }

        if (minutes === 0) {
        minutes = "00";
        }
        else if (minutes < 10) {
        minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
}

/* 


On page load, hide everything but the jumbotron and the start button

When the start button is clicked: 
     1: Hide the start button
     2: Display gamePlay div
     3: Begin countdown on the timer 
     4: Set up game play div
        Loop through question list: 
            1: Append question to question header 
            2: append answer and correctAnswer to list items 
        When an answer is selected: 
            1: Remove that question div from the page 
            2: Update incorrect/correct variable
        
If the done button is clicked or the timer runs out : 
    1: Hide the gamePlay div 
    2: Retrieve values from correct/incorrect variables
    3: Update unanswered variable 
    4: Display the results div with appended values 

*/