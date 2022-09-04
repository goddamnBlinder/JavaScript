// set Timeout() = invokes a function after a number of milliseconds 
//                 asynchronous function (dosen't pause execution)


// let item = "cryptocurrency";
// let price = 420

// let timer = setTimeout (firstMessage, 3000)
// let timer2 = setTimeout (secondMessage, 6000)
// let timer3 = setTimeout (thirdMessage, 9000)


// function firstMessage(){
//     alert(`Buy this ${item} for $${price}`);
// }
// function secondMessage(){
//     alert("Ths is not a scam!");
// }
// function thirdMessage(){
//     alert("Thanks in Advance");
    
// }

// document.getElementById('Buy').onclick = function (){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert('thanks again, for buying')
// }



// setInterval() = a function repeatedly after a number of milliseconds 
//                 asynchronous function (doesn't pause execution)

// let count = 0;
// count = Number(count);
// let max = window.prompt("Count up to what number?");
// max = Number(max);


// const myTimer = setInterval(countup, 10, );

// function countup(){
//     count+=1;
//     console.log(count);

//     if(count >= max){
//         clearInterval(myTimer)
//     }
// }


//                          DATE OBJECTS 🕒🕚🔹🔳
// The date object is used to work with date & times.

// let date = new Date (0);
// let date = new Date (2023, 1, 2, 3, 4, 6);
//    let date = new Date ("2034, may 15, 12:09:23")


let year = date.getFullYear();
let dayOfMonth = date.getDate();
let Month = date.getMonth();
let week = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds


date = date.toLocaleString();
document.getElementById('date').innerHTML = dayOfMonth;

