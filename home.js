
// Add Money js section 

const validPin = 1122 ; 


document.getElementById('add-money-btn').addEventListener('click' , function (e){
    e.preventDefault();
    const bank = document.getElementById('bank').value ; 
    const accountNumber = document.getElementById('account-number').value ;
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const addPinNumber = parseInt(document.getElementById('add-pin-number').value);
    
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length <11 || accountNumber.length >11 ){
        alert("Please Provide valid number")
        return;
    }

    if(addPinNumber !== validPin){
        alert("Enter a Valid pin");
        return;
    }

    const totalNewAvailableBalance = addAmount + availableBalance ; 

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})

// Cash out money section 
const cashOutPin = 1234 ;
document.getElementById('cash-out-btn').addEventListener('click' , function(e){
    e.preventDefault()
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const cashOutAmount = parseInt(document.getElementById('out-amount').value);
    const outAccountNumber = document.getElementById('out-account-number').value
    const outPinNumber = parseInt(document.getElementById('out-pin-number').value);

    if(outAccountNumber.length <11 || outAccountNumber.length >11 ){
        alert("Please Provide valid number")
        return;
    }

    if(outPinNumber !== cashOutPin){
        alert("Enter a Valid pin");
        return;
    }


    if(availableBalance < cashOutAmount){
        alert("Low Available Balance")
        return;
    }
    const totalOutAvailableBalance = availableBalance- cashOutAmount 

    document.getElementById('available-balance').innerText = totalOutAvailableBalance;
    
})

// toggling feature 

document.getElementById('add-btn').addEventListener('click' , function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})
document.getElementById('out-btn').addEventListener('click' , function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})


