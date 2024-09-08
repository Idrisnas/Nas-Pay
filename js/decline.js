const username = localStorage.getItem('username', 'username')
;
console.log(username)
// let username = document.getElementById('')

// import {username} from 'js/script.js'
let decline = document.getElementById('decline')
decline.innerHTML = `sorry ${username}, Your Loan With Nas-Pay  has been dispproved!!`;
