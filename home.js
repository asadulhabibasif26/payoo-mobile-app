
const transactionData = []


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

    const data = {
        name:"Add Money",
        date:new Date().toLocaleTimeString() 
    }
    transactionData.push(data)
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

    const data ={
        name:"Cash Out" ,
        date:new Date().toLocaleTimeString() 
    }
    transactionData.push(data)
    
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

    const data ={
        name:"Transfer Money" ,
        date:new Date().toLocaleTimeString() 
    }
    transactionData.push(data)
    
})

// pay bill section 

const billPin = 1234 ;
document.getElementById('pay-bill-btn').addEventListener('click' , function(e){
    e.preventDefault()
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const billAmount = parseInt(document.getElementById('bill-amount').value);
    const billAccountNumber = document.getElementById('bill-account-number').value
    const billPinNumber = parseInt(document.getElementById('bill-pin-number').value);

    if(billAccountNumber.length <11 || billAccountNumber.length >11 ){
        alert("Please Provide valid number")
        return;
    }

    if(billPin !== billPinNumber){
        alert("Enter a Valid pin");
        return;
    }


    if(availableBalance < billAmount){
        alert("Low Available Balance")
        return;
    }
    const totalBillAvailableBalance = availableBalance- billAmount 

    document.getElementById('available-balance').innerText = totalBillAvailableBalance;

    const data ={
        name:"Pay Bill" ,
        date:new Date().toLocaleTimeString() 
    }
    transactionData.push(data);
})

document.getElementById('transaction-btn').addEventListener('click' , function(){
    const transactionContainer = document.getElementById('transaction-container')

    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        
        <div class="bg-white rounded-xl p-3 flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="border-2 p-3 rounded-full">
                            <img src="./assets/wallet1.png" class="mx-auto" alt="">
                        </div>
                        <div class="ml-4">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>

                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        
        `
        transactionContainer.appendChild(div)
    }
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
document.getElementById('bill-btn').addEventListener('click' , function(){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById('Bill-parent').style.display = "block";


    // btn style 
    const formBtn = document.getElementsByClassName('form-btn')

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById('bill-btn').classList.remove("border-gray-300")
    document.getElementById('bill-btn').classList.add("border-[#0874f2]","bg-[#0874f20d]")
})
document.getElementById('transaction-btn').addEventListener('click' , function(){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById('transaction-parent').style.display = "block";


    // btn style 
    const formBtn = document.getElementsByClassName('form-btn')

    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById('transaction-btn').classList.remove("border-gray-300")
    document.getElementById('transaction-btn').classList.add("border-[#0874f2]","bg-[#0874f20d]")
})






