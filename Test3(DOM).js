//DOM = Document Object Model (API) application interface  🌎
// an Interface for changing the content of a page 

// console.log(document);
// console.dir(document);
// console.log(document.title);
// console.log(document.URL)

// document.title = "It breaks my heart"
// document.location = "http://www.waptrick.com";


document.styleSheets.backgroundColor = "skyblue";
document.getElementById("myDiv").innerHTML = "Aloha 🧶";


let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

 let fruitsBasket = document.getElementsByName("fruits");
  fruitsBasket.forEach( fruits =>{
  if(fruits.checked) {
    console.log(fruits.value);
  }
  })
  
  //  elements are tagged by their Element's name, ID's, classes ands tags

//   let vegatables = document.getElementsByTagName("li");
//   vegatables[2].style.backgroundColor = "lightgreen";

//   let deserts = document.getElementsByClassName("desert");
//   deserts[2].style.backgroundColor = "lightgreen";

//   let kwuery = document.querySelector("li");
//   kwuery.forEach(Query => {
//       kwuery.style.backgroundColor = "lightgreen";
       
// }); 


// let query = document.querySelectorAll("li");
// query.forEach(query => {
//     query.style.backgroundColor = "lightgreen";
       
// })



                                                          //  DOM Trivasal Techniques ✔
// .firstElentChild
// .lastElentChild
// .parentElentChild
// .nextElementSibling
// .children[]
// .Array.from(.children)
// .previousSilbing


let list = document.querySelector("#cars");
let children = Array.from(element.children);

children.forEach(list => list.style.backgroundColor = "lightgreen")



//                                                            Adding and HTML Elemnts ✔
//add/change HTML elements
//.innerHTML (vulnerable to XSS (cross-site scripting) (attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter Name: ")
// document.body.append(nameTag)

const mylist =  document.querySelector("#fruit")
const cre = document.createElement("li");
cre.textContent = "pipeapple";
// mylist.append(cre);
// mylist.prepend(cre);
mylist.insertBefore(cre, mylist.getElementsByTagName("li")[0]);


//                                                         Changing Css components ✔
let css = document.getElementById("css");
css.style.backgroundColor = "#2222";
css.style.fontFamily = "consolas"
css.style.color = "rgba(10, 174, 125, 0.784)"
css.style.border = "2px solid black ";
css.style.textAlign = "center";


//                                                       Events & Events Listeners ✔
// these are actions the browser does which are:

//onclick
// onload
// onchange
// onmousedown
// onmessageerror
// onmouseenter
// onmouseout
// onmouseup


// let btn = document.getElementById("btn");
// btn.onload = doSomething();
// btn.onchange = doSomething;
// let txt = document.getElementById("myText");
// txt.onchange = doSomething;

const color = document.getElementById("myDiv")


color.onmouseover = doSomething;
color.onmouseout = doSomethingElse;

function doSomething(){

// return alert("You did something")
color.style.backgroundColor = "skyblue";
}

function doSomethingElse(){
    color.style.backgroundColor = "lightgreen"
}

//Event Handlers ✔
//Link an Event to a Function, here one element can have several events and can innovoke so many functions.
//.addEventListeners(event, functions, useCapture)

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("mouseover", change);
// innerDiv.addEventListener( "mouseout", changeback);

function change(){
    innerDiv.style.backgroundColor = 'red';
}

function changeback(){
    innerDiv.style.backgroundColor = 'olivedrab';
}
//to test the useCapture

innerDiv.addEventListener("click", changeBlue)
outerDiv.addEventListener("click",changeBlue)

function changeBlue (){
    // alert(`you selected ${this.id}`)
    this.style.backgroundColor = "skyblue";
}

//             How to Hide HTML Element ✔
const myButton = document.getElementById("myButton");
const myImage = document.querySelector("#image");

myButton.addEventListener("click", () => {
    if
    (myImage.style.display == "none") {
        myImage.style.display = "block";
    }
    else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        myImage.style.display ="none";
    }
});

//       How to ditact KeyPresses  ✔
let box = document.getElementById("box");
window.addEventListener("keydown", move);
let ex = 0;
let why = 0;


function move(event){
 switch (event.key) {
    case "ArrowDown":
        why+=5;
        box.style.top = why + "px";
        break;
        case "ArrowUp":
            why-=5;
            box.style.top = why + "px";
        break
        case "ArrowRight":
            ex+=5;
            box.style.left = ex + "px";
        case "ArrowLeft":
            ex-=5;
            box.style.left = ex + "px";
 }
}
// A css Animation in Js.😜🤍

