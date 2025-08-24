
// Add Money js section 

const validPin = 1234 ; 


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

// transfer money section 

const transferPin = 1234 ;
document.getElementById('transfer-money-btn').addEventListener('click' , function(e){
    e.preventDefault()
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const transferAmount = parseInt(document.getElementById('transfer-amount').value);
    const transferAccountNumber = document.getElementById('transfer-account-number').value
    const transferPinNumber = parseInt(document.getElementById('transfer-pin-number').value);

    if(transferAccountNumber.length <11 || transferAccountNumber.length >11 ){
        alert("Please Provide valid number")
        return;
    }

    if(transferPin !== transferPinNumber){
        alert("Enter a Valid pin");
        return;
    }


    if(availableBalance < transferAmount){
        alert("Low Available Balance")
        return;
    }
    const totalTransferAvailableBalance = availableBalance- transferAmount 

    document.getElementById('available-balance').innerText = totalTransferAvailableBalance;
    
})

// toggling feature 

document.getElementById('add-btn').addEventListener('click' , function(){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById('add-money-parent').style.display = "block";
// btn style 
    const formBtn = document.getElementsByClassName('form-btn')

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById('add-btn').classList.remove("border-gray-300")
    document.getElementById('add-btn').classList.add("border-[#0874f2]","bg-[#0874f20d]")

})
document.getElementById('out-btn').addEventListener('click' , function(){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById('cash-out-parent').style.display = "block";

    // btn style 
    const formBtn = document.getElementsByClassName('form-btn')

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById('out-btn').classList.remove("border-gray-300")
    document.getElementById('out-btn').classList.add("border-[#0874f2]","bg-[#0874f20d]")
})
document.getElementById('transfer-btn').addEventListener('click' , function(){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById('transfer-parent').style.display = "block";


    // btn style 
    const formBtn = document.getElementsByClassName('form-btn')

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById('transfer-btn').classList.remove("border-gray-300")
    document.getElementById('transfer-btn').classList.add("border-[#0874f2]","bg-[#0874f20d]")
})





