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

                                                 //  Radom Number  guess 🥰


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
//                                                 PAYMENT METHOD 😘


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

 //                                       A  SIMPLE CONVENTER (Didn't know what i was doing tho 😅 )



document.getElementById("sumbmitButton").onclick = function(){
  let temperature;

  if(document.getElementById("cButton").checked){

    temperature = document.getElementById("textBox").value;
    temperature = Number(temperature);
    temperature = toCelsius(temperature);

    // The parseFloat() & toFixed(3) is to set the number of decimals to be display
    document.getElementById("tempLabel").innerHTML = parseFloat(temperature.toFixed(3)) + "⁰C";

  }

  else if(document.getElementById("fButton").checked){

    temperature = document.getElementById("textBox").value;
    temperature = Number(temperature);
    temperature = toFahrenheit(temperature)

    document.getElementById("tempLabel").innerHTML = parseFloat(temperature.toFixed(3)) + "⁰F";


  }
  else{
    document.getElementById("tempLabel").innerHTML = "Select a Unit";
  }
}

function toCelsius(temperature){
    return (temperature - 32) * (5/9);
}
function toFahrenheit(temperature){
    return temperature * 9/5 + 32;
}

// Function Expression   =  function without a name (anonymous function) aviod polluting the global scope with names. Write it, then forget about it.
const greet = function (){
  console.log('Hello');
}

greet();




//                                     😥😥😯       ARRAYS   🤩🤩 = think of it as varaible that can store multiple values



let fruits = ['apple', 'orange', 'kiwi', 'sworwanshop!', 'blueberry', 'Raspberries'];
// console.log(fruits[5]);

fruits.push("lemon");  //add an element
fruits.pop(); // remove last element
fruits.unshift('mango'); // add element to index(0)
fruits.shift(); // removes element from index(0)

let length = fruits.length
let index = fruits.indexOf('starFruit')

console.log(index);

// array.map() = executes a provided  callback function once for each array element and creates a new array

let countable = [1, 2, 3, 4, 5];
let shape = countable.map(cubic);
let shapes = countable.map(square);


shape.forEach(print)
shapes.forEach(print)


function square(element) {
  return Math.pow(element,2);
}

function cubic(element) {
  return Math.pow(element,3);
  
}

function print(element) {
  console.log(element)
  
}

// array.filter() = creates a new array with all elements that passes the test provided by a function

let aGes = [18, 14, 21, 56, 80];
let adult = aGes.filter(checkaGes);

adult.forEach(print);

function checkaGes(element){
    return element >= 18; 
}

function print(element) {
  console.log(element);
}

// array.reduce() = reduces an array to a single value

let prices = [5, 15, 20, 25, 30]
total = prices.reduce(checkOut);

console.log(`the total prices in the reduced array is $${total}`)

function checkOut(total, element) {
  return total + element;
}

// Sorting of Arrays 

let grades =  [1, 6, 3, 2, 4, 5,]

grades = grades.sort(descendingSort);

grades.forEach(print)

function descendingSort(x, y){
  return y - x;
}

function print(element){
  console.log(element);
}

grades = grades.sort(ascendingSort);


function ascendingSort(x, y){
  return x - y;
}


// function expression = function without any name (anonymous function, avoid polluting the whole scoop, write it, then forget abiut it) 


const greeting = function () {
  console.log('Hello!'); 
}

greeting();





// arrow functions = compact alternative to a traditional function
// =>

const goodNight = function (userNam){
  console.log(`Hola Amigo ${userNam} `);
}
goodNight("Diawara")

//e.g

const goodNite = (usaNam) =>  console.log(`Hola Amigo ${usaNam} `);

goodNite("Diawara")

// if you have only one arguement you don't need to close it in any parenthesis.

const percentage = function (x , y){
  return x / y * 100;
}

console.log(`${percentage(40, 1000)}%`);

//e.g 2

const percenTage =  (x , y) => x / y * 100;

console.log(`${percenTage(40, 1000)}%`);


//e.g 3

let studentGrades = [23, 45, 78, 89, 97, 100];

studentGrades.sort(desCending);
studentGrades.forEach(print);

function desCending(x, y){
  return y - x;
}

function print(element){
  console.log(element);
}

//

let studentgrades = [23, 45, 78, 89, 97, 100];

studentGrades.sort( (x, y) =>{
  return y - x;
}
);
studentGrades.forEach( element =>{
  console.log(element);
});


//                         😅 How to Shuffle the elements of an array (How a cards mixer works)


let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'k', 'Q']

Shuffle(cards);

