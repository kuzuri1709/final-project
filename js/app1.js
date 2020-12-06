let options = document.querySelectorAll('.options');
let quizHeader = document.querySelectorAll('.quizHeader span');
let questions;
// let label = document.querySelectorAll('.option .choices')


function renderQuestions(attempt) {
    for (let i = 0; i < attempt.length; i++) {
        quizHeader[i].textContent = attempt[i].question;

        let labelOption = options[i].children;

        for (let j = 0; j < labelOption.length; j++) {
            labelOption[j].children[1].textContent = attempt[i].options[j];

            labelOption[j].addEventListener('click', function () {
                labelOption[j].children[0].checked = true

            })
        }


    }

    questions = attempt;
    console.log(questions);
}

function checkAnswer(answers) {
    let score = 0;
    for(let i = 0; i < questions.length; i++){
        if(questions[i].correctAnswer == answers[i]){
            score ++;
        }
    }
    return score;
}


renderQuestions(randomQuestion(DATA.level_1))

let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', function () {

    let answers = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    for (let i = 0; i < options.length; i++) {
        let labelOption = options[i].children;

        for (let j = 0; j < labelOption.length; j++) {
            if(labelOption[j].children[0].checked == true){
                answers[i] = j;
            }
        }
    }
    // console.log(answers);

    let time = document.getElementById('timer').innerHTML;
    let timeDisplay = time.split(/[:]/)
    
    
    // console.log(timeDisplay)
})

function stopTimer(){
    
}