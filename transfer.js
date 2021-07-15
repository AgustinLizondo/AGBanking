var actualBalance = document.getElementById("actualBalance");
var saldoActual = 0;
var buttonTransfer = document.getElementById("buttonTransfer");
var transferInput = document.getElementById("transferInput");
var accountInput = document.getElementById("accountInput")
var transferAmount = 0;

//Button
var transferBlock = document.querySelector(".transferBlock");
var button = document.getElementById("button");
var nav = document.getElementById("nav");

button.addEventListener("click", ()=>{
    nav.classList.toggle("hidden");
    nav.classList.toggle("shown");
    transferBlock.classList.toggle("notBlurred");
    transferBlock.classList.toggle("blurred");
})

//Transfer

var updateBalance = ()=>{
    actualBalance.innerHTML = `<p> Actual Balance: $${saldoActual} </p>`
    transferInput.value = null;
    accountInput.value = null;
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

actualBalance.innerHTML = `<p> Actual Balance: $${saldoActual} </p>`;


if (transferInput.value != null){
    buttonTransfer.addEventListener("click", transfer);
}else{
    alert("Invalid amount");
}