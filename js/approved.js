const username = localStorage.getItem('username')
;
console.log(username)
// let username = document.getElementById('')

// import {username} from 'js/script.js'
let approved = document.getElementById('approved')
approved.innerHTML = `Congratulation ${username}, Your Loan With Nas-Pay  has been Approved!!`;