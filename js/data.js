const DATA = {
    level_1: [
        {
            question: '1 + 1 = ?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 1
        },
    ],

    level_2: [

    ]
    
}
console.log(DATA.level_1[0].correctAnswer)

let accountInfo = [
    // {
    //     fullName: ,
    //     username: ,
    //     password:  ,// At least 1 uppercase, 1 number, 1 lowercase, 1 special character
    //     confirm:
    // }
]

let nameInput = document.getElementById('nameInput')
let userInput = document.getElementById('userInput')
let pwInput = document.getElementById('pwInput')
let cfInput = document.getElementById('cfInput')

let btnAdd = document.getElementById('create')
btnAdd.addEventListener('click', function(){
    let name = nameInput.value
    let user = userInput.value
    let pw = pwInput.value
    let cf = cfInput.value

    if(cf === pw){
        insertData(name, user, pw, cf)
    }else{
        alert('Please repeat your password')
    }

    
})

function insertData(name, user, pw, cf){
    let account =`{
        fullName: ${name},
        username: ${user},
        password:  ${pw},
        confirm: ${cf}
    }`

    accountInfo.push(account)
}

insertData('haha', 'huhu', 'hehe', 'hehe')
insertData('haha1', 'huhu2', 'hehe3', 'hehe3')


// DATA[0].options[DATA.correctAnswer]