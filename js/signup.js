let nameInput = document.getElementById('nameInput');
let userInput = document.getElementById('userInput');
let pwInput = document.getElementById('pwInput');
let cfInput = document.getElementById('cfInput');

let btnAdd = document.getElementById('create')
btnAdd.addEventListener('click', function(){
    let name = nameInput.value;
    let user = userInput.value;
    let pw = pwInput.value;
    let cf = cfInput.value;

    if(cf === pw && cf != '' && pw != '' && name != '' && user != ''){
        insertData(name, user, pw, cf)
        window.location.href = "homepage.html";
    }else{
        alert('Please input all information and confirm your password')
    };

    
})

function insertData(name, user, pw, cf){
    let account =`{
        fullName: ${name},
        username: ${user},
        password:  ${pw},
        confirm: ${cf}
    }`

    accountInfo.push(account);
}