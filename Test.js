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


let increaseBtn = document.getElementById("IncreaseBtn");
let decreaseBtn = document.getElementById("DecreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let  counter = document.getElementById("countLabel");
let count = counter.innerHTML;



increaseBtn.addEventListener('click', increaseCount)
decreaseBtn.addEventListener('click', decreaseCount)
resetBtn.addEventListener('click', resetCount)

function increaseCount(){
  count++;
  counter.innerText = count;
  
}

function decreaseCount(){
  count--;
  if(count < 0){
    count = 0;
  
  }else{
    counter.innerText = count;
  }
  console.log(count);
}


function resetCount(){
  counter.textContent = 0;
}

                                                 //  Radom Number


let changeButton = document.getElementById("RandomBtn");
let resetB = document.getElementById("reset");
let  dee = document.getElementById("Jagaban");
let viewbox = dee.innerHTML;
console.log(viewbox);


changeButton.addEventListener("click", change)
resetB.addEventListener("click", remove)


function change(){

  viewbox = Math.floor(Math.random() * 33 );
console.log(viewbox);
dee.innerHTML= viewbox

}

function remove(){
  viewbox = 0;
  console.log(viewbox);
  dee.innerHTML = viewbox
}


// Hex color changer 

var btn = getElementById("change");
var see = getElementById("chnger");

var generator = function(){
    newColor = '#' + 
       (Math.random()* 0xFFFFF<<0).toString(16);
    console.log(newColor.length);
    if (newColor.length < 7){
        generator();
        // console.log(newColor);
    }

}
 btn.addEventListener('click', generator)
 function generator(){

  document.body.style.background = newColor;
  btn.style.color = newColor;
  see.innerHTML = newColor;
 
 }
