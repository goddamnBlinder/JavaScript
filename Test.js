function SumbitForm(){



}

 

// document.getElementById("IncreaseBtn").onclick = function (){
//   count+=1;
//   document.getElementById("countLabel").innerHTML = count;

// }


// document.getElementById("DecreaseBtn").onclick = function(){
//   count-=1;
//   document.getElementById("countLabel").innerHTML = count;
  
// }



// document.getElementById("resetBtn").onclick = function (){
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;

// }


// let increaseBtn = document.getElementById("IncreaseBtn");
// let decreaseBtn = document.getElementById("DecreaseBtn");
// let resetBtn = document.getElementById("resetBtn");
// let  counter = document.getElementById("countLabel");
// let count = counter.innerHTML;



// increaseBtn.addEventListener('click', increaseCount)
// decreaseBtn.addEventListener('click', decreaseCount)
// resetBtn.addEventListener('click', resetCount)

// function increaseCount(){
//   count++;
//   counter.innerText = count;
  
// }

// function decreaseCount(){
//   count--;
//   if(count < 0){
//     count = 0;
  
//   }else{
//     counter.innerText = count;
//   }
//   console.log(count);
// }


// function resetCount(){
//   counter.textContent = 0;
// }

                                                        //  Radom Time


let changeButton = document.getElementById("RandomBtn");

let  dee = document.getElementById("Jagaban");
let hp = dee.innerText;


changeButton.addEventListener("click", change)


function change(){

  count = Math.floor(Math.random());
  console.log(count);

}


