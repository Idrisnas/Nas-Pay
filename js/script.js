
let username = prompt("Welcome! What is your name?");
        document.getElementById('top1').innerHTML = `Hello ${username}, Please proceed to fill the form below accurately!`;

        localStorage.setItem('username', username);
        let points = 0;

        function getLoan() {
            //  form values
            let currentBal = document.getElementById("current_bal").value;
            let loanAmount = document.getElementById("amt_to_collect").value;
            let creditHistory = document.getElementById("credit-history").value;
            let depositDate = document.getElementById("deposit_date").value;
            let collectionDate = document.getElementById("collection_date").value;
            let repayment = document.getElementById("repayment").value;
            let accountType = document.getElementById("account_type").value;

            let isValid = true;

            if (currentBal === "") {
                document.getElementById("aErr").textContent = "Please enter your current balance.";
                isValid = false;
            }

            if (loanAmount === "") {
                document.getElementById("bErr").textContent = "Please enter the loan amount needed.";
                isValid = false;
            }

            if (creditHistory === "") {
                document.getElementById("cErr").textContent = "Please select your credit history.";
                isValid = false;
            }

            if (depositDate === "") {
                document.getElementById("dErr").textContent = "Please select the last deposit date.";
                isValid = false;
            }

            if (collectionDate === "") {
                document.getElementById("eErr").textContent = "Please select the last loan collection date.";
                isValid = false;
            }

            if (repayment === "") {
                document.getElementById("fErr").textContent = "Please select the loan repayment period.";
                isValid = false;
            }

            if (accountType === "") {
                document.getElementById("gErr").textContent = "Please select the account type.";
                isValid = false;
            }

            //  scoring and submission
            if (isValid) {
                if ((currentBal) > (loanAmount)) {
                    points += 10;
                } else {
                    points -= 10;
                }
console.log (points)
                if (creditHistory === 'high') {
                    points += 10;
                }

                if (depositDate === 'high_1month') {
                    points += 5;
                }

                if (collectionDate === 'col_high') {
                    points += 10;
                }

                if (accountType === 'current') {
                    points += 10;
                } else {
                    points += 5;
                }

                if (repayment === 'high_repay') {
                    points += 5;
                }

                if (points >= 30) {
                    window.open('approved.html');
                  console.log(points)
                } else {
                  console.log(points)

                    window.open('decline.html');
                }

                // Reset form and points
                points = 0;
                document.getElementById('loan-form').reset();
            }
        }