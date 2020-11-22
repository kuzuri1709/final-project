let btnAdd = document.getElementById('btnAdd')
let emailInput = document.getElementById('emailInput')
let pwInput = document.getElementById('pwInput')
let phoneInput = document.getElementById('phoneInput')
let nameInput = document.getElementById('nameInput')
let dobInput = document.getElementById('dateInput')

btnAdd.addEventListener('click', function(){
    let email = emailInput.value
    let pw = pwInput.value
    let phone = phoneInput.value
    let name = nameInput.value
    let dob = dobInput.value

    insertData(email, pw, phone, name, dob)

    emailInput.value = ''
    pwInput.value = ''
    phoneInput.value = ''
    nameInput.value = ''
    dobInput.value = ''
})

function insertData(email, pw, phone, name, dob){
    number++
    let html = `<tr>
                    <td>${number}</td>
                    <td>${email}</td>
                    <td>${pw}</td>
                    <td>${phone}</td>
                    <td>${name}</td>
                    <td>${dob}</td>
                </tr>`
    
    table.insertAdjacentHTML('beforeend', html)
}