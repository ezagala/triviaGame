$(document).ready(function() {
    $("#gamePlay").hide(); 
    $("#results").hide();

    $("#startButton").on("click", function(){
        console.log($("#gamePlay").find($(".question")).length)
        $("#startButton").hide(); 
        $("#gamePlay").show(); 
        timer.start();  
        answerLogic(); 
    })

    $("#doneButton").on("click", done); 

    $("#resetButton").on("click", function(){
        location.reload();  
    })

}); 

var correctAnswers = 0; 
var incorrectAnswers = 0; 
var unanswered = 0; 

var answerLogic = function() {
    $("input").on("click", function(){
        console.log()
        //Capture the correct class of the clicked radio button
        var $correct = $(this).context.className;
        // Capture the question div this input lives in 
        var $parent = $(this).context.offsetParent;
        // Logic that determines what variables should be updated

        if ($correct) {
            correctAnswers++;
            console.log("correct " + correctAnswers);
            $parent.remove(); 
        } else {
            incorrectAnswers++;
            console.log("incorrect " + incorrectAnswers);
            $parent.remove();
        }
    })
}

// Function that ends game play and displays results
var done = function (){
    unanswered += $("#gamePlay").find($(".question")).length;
    $("#gamePlay").remove(); 
    $("#results").show();
    $("#correctAnswers").text(' ' + correctAnswers);
    $("#incorrectAnswers").text(' ' + incorrectAnswers); 
    $("#unanswered").text(' ' + unanswered); 
}

var timer = {
    time: 45, 
    start: function() {
        setInterval(timer.count, 1000); 
    },
    count: function(){
        if (timer.time !== 0) {
        timer.time--
        var converted = timer.timeConverter(timer.time);
        // console.log(converted); 
        $("#displayTime").text(' ' + converted)
        } 
        // This else statement ends the game if the timer runs to zero
        else {
            done(); 
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
        When an answer is selected: 
            1: Remove that question div from the page 
            2: Update incorrect/correct variable
        
If the done button is clicked or the timer runs out : 
    1: Hide the gamePlay div 
    2: Retrieve values from correct/incorrect variables
    3: Update unanswered variable 
    4: Display the results div with appended values 

*/