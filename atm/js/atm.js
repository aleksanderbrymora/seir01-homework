$(document).ready(function(){


  const colorCheck = function(){
    if (checkBalance() === 0){
      $('#checking-balance').css('background-color', 'red');
    }
    if (checkBalance() !== 0){
      $('#checking-balance').css('background-color', '#E3E3E3');
    }
    if (savingsBalance() === 0){
      $('#savings-balance').css('background-color', 'red');
    }
    if (savingsBalance() !== 0){
      $('#savings-balance').css('background-color', '#E3E3E3');
    }
  }


  const checkBalance = function(){
    return parseFloat($('#checking-balance').text().slice(1));
  };


  const checkDeposit = function(){
    return parseFloat($('#checking-amount').val()) + checkBalance();
  };


  const checkWithdraw = function(amount){
    if (checkBalance() >= amount){
      return checkBalance() - amount;
    } else {
        if (checkBalance() < amount){
          if ((checkBalance() + savingsBalance()) < amount){
            alert ("insufficient funds")
            return checkBalance();
          } else {
            alert ("you've overdrafted your account");
            let currentBalance = checkBalance();
            let overdraft = amount - currentBalance;
            $('div #savings-balance').text(`$${savingsWithdraw(overdraft)}`);
            return checkBalance() - currentBalance;
          }
        }
    }
  };


  $('#checking-deposit').click(function(){
    $('div #checking-balance').text(`$${checkDeposit()}`);
    colorCheck();
  });

  $('#checking-withdraw').click(function(){
    $('div #checking-balance').text(`$${checkWithdraw(parseFloat($('#checking-amount').val()))}`);
    colorCheck();
  });


  //SAVINGS
  const savingsBalance = function(){
    return parseFloat($('#savings-balance').text().slice(1));
  };


  const savingsDeposit = function(){
    return parseFloat($('#savings-amount').val()) + savingsBalance();
  };


  const savingsWithdraw = function(amount){
    if (savingsBalance() >= amount){
      return savingsBalance() - amount;
    } else {
        if (savingsBalance() < amount){

          if ((savingsBalance() + checkBalance()) < amount){
            alert ("insufficient funds")
            return savingsBalance();
          } else {
            alert ("you've overdrafted your account");
            let currentBalance = savingsBalance();
            let overdraft = amount - currentBalance;
            $('div #checking-balance').text(`$${checkWithdraw(overdraft)}`);
            return savingsBalance() - currentBalance;
          }
        }
    }
  };


  $('#savings-deposit').click(function(){
    $('div #savings-balance').text(`$${savingsDeposit()}`);
    colorCheck();
  });

  $('#savings-withdraw').click(function(){
    $('div #savings-balance').text(`$${savingsWithdraw(parseFloat($('#savings-amount').val()))}`);
    colorCheck();
  });


});
