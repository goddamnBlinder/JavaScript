function newParagraph(){

 var element = document.createElement("p");


 var main = document.querySelector(".main");

 main.appendChild(element);

 var text = document.createTextNode("We want to pray, close your eyes put your hands together say your prayers");

 element.appendChild("text");


} 