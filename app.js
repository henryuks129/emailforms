'use strict'

// let email = document.querySelector('#email')
// let password = document.querySelector('#password')
let button = document.querySelector('#btn')

button.addEventListener('click', ()=>{
    let body = document.body.style
    let emailInput = document.getElementById('email').value
    let passwordInput = document.getElementById('password').value
    if(!emailInput || !passwordInput){
        body.backgroundColor = 'red'
        alert('Input email and password')
    }else if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
    }else if(emailInput.type === 'email'){
        emailInput.type = 'text'
    }else if(!emailInput.includes('@','.com','gmail') && !passwordInput.length < 6){
        alert('must include @, gamil, .com')
    }else if(passwordInput.length < 6){
        alert('password must contain more than 6 characters')
    }else if(emailInput.includes('@','gmail','.com') && passwordInput.length >= 6){
        body.backgroundColor = 'green'
        alert('congratulations,registration completed!')
    }
})


