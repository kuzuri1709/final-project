let userLogin = document.getElementById('username');
let passwordLogin = document.getElementById('password');

function checkAcc(x){
    let user = userLogin.value;
    let pw = passwordLogin.value;

    if(user == x[0].username && pw == x[0].password){
        window.location.href = "homepage.html";
    }else{
        alert('Incorrect data!');
    }
}

let btnCheck = document.getElementById('siGn');
btnCheck.addEventListener('click', function(){
    checkAcc(accountInfo);
})