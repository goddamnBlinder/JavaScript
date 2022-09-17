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
// a means for drawing graphics used for animations