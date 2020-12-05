


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

    if(cf === pw && cf != '' && pw != ''){
        insertData(name, user, pw, cf)
        window.location.href = "homepage.html";
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




// DATA[0].options[DATA.correctAnswer]

