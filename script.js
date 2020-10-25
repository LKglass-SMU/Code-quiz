
var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");
var quizCount = document.querySelector("#quiz-count")


var button = document.querySelector("#startb");
button.addEventListener("click", function () {
    startQuiz();
    timer();
    examChallenge
})
 
var quesAnw = [{
    title: "question made up",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "",
},
{
    title: "questions a",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "",

},
{
    title: "question made up",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "",
},
{
    title: "questions a",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "",

},
]

function startQuiz() {

    startScreen.classList.toggle("hidden");
    quizScreen.classList.toggle("hidden");

}
var seconds = 60;

var glass = document.querySelector("#Kendra");


function examChallenge(){
    for (var i= 0; i< quesAnw.length; i++);
    glass.innerHTML= "testing";
    console.log(examChallenge);
}

var timerDisplay = document.getElementById("timer-display");

function timer() {

event.preventDefault();
setInterval(function(){
seconds--;
timerDisplay.textContent="Timer " + seconds;
}, 1000);
}

//when checking for results

//var seconds = 60;
//   var intervalID = setInterval(function(){
//       seconds--
//    }, 1000)
//clearInterval(intervalID)
//time +=10;
//time -=10;