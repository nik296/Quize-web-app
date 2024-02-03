const questions = [
    {
        question: "what year did Bitcoin launch ?",
        answers: [
            {text: "2008", correct: false},
            {text: "9 January 2009", correct: true},
            {text: "2010", correct: false},
            { text : "Ma chudaye Bitcoin", correct: false},
        ]
    },
    {
        question: "what is the name of car that ran over Sahil Thakur?",
        answers: [
            {text: "Alto 800", correct: false},
            {text: "Ye kab hua Macho", correct: false},
            {text: "Fortuner", correct: true},
            { text : "Tata Sumo", correct: false},
        ]
    },
    {
        question: "who does Sahil Sharma loves the most?",
        answers: [
            {text: "shristi", correct: false},
            {text: "Anamika Rangra", correct: false},
            {text: "Sarkari nokri", correct: true},
            { text : "Shivani", correct: false},
        ]
    },
    {
        question: "what crime was shubham accused of?",
        answers: [
            {text: "hit and run", correct: false},
            {text: "cheating in TT match", correct: false},
            {text: "sexual harasment", correct: true},
            { text : "theft", correct: false},
        ]
    },
    {
        question: "what is Harsh most afraid of?",
        answers: [
            {text: "dying as a virgin", correct: false},
            {text: "Hernia", correct: false},
            {text: "getting caught with a minor", correct: false},
            { text : "all of the above", correct: true},
        ]
    },
     {
        question: "Jagtap will return from Delhi with?",
        answers: [
            {text: "Damaged kidney and lungs", correct: false},
            {text: "lot's pf coding and job experiance", correct: false},
            {text: "15000rs in Cash", correct: false},
            { text : "all of the above", correct: true},
        ]
    }

];
const questionElement=document.getElementById("question");
const answerButton  = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
 currentQuestionIndex =0;
 score=0;
 nextButton.innerHTML ="Next";
 showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
     
    currentQuestion.answers.forEach(answer =>{
         const button = document.createElement("button");
         button.innerHTML= answer.text;
         button.classList.add("btn");
         answerButton.appendChild(button);
         if(answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", selectAnswer);
     });
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}  


function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled = "true";

});

nextButton.style.display ="block";

}
 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`
    nextButton.innerHTML = "fir se khelega lode?";
    nextButton.style.display = "block";

 }



function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex< questions.length){
        showQuestion();
     }
     else{
        showScore();
     }
}
  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
  })
startQuiz();
