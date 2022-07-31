function newParagraph(){
    var elementH = document.createElement("h1");
    var main = document.querySelector(".main");
   main.appendChild(elementH);
    var text = document.createTextNode("Kevin Calvin");
    elementH.appendChild(text);


 var element = document.createElement("p");
console.log(main);
main.appendChild(element);
var text = document.createTextNode("We want to pray, close your eyes put your hands together say your prayers");
 element.appendChild(text);


 var pAttribute = document.createAttribute("id")
 pAttribute.value = "test";
 element.setAttributeNode(pAttribute);



 var pAttributi = document.createAttribute("h1")
 pAttributi.value = "test";
 elementH.setAttributeNode(pAttributi);

}


function removeHeader(){



}