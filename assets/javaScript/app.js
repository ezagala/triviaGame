var timeRem; 
var correctAnswers; 
var incorrectAnswers; 
var unanswered; 
var questionList = [
    {
    question: "This is a question", 
    answer: "Answer one",
    answer: "Answer two", 
    correctAnswer: "Answer three", 
    answer: "Answer four"
    }, 
    {
    question: "This is a question", 
    correctAnswer: "Answer one",
    answer: "Answer two", 
    answer: "Answer three", 
    answer: "Answer four"
    },
    {
    question: "This is a question", 
    answer: "Answer one",
    answer: "Answer two", 
    answer: "Answer three", 
    correctAnswer: "Answer four"
    },
    {
    question: "This is a question", 
    answer: "Answer one",
    answer: "Answer two", 
    answer: "Answer three", 
    correctAnswer: "Answer four"
    },
    {
    question: "This is a question", 
    correctAnswer: "Answer one",
    answer: "Answer two", 
    answer: "Answer three", 
    answer: "Answer four"
    },
    {
    question: "This is a question", 
    answer: "Answer one",
    answer: "Answer two", 
    correctAnswer: "Answer three", 
    answer: "Answer four"
    },
    {
    question: "This is a question", 
    correctAnswer: "Answer one",
    answer: "Answer two", 
    answer: "Answer three", 
    answer: "Answer four"
    },
    {
    question: "This is a question", 
    answer: "Answer one",
    answer: "Answer two", 
    correctAnswer: "Answer three", 
    answer: "Answer four"
    },
]; 

$(document).ready(function() {
    console.log("I'm here!")
    $("#gamePlay").hide(); 
    $("#results").hide();

    $("#startButton").on("click", function(){
        $("#startButton").hide(); 
        $("#gamePlay").show(); 
    })

}); 

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