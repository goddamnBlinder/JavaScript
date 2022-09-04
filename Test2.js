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

let date = new Date (0);
// let date = new Date (2023, 1, 2, 3, 4, 6);
//    let date = new Date ("2034, may 15, 12:09:23")

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let Month = date.getMonth();
let week = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
*/



// date.setFullYear(2020);
// date.setMonth(7);
// date.setDate(17);
// date.setHours(4)
// date.setMinutes(17)
// date.setSeconds(59);






console.log(formatDate());

// date = date.toLocaleString();
document.getElementById("date").textContent = 12;
//function to format the date
timeForomat(date);
formatDate(date);

function formatDate(date){
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDate();



return `${day}/${month}/${year}`

}
function timeForomat(date){
  let hours = date.getHours();
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  return `${hours}:${minutes}:${seconds}`
}

