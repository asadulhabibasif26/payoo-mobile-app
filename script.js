document.getElementById('login-btn').addEventListener('click' , function(e){
    e.preventDefault();
    const mobileNumber = 1799954218 ;
    const pinNumber = 1234;
    
    const mobileNumberValue = document.getElementById('mobile-number').value ;
    const mobileNumberValueCon = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value ;
    const pinNumberValueCon = parseInt(pinNumberValue);

    if(mobileNumberValueCon === mobileNumber && pinNumberValueCon === pinNumber){
        window.location.href="./home.html"
    }
    else if(mobileNumberValueCon === mobileNumber && pinNumberValueCon !== pinNumber){
        alert('PIN Number is Wrong')
    }
    else if(mobileNumberValueCon !== mobileNumber && pinNumberValueCon == pinNumber){
        alert('Mobile Number is Wrong')
    }
    else{
        alert('Mobile number and Password Incorrect')
    };
})