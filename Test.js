function newParagraph(){

    var H = document.createElement("h1");
    var main = document.querySelector(".main");
    main.appendChild(H);
    var text = document.createTextNode("Kevin Calvin");
    H.appendChild(text);


 var element = document.createElement("p");

 var main = document.querySelector(".main");
 console.log(main);


 main.appendChild(element);

 var text = document.createTextNode("We want to pray, close your eyes put your hands together say your prayers");
 

 element.appendChild(text);


} 
function Remove(){
    var element = document.createElement("p")
    var H = document.querySelector(".main");

    removechild("p");
    console.log(removechild)
}