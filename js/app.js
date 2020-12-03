let options = document.querySelectorAll('.options');
let quizHeader = document.querySelectorAll('.quizHeader span');
// let label = document.querySelectorAll('.option .choices')

function renderQuestions(attempt) {
    for(let i = 0; i<attempt.length; i++){
        quizHeader[i].textContent = attempt[i].question;

        let labelOption = options[i].children;
        
        for(let j = 0; j<labelOption.length; j++){
            labelOption[j].children[1].textContent = attempt[i].options[j];

            labelOption[j].addEventListener('click', function(){
                labelOption[j].children[0].checked = true
            })
        }

        
    }



    

}

renderQuestions(randomQuestion(DATA.level_1));