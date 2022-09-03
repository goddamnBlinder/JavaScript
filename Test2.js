// set Timeout() = invokes a function after a number of milliseconds 
//                 asynchronous function (dosen't pause execution)


setTimeout (firstMessage, 3000)
setTimeout (secondMessage, 6000)
setTimeout (thirdMessage, 9000)


function firstMessage(){
    alert("Buy this course for $10")
}
function secondMessage(){
    alert("Ths is not a scam!");
}
function thirdMessage(){
    alert("Thanks in Advance")
}

document.getElementById('Buy')