//e.g 1 (Rotate)
 let rotate = document.getElementById("bones");
 let animate = document.getElementById("animate");

 rotate.addEventListener("click", begin)

 function begin(){
    let timeer = null;
    let degrees = 0;
 timeer = setInterval(frame, 5);
function frame(){
    if(degrees >= 360){
        clearInterval(timeer);
    }
    else{
        degrees +=1;
        animate.style.transform = "rotateZ("+degrees+"deg)";
    }
}

 }

//                               Canvas API 🎨
// a means for drawing graphics used for animations, games, and data Visualization

let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

//DRAW LINE
context.strokeStyle = "rgba(10, 174, 125, 0.784)";
context.lineWidth = 2;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke()

//DRAW TRIANGLE 🔺

let mycanvas = document.querySelector("#canvas");
let cologne = mycanvas.getContext("2d");

cologne.fillStyle ="yellow"
cologne.lineWidth = 1;
cologne.strokeStyle = "black"
cologne.beginPath();
cologne.moveTo(125, 0);
cologne.lineTo(0, 125);
cologne.lineTo(250, 125);
context.lineTo(125, 0);
cologne.stroke();
cologne.fill();

//DRAW RECTANGLE
let cont = document.querySelector("#rect");
let rect = cont.getContext("2d");

rect.beginPath();
rect.stroke();
rect.fillStyle = "purple"
rect.strokeStyle = "black"
rect.strokeRect(0, 0, 250, 250);
rect.fillRect(0, 0, 250, 250);

rect.beginPath();
rect.stroke();
rect.fillStyle = "yellow"
rect.strokeStyle = "black"
rect.strokeRect(0, 250, 250, 250);
rect.fillRect(0, 250, 250, 250);

rect.beginPath();
rect.stroke();
rect.fillStyle = "orange"
rect.strokeStyle = "black"
rect.strokeRect(250, 250, 250, 250);
rect.fillRect(250, 250, 250, 250);

rect.beginPath();
rect.stroke();
rect.fillStyle = "rgba(10, 174, 125, 0.784)"
rect.strokeStyle = "black"
rect.strokeRect(250, 0, 250, 250);
rect.fillRect(250, 0, 250, 250);

//DRAW A CIRCLE 🟢
let conts = document.querySelector("#circle");
let circle = conts.getContext("2d");

circle.beginPath();

circle.fillStyle = "lime";
circle.lineWidth = 1;
circle.arc(125, 125, 75, 0, 2 * Math.PI, true)
circle.fill();
circle.stroke();



// //TEXT DRAW 
let test= document.querySelector("#test");
let name = test.getContext("2d");


name.font = "30px MV Boli";
name.fillStyle = "greu";
name.textAlign = "center"
name.fillText("`JamesWalker`", 250, 85);

//                                           WINDOW OBJECT 🔳
// This is an Interface use to talk to the web browser.
// the DOM is a property of the window.

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);
// console.log(window.scrollbars);

// console.log(window.location.href);
// window.location.href = "https://google.com";

// console.log(window.location.hostname);
// console.log(window.location.pathname);

let press = document.querySelector("#press");
press.addEventListener("click", () => window.open("https://google.com"))
                                    //   window.close()
                                    //   window.print()
// window.alert("My oh my");
// window.comfirm("Guy, are you sure?!");


// let cage = window.prompt("Enter your age?");
// if(cage < 18){
//     window.alert("you must to 18+ to visit this site")
//     window.close();
// }


//                                                             COOKIES 🍪
// a small text file stored on your computer used to remember information about the user saved in name=value pairs


// document.cookie = "firstName=James; expires=1/1/2030 12:00:00 WAT; path=/";
// document.cookie = "LastName=Walker; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// to Over wright a cookie, you just need to change it's name, when the dates excede, it expires.

// console.log(document.cookie);

//E.g 2
console.log(document.cookie)

setCookie("email", "MarshMatters@gmail.com", 365);

function setCookie(name, value, bestBefore){
    const date = new Date();
    date.setTime(date.getTime() + bestBefore + 24 * 60 * 60 *1000);
    let expires = "expires = " + date.toUTCString();
    document.cookie = `${name} = ${value}; ${expires}; path =/`;
}

deleteCookie("firstName");
deleteCookie("lastName");
deleteCookie("email");


function deleteCookie(){
    setCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    console.log(cDecoded);
}