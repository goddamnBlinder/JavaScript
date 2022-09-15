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


let query = document.querySelectorAll("li");
query.forEach(query => {
    query.style.backgroundColor = "lightgreen";
       
})



// the element selection ✔

