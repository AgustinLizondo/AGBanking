//Button
var button = document.getElementById("button");
var nav = document.getElementById("nav");
var depositBlock = document.querySelector(".depositBlock");
var depositInput = document.getElementById("depositInput");
var buttonDeposit = document.getElementById("buttonDeposit");
var depositAmount = 0;
var saldoActual = 0;
var actualBalance = document.getElementById("actualBalance");


button.addEventListener("click", ()=>{
    nav.classList.toggle("hidden");
    nav.classList.toggle("shown");
    depositBlock.classList.toggle("notBlurred");
    depositBlock.classList.toggle("blurred");
})

//Deposit


var updateBalance = ()=>{
    actualBalance.innerHTML = `<p> Actual Balance: $${saldoActual} </p>`
    accountInput.value = null;
}
var deposit = ()=>{
    depositAmount = parseInt(depositInput.value);
    saldoActual += depositAmount;
    alert("Your deposit has been done successfully");
    depositInput.value = null;
    updateBalance();
}

actualBalance.innerHTML = `<p> Actual Balance: $${saldoActual} </p>`


if (depositInput.value != null){
    buttonDeposit.addEventListener("click", deposit);
}else{
    alert("Invalid amount")
}