function SumbitForm(){



}
 

document.getElementById("IncreaseBtn").onclick = function (){
  document.getElementById("countLabel").innerHTML = count;
  count+=1;
}


document.getElementById("DecreaseBtn").onclick = function(){
  document.getElementById("countLabel").innerHTML = count;
  count-=1;
}



document.getElementById("resetBtn").onclick = function (){
  document.getElementById("countLabel").innerHTML = count;
  count = 0;
}