// console.log(cards);
cards.forEach(cards => console.log(cards))

function Shuffle(array){
  let currentIndex = array.length;


  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length)
   
    currentIndex --;

    let temps = array[currentIndex];
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temps;

  }
  return array;
}


//Nested Functions = Functions inside other functions. Outer functions have access to inner functions, inner functions are "hidden" from outside the outer function.They are used in closures 


let user = 'James';
let userIndox = 3;

login();


function login(){
  displayuser();
  displayuserInbox();
}

function displayuser(){
console.log(`hello there,${user}`)
}

function displayuserInbox(){
console.log(`You have ${userIndox} new messages`)
}

// Map = objects that holds key-value pairs of any data type

const mall = new Map([
['skirt', 20],
['shoe', 30],
['canvas', 40],
['sandals', 50],
]);



// the get method = to sum up the total.
let shoppingCart = 0;
shoppingCart += mall.get('skirt');
shoppingCart += mall.get('canvas');
shoppingCart += mall.get('sandals');
console.log(`here's the total cart $:${shoppingCart}`);

//set method  (To add)
mall.set("Hat", 70)
// mall.delete("Hat")
console.log(mall.has('cap'));//   for Boolean purposes (has properties)
console.log(mall.size);// total size of items

mall.forEach((value, key) => console.log(`${key} $${value}`));



//                                                          OBJECTS 🤫🐱‍👤🐱‍🏍
// A group of Properties and methods (properties = what it has) (Methods = ways it does)
 

 const plant = {
  name: 'orange',
  color: 'duh, orange',
  age: 12,

  germinate: function(){
    console.log("a growing process for the seed");
  },

  bareFruit: function(){
    console.log("when it bares fruits");
  }
}
console.log(plant.name);
console.log(plant.age);
console.log(plant.color);

plant.bareFruit();


const plant2 = {
  name: 'lime',
  color: 'yellow',
  age: 10,

  germinate: function(){
    console.log("a growing process for the seed");
  },

  bareFruit: function(){
    console.log("when it bares fruits");
  }
}
console.log(plant2.name);
console.log(plant2.age);
console.log(plant2.color);

plant2.bareFruit();


// this = this is a keyword that gives reference to an element contained in an object, it depends on the immediate context where they are used  

const car = {
  model: "Toyota",
  color: 'black',
  year:2027,

  drive: function(){
    console.log(`you drive a ${this.model}`);
  }
}

car.drive();
//                                                        CLASS😎
//A blueprint for creating objects, defines what properties and methods they have to use a constructor for a unique property.

class player  {
score = 0;
pause(){
  console.log("Paused");
   return  this.exist();  //
}
exist(){
  console.log("Exist?, will automatically forfeit");
}

}

// objects created to define and express the class created above.
const play =  new player();
const play2 =  new player();
const play3 =  new player();

play.score ++;
play2.score = 2
play3.score = 3

console.log(play.score);
console.log(play2.score);
console.log(play3.score);

play.pause();
// play.exist();

//constructors = special method of a class, accepts arguments and assigns properties



 
class student{
  constructor(name, age, gpa){
        this.name = name
        this.age = age
        this.gpa = gpa
  }

    study(){
      console.log(`${this.name} thinks he's studying, werey`);
    }
}
const stu = new student("Andrew", 23, 3.7)
const stu2 = new student("Thomas", 22, 3.17 )
const stu3 = new student("Sandy", 21, 4.2)



console.log(stu.name);
console.log(stu.age);
console.log(stu.gpa);
stu.study();

console.log(stu2.name);
console.log(stu2.age);
console.log(stu2.gpa);
stu2.study();

console.log(stu3.name);
console.log(stu3.age);
console.log(stu3.gpa);
stu3.study();

//static = A keyword belongs to the class, not the objects 
//properties: useful for caches, fixed-configuration
// methods: useful for utility function

class Car {

 static  numberOfCars = 2;
 
constructor(model){
  this.model = model;
  this.numberOfCars ++;
}
 static startRace(){
  console.log('3...2....1....GO!');
}

}
const car1 = new Car("pegoiut");
const car2 = new Car("Bmw");
const car3 = new Car("Kia")

console.log(car1.numberOfCars)
console.log(car2.numberOfCars)
console.log(car3.numberOfCars)




//Inheritance = this is where a child can inherit all the method and properties from another class.
class animal{
  alive = true
  eat(){
    console.log("the process of taking in mineral res. to release energy");
  }
}


class Rabbit extends animal{

  name = "rabbit";

  run(){
    console.log("running");
    }
}

