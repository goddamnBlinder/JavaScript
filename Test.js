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
let  i = document.getElementById("countLabel");
let count = i.innerHTML;



increaseBtn.addEventListener('click', increaseCount)
decreaseBtn.addEventListener('click', decreaseCount)
resetBtn.addEventListener('click', resetCount)

function increaseCount(){
  count++;
  i.innerText = count;
  
}

function decreaseCount(){
  count--;
  if(count < 0){
    count = 0;
  
  }else{
    i.innerText = count;
  }
  console.log(count);
}


function resetCount(){
  i.textContent = 0;
}

                                                 //  Radom Number


let changeButton = document.getElementById("RandomBtn");
let resetB = document.getElementById("reset");
let  dee = document.getElementById("Jagaban");
let viewbox = dee.innerHTML;



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


// let age = 20;

// if( age<= 21){
//  console.log("you'\ re still an adolecent");
// }

//  else if(age = 0){
// console.log("you still a baby")
//  }


// else{
//   console.log("The man i is")
  
// }

let online = true;

if(online){
  console.log("you are online");
}
else {
  console.log("you are offline");
}



document.getElementById('btn').onclick = function(){

const Checker = document.getElementById('checkbox');

  if( Checker.checked == true){
    console.log("Thanks for Subscribing!");
}
else {
  console.log("Haven'\ t subcribe yet");
}
}

const pay = document.getElementById("paypal");
const master = document.getElementById('Mastercard');
const visa = document.getElementById('visaBtn');

document.getElementById('btn').onclick = function(){

if (pay.checked == true)
 {
  console.log("you\ 're paying with paypal");
}
else if (master.checked == true){
  console.log("you\ 're paying with Master Card");
}
else if (visa.checked == true) {
  console.log(`you're paying with Visa`);
}
else{
   console.log("please Select your method for payment");
}

  // Switch statement 
}

let grade = "F";
switch (grade) {
  case "A":
    console.log("Excellence");
    break;
  case "B":
    console.log("Very Good");
    break;
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Pass");
    break;
  case "F":
    console.log("Carry Over");
    break;

  default:
    console.log(grade, "is not a case");
    break;
}

// conditions AND , OR NOt
let temp = 12

if(temp > 0 && temp < 24 ){
  console.log("the Weather is Good, ThankGod!");
}
else{
  console.log("chaii, Rain wan fall");
}
let tem = 12

if(tem <= 0 || tem >= 30){
  console.log("the Weather is Good, ThankGod!");
}
else{
  console.log("chaii, Rain wan fall");
}

let T = 15;
let sunny = true;
if(!(T>= 30)){
  console.log("the Weather is Good, ThankGod!");
}
else{
  console.log("chaii, Rain wan fall");
}
if(!sunny){
  console.log("the Weather is Good, ThankGod!");
}
else{
  console.log("chaii, Rain wan fall");
}

// While Loop

let userName = " Mr Black";
while (userName == " " || userName == null) {
  userName = windows.prompt("Enter your Username")
}

console.log("Hello,", userName);





// do while

// // let name;


// // do{
// //   name = window.console.log("what is your name");
   
  
// // }while (username == "") {
// // console.log("Hello " , name);
// }




//  for loop

for(let i = 5; i > 0; i-= 1){
  console.log(i);
}  
console.log("BOOM!");


// nested loop


// let symbol = window.prompt("Add a symbol");
// let columns = window.prompt("# of columns?")
// let rows = window.prompt("# of rows?")




// for(let i = 1; i <=rows; i+= 1){
//   for(let j = 1; j <=columns; j+= 1){
//     document.getElementById("myRect").innerHTML += symbol;

//   }
//   document.getElementById("myRect").innerHTML += "<br>"
// }


// Function = Define code once, and use it many times.
// to perform some Code, call the function name 



startProgram();
/* local variables inside a function */


function startProgram(){
  let nam = "James";
  let a = 22;


happyBirthday(nam, a);
}


function happyBirthday(a, b){
   console.log("Happy Birthday to you!");
   console.log("Happy Birthday to you!");
   console.log("Happy Birthday to dear " + a);
   console.log("Happy Birthday to you!");
   console.log("You are", b ,"years old");
}

// return = returns a value back to the place where you invoked a function 

// let height;
// let width;
// let area;

// width = window.prompt("enter width");
// height = window.prompt("enter height");

// area = getArea(width, height);

// console.log("the area is:", area);

// function getArea(width,  height){
// let result = height * width;

// return result;
// }




// ternary operator = shortcut for an 'if/else statement'
//                      takes 3 operands

// 1. a condition with ?
// 2. expression if True :
// 3. expression if False

//condition ? exp. IfTrue : exp. IFFalse

let rava = checkAge(22);
console.log(rava);

function checkAge(age){
return  age >= 12 ? true : false;

}

checkWinner(false)

function checkWinner(win){
  win ? console.log("You WIN!") : console.log("You LOSE!"); 
}

// Templates literals = delimited with (`)
// instead of double or single quotes, allows embedded variables and expression


let x = "James";
let y = 22;
let z = "JavaScript";

let text = `My name ${x} and i am ${y}  years old, learning ${z} which i could have done earlier, if only i had common sense back then 😪.`;
document.getElementById("myLabel").innerHTML = text;


/* NOTE:  varaible scope = where a variable is accesible 
let = variable are limited to a block scope {}
let = variable are limited to a function (){}

global variable = are decleared outside any function (if global, var will CHANGE browser's window properties).*/



// toLcalString() = returns a string with a language sensitive representation of this number

let numb = 123456.789;
 numb = numb.toLocaleString('en-US');// US english
 numb = numb.toLocaleString('hi-IN');// hindi
 numb = numb.toLocaleString('de-DE');// G.Br.t
 
 
 numb = numb.toLocaleString("en-US", {style: "currency", currency: "USD"});


 numb = numb.toLocaleString( undefined, {style: "percent"});
 
 
 console.log(numb);

 //                                                                A  SIMPLE CONVENTER (Didn't know what i was tho 😅 )