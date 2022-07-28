function newParagraph(){

    var H = document.createElement("h1");
    var main = document.querySelector(".main");
    main.appendChild(H);
    var text = document.createTextNode("Kevin Calvin");
    H.appendChild(text);


 var element = document.createElement("p");

//  var main = document.querySelector(".main");
 console.log(main);


 main.appendChild(element);

 var text = document.createTextNode("We want to pray, close your eyes put your hands together say your prayers");
 

 element.appendChild(text);

 Remove(element, main);


} 
function Remove(Tinibu , Jagaban){
    // var H = document.querySelector(".main");
    Jagaban.Remove(Tinibu);

    

    // removechild(element);
    // console.log(removechild)

}