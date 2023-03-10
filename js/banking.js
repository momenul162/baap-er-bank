// Add event listener for doposit
document.getElementById("deposit-button").addEventListener("click", function () {
  // get input amount
  const depositInputAmount = document.getElementById("deposit-amount");
  const newDepositText = depositInputAmount.value;
  const newDepositTotal = parseFloat(newDepositText);

  // transfer input to deposit
  const totalDeposit = document.getElementById("total-deposit");
  const previousDepositText = totalDeposit.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  // Add deposit
  const totalDepositAmount = previousDepositAmount + newDepositTotal;
  totalDeposit.innerText = totalDepositAmount;
  // Update balance
  const totalBalance = document.getElementById("total-balance");
  const previousBalanceText = totalBalance.innerText;
  const previousBalancetotal = parseFloat(previousBalanceText);
  // Add deposit balance
  const totalCurrentBalance = previousBalancetotal + newDepositTotal;
  totalBalance.innerText = totalCurrentBalance;
  //  clean input field
  depositInputAmount.value = "";
});

// Add event listener for withdraw
document.getElementById("withdraw-button").addEventListener("click", function () {
  // input amount for withdraw
  const withdrawAmount = document.getElementById("withdraw-amount");
  const newWithdrawText = withdrawAmount.value;
  const newWithdrawTotal = parseFloat(newWithdrawText);
  // transfer input to withdraw
  const totalWithdraw = document.getElementById("total-withdraw");
  const previousWithdrawText = totalWithdraw.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  // Add withdraw
  const totalWithdrawAmount = previousWithdrawTotal + newWithdrawTotal;
  totalWithdraw.innerText = totalWithdrawAmount;
  // update balance
  const totalCurrentBalance = document.getElementById("total-balance");
  const currentBalanceText = totalCurrentBalance.innerText;
  const currentBalanceTotal = parseFloat(currentBalanceText);
  // Reduse main balance
  const currentBalance = currentBalanceTotal - newWithdrawTotal;
  totalCurrentBalance.innerText = currentBalance;
  // clear input field
  withdrawAmount.value = "";
});
