
// let user = prompt("what is your name");
// top1.innerHTML = `Hello ${user}, Please Proced to fill the form below accurately!`
let form = document.getElementById('form')
let amtError = document.getElementById('amt_error')
let points = 0
function getLoan(){
    let balance = document.getElementById('current_bal').value
    let collect = document.getElementById('amt_to_collect').value
    let history = document.getElementById('credit-history').value
    let depositDate = document.getElementById('deposit_date').value

    let lastCollect = document.getElementById('collection_date').value
    let repayment = document.getElementById("repayment").value
    let accounType = document.getElementById("account_type").value
let finish = document.getElementById('finish')

     if(balance > collect){
        points = points +10
       top1.innerHTML = `Hello ${user}, Please Proced to fill the form below accurately!`
        // console.log(points)
     }else{
        points = points -10
        // console.log(points)
     }
     if (history === 'high') {
        points = points +10
        // console.log(points)
     }
    if (depositDate === 'high_1month') {
        points = points +5
        console.log(points)
    }
     if (lastCollect === 'col_high') {
        points = points +10
        // console.log(points)

     }

     if (accounType === 'current' ){
        points = points +10
        console.log(points)
     }else{
        points = points +5
        // console.log(points)
     }
     if (repayment === 'high_repay') {
        points = points +5  
     }
     if(points >= 30){
       
        alert (`Congratulation ${user}, Your Loan With Nas-Pay  has been Approved!!`)
        location.reload();
       
        console.log('congrats')
     }else{
        console.log(points)
       

        alert (`Dear ${user}! We are sorry but you can't get a Loan From us today contact our customer care agent to confirm if you're eligible before appling again thank you!!`)
        location.reload();
        
        console.log('Try again later')
     }
     document.getElementById('loan-form').reset();
window.scrollTo(0, 0);

}