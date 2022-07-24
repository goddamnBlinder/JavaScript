function changeStyle(){
    var paragragh = document.getElementsByClassName('para');
    var firstText = paragragh[0].innerHTML = "Tear drops";
    var secondText = paragragh [1].innerHTML = " from my eyes ";
    var sum = paragragh[2].innerHTML =  firstText + secondText;
    var empty = paragragh [0].innerHTML = ''
    var empty = paragragh [1].innerHTML = '';
}