class Hawk extends animal{

  name = "hawk";
  
  fly(){
    console.log("flying");
    }
}
const rodent = new Rabbit();
const bird = new Hawk();

console.log(rodent.alive);
console.log(bird.alive);
rodent.eat();
rodent.run();

//super = refers to the parent class. commonly used to invoke constructor of a parent class.
 class Mammals{
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
 }
class Monkey extends Mammals{
 constructor (name, age, climbSpeed ){
      super(name, age)
      this.climbSpeed = climbSpeed;
 }
}

class Dog extends Mammals{
  constructor(name, age, barkSound){
    super(name, age)
    this.barkSound = barkSound;
  }
  }
 
  const climb = new Monkey("monkey", 1, 21 + "km/h");
  const chihuahua = new Dog ("Chihuahua", 2, 13 + "echo per seconds");

  console.log(climb);
  console.log(chihuahua.barkSound);
  console.log(climb.climbSpeed);   

// get = binds an object property to a function when that property is accessed
// the underscore indicates that, the element is been protected

class joules {
  constructor(power, gas){
   this._power = power;
   this._gas = 3000000;
   Number(this._gas);
  }
  get power(){
    return `This particular power is: ${this._power}joules`;
  }

  get gas(){

         return ` ${this._gas}L (${this._gas / 50 * 100})%`;  
        }
 //set = binds an objects property is assigned a value
 
 
 set gas(value){
   if(value >= 50){
     value = 50;
    }
    else if(value < 0){
      value = 0;
    }      
    this._gas = value;
 }
}

const veh = new joules (12); 
veh.power = 122222;


console.log(veh.power);
console.log(veh.gas);

//passing objects to a function as an argument in a class


class bike {

  constructor(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
let ride= new bike ("Qlink", 2014, "black")
let secondRide= new bike ("Qasa", 2017, "red")

displayInfo(ride);
changeColor(ride, "pink"); 


function displayInfo(car) {
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}

function changeColor(car, color){
 car.color = color;
}

//                ARRAYS OF OBJECTS   😮😮
class food {
  constructor(name, process, crop){
    this.name = name;
    this.process = process;
    this.crop = crop;
  }
eat(){
  console.log(`${this.name} dey enter belle for like ${this.process} now`);
}
}
 let chop = new food("garri 🥰", 2 + "hr", "tubber crop");
 let chops = new food("dodo", 1 + "hr", "cash crop");
 let chopinson = new food("abgabo", 30 + "mins", "something_else");

 eatery = [chop, chops, chopinson]

//  console.log(eatery[2]);
//  eatery[1].eat();


startEating(eatery);

function startEating(ate){
   for(const ate of eatery){
       ate.eat();
   }
 }
 //this function startEating, loop tru the elements of the array(eatery )
 //and invoke the eat() {method}


 // Anonymous objects = Less syntax, no need for unique names

 class card {
  constructor(value, suit){
    this.value = value;
    this.suit = suit;
  }
 }

 let card1 = new card ("A", "Hearts")
 let card2 = new card ("A", "Spades")
 let card3 = new card ("A", "Diamond")
 let card4 = new card ("A", "Clubs")
 
 let card5 = new card ("2", "Hearts")
 let card6 = new card ("2", "Spades")
 let card7 = new card ("2", "Diamond")
 let card8 = new card ("2", "Clubs")

 let cads = [card1, card2, card3, card4, card5, card6, card7, card8]

 console.log(card1.value + card1.suit); 
 console.log(cads[0].value + cads[0].suit)  //✖


cads = [    new card ("A", "Hearts"),
            new card ("A", "Spades"),
            new card ("A", "Diamond"),
            new card ("A", "Clubs"),
            new card ("2", "Hearts"),
            new card ("2", "Spades"),
            new card ("2", "Diamond"),
            new card ("2", "Clubs")
 ]

cads.forEach( card => console.log(`${card.value} ${card.suit}`)) //✔


 //                             ERROR 💢
 //objects with a discription of something went wrong.
 console.error("I created this error");


 // error = object with a description of something went wrong
 // throw = executes a user-defined error

try {
  //  let x = window.prompt("Enter a Number?");
   x = Number(x);

   console.log(`${x} is a number `);

   if(isNaN(x)) throw "it wasn't a number";
   if (x == "") throw "left Blank";
    

}


  catch (error) {
  console.log(error);
}

finally {
  console.log("Finally, always display");
}

// finally always run wether the code is corect or not.

//  Please, do so to go through test2.js and test3.js and tell me what you think 😁
 