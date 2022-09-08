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



  // let date = new Date();
  
  // date = date.toLocaleString();
  // console.log(date);

  // let dayOfMonth = date.getDate()
  // let dayOfWeek = date.getDay()
  // let month = date.getMonth()
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();

  // date.setFullYear(2026);
  const time = document.getElementById("time");


update();
setInterval(update, 1000)
//just as practiced, here for evey 1000ms it will update to show how the seconds counts


 function update(){
      let date = new Date();
      time.innerHTML = formatTime(date);


      
    function formatTime(date){
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let  suffix = hours >= 12? "pm" : "am";

      hours = (hours % 12) || 12;
      //converting to 12H CLOCK. 

      hours = formatZeroes(hours);
      minutes  = formatZeroes(minutes);
      seconds = formatZeroes(seconds);
      //this is a create a leading zero in the time the function is right below.
      
    return `${hours}:${minutes}:${seconds} ${suffix}`

    }

    function formatZeroes(time){
      time = time.toString();
      return time.length < 2 ? "0" + time : time;
    }
 }

// formatDate();


// function formatDate(date){
//   let year = date.getFullyear();
//   let month = date.getMonth();
//   let day = date.getDate();

// return `${day}/${month}/${year}`

// }


// Synchoronous coode = In an Ordered sequence, step-by-step linear instructions(Start now, finish bow)
//asynchro
