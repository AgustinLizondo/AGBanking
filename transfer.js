//Button
var button = document.getElementById("button");
var nav = document.getElementById("nav");
var transferBlock = document.querySelector(".transferBlock");

button.addEventListener("click", ()=>{
    nav.classList.toggle("shown");
    transferBlock.classList.toggle("notBlurred");
    transferBlock.classList.toggle("blurred");
})

//Transfer
var actualBalance = document.getElementById("actualBalance");
var saldoActual = 1000;
var buttonTransfer = document.getElementById("buttonTransfer");
var transferInput = document.getElementById("transferInput");
var transferAmount = 0;

var updateBalance = ()=>{
    actualBalance.innerHTML = `<p> Actual Balance: $${saldoActual} </p>`
}
var transfer = ()=>{
    transferAmount = parseInt(transferInput.value);
    if (saldoActual >= transferAmount){
        saldoActual -= transferAmount;
        alert("Your transfer was sent successfully");
        updateBalance();
    }else{
        alert("Your balance is not enough");
    }
}

actualBalance.innerHTML = `<p> Actual Balance: $${saldoActual} </p>`

if (transferInput.value != null || transferInput.value != undefined || isNaN(transferInput.value)){
    buttonTransfer.addEventListener("click", transfer);
}else{
    alert("Invalid amount")
}



