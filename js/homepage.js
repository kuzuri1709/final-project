let level1 = document.getElementById('level1')
let level2 = document.getElementById('level2')
let level3 = document.getElementById('level3')

level1.addEventListener('click', function(){
    renderQuestions(randomQuestion(DATA.level_1));
})
level2.addEventListener('click', function(){
    renderQuestions(randomQuestion(DATA.level_2));
})