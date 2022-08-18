


document.getElementById('btn-deposit').addEventListener('click', function(){

    // Get 'deposit-field'
    const depositField      = document.getElementById('deposit-field');
    const depositFieldNum   = parseFloat(depositField.value);


    // Get Balance Summary
    const depositAmount     = document.getElementById('deposit-amount');
    const depositAmountNum  = parseFloat(depositAmount.innerText);

    const balanceAmount     = document.getElementById('balance-amount');
    const balanceAmountNum  = parseFloat(balanceAmount.innerText);


    // Function Code 
    if(typeof depositFieldNum === 'number' && isNaN(depositFieldNum) !== true){
        depositAmount.innerText =  depositAmountNum + depositFieldNum;
        balanceAmount.innerText =  balanceAmountNum + depositFieldNum;
    } else {
        alert('Please input a number value.');
    }

    depositField.value = ''; // Clear input field.
});


document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    // Get 'withdraw-field'
    const withdrawField     = document.getElementById('withdraw-field');
    const withdrawFieldNum  = parseFloat(withdrawField.value);


    // Get Balance Summary
    const withdrawAmount     = document.getElementById('withdraw-amount');
    const withdrawAmountNum  = parseFloat(withdrawAmount.innerText);

    const balanceAmount     = document.getElementById('balance-amount');
    const balanceAmountNum  = parseFloat(balanceAmount.innerText);

    // Function Code 
    if(typeof withdrawFieldNum === 'number' && isNaN(withdrawFieldNum) !== true){
        
        if(balanceAmountNum >= withdrawFieldNum){
            withdrawAmount.innerText =  withdrawAmountNum + withdrawFieldNum;
            balanceAmount.innerText =  balanceAmountNum - withdrawFieldNum;
        } else {
            alert('You dont have that much amount of money.');
        }  
    } else {
        alert('Please input a number value.');
    }

    withdrawField.value = ''; // Clear input field.
});