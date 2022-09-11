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
//asynchronous code = Out of sequence. Ex. ▪ Access a databaase ▪ Fetch a file ▪ Task that takes time (start now,   finish somtime later) 

console.log("START");
setTimeout(() => console.log("this is a asynchronous code"), 5000);
console.log("END");


//Console.time() = starts a timer you can use to track how long an operation takes, gives each timer a unique name.

console.time("Response time");

setTimeout(() => console.log("Hello world, what\'s good"), 4000)

console.timeEnd("Response time");

//                                                                            PROMISE 🐾😀
//object that encapsulates the result of an asynchronous operation, let asynchronous methods return values like synchrous metthods."I promise" to return something in the future 🥰" 
// here, we pretend we are trying to load a file.


const promise = new Promise((resolve, reject) => {
let fileLoaded = true;


if (fileLoaded) {
  resolve("this file sure has load");
}

else {
  reject("file not loaded");
}


});

//the STATE is 'pending' then: 'fulfilled' or 'rejected'
// the RESULT is what can be returned   (2 part producing 🔼 and the consuming 🔽)

promise.then(value => console.log(value))
      .catch(error => console.log(error));


//example 2

const  wait = new Promise(resolve => {

setTimeout(resolve, 5000);

});
wait.then(() => console.log("Thanks for waiting!"))


//                                                                 ASYNC 🔃 = it makes a function returns a promise


async function loadFile(){
  let fileLoaded = false;


if (fileLoaded) {
   return "File loaded";
}

else { 
 throw "file not loaded";
}

}
  loadFile().then(value => console.log(value))
  .catch(error => console.log(error));

 // example 2
 // but is more syntax.


 function load(){
  let fileLoaded = false;


if (fileLoaded) {
   return Promise.resolve("File loaded");
}

else { 
return Promise.reject("file not loaded");
}

}
  load().then(value => console.log(value))
  .catch(error => console.log(error));

//                                                                      AWAIT ✋  = It makes an async wait for a promIse.

async function file(){
  let fileLoaded = true;


if (fileLoaded) {
   return "File loaded";
}

else { 
 throw "file not loaded";
}
}
let message = await file();
console.log(message);
