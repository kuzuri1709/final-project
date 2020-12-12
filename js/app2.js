let options = document.querySelectorAll('.options');
let quizHeader = document.querySelectorAll('.quizHeader span');
let finalBox = document.querySelector('#resulT');
let contentQuiz = document.querySelector('#contentQuiz');


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
}


let questions = randomQuestion(DATA.level_2);
renderQuestions(questions);

let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', function () {

    let answers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    for (let i = 0; i < options.length; i++) {
        let labelOption = options[i].children;

        for (let j = 0; j < labelOption.length; j++) {
            if (labelOption[j].children[0].checked == true) {
                answers[i] = j;
            }
        }
    }
    console.log(answers);

    let time = document.getElementById('timer').innerHTML;
    let timeDisplay = time.split(/[:]/);
    stopTimer();
    checkAnswer(questions, answers);
    // console.log(timeDisplay)


})

function stopTimer() {
    // document.getElementById('timer') 
    // isStop = true;
    clearTimeout(myTime);
}

function checkAnswer(x, y) {
    let score = 0;
    let result = 0;
    for (let i = 0; i < questions.length; i++) {
        if (y[i] == x[i].correctAnswer) {
            score++;
        }
    }

    result = ((score / 10) * 100) + '%';
    console.log(score);
    console.log(result);
    
    finalBox.style.display = 'block';
    contentQuiz.style.display = 'none';
    document.getElementById('score').innerHTML = score + '/10';
    document.getElementById('Result').innerHTML = result;
    document.getElementById('timE'),innerHTML = timeDisplay;
}