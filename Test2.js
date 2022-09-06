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


//                          DATE OBJECTS 🕒💥
// The date object is used to work with date & times.



  let date = new Date();
  
  date = date.toLocaleString();
  // console.log(date);

  // let dayOfMonth = date.getDate()
  // let dayOfWeek = date.getDay()
  // let month = date.getMonth()
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();

  // date.setFullYear(2026);



let time = document.getElementById("time").innerText = date;




formatDate();
function formatDate(date){
  let year = date.getFullyear();
  let month = date.getMonth();
  let day = date.getDate();

return `${day}/${month}/${year}`

}

function formatTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let  suffix = hours >= 12? "pm" : "am";

  hours = (hours % 12) || 12;
  //converting to 12H CLOCK. 

return `${seconds}:${minutes}:${hours} ${suffix}`
}
