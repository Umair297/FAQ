var btn = document.getElementById("btn");
var first = document.getElementById("first-a");
var neg = document.getElementById("neg");

var btn1 = document.getElementById("btn1");
var sec = document.getElementById("sec-a");
var neg1 = document.getElementById("neg1");

var btn2 = document.getElementById("btn2");
var third = document.getElementById("third-a");
var neg2 = document.getElementById("neg2");

var btn3 = document.getElementById("btn3");
var forth = document.getElementById("forth-a");
var neg3 = document.getElementById("neg3");

var btn4 = document.getElementById("btn4");
var fifth = document.getElementById("fifth-a");
var neg4 = document.getElementById("neg4");

//This function is for Question number 1...
btn.onclick = function(){
    first.style.display="block";
}
neg.onclick = function(){
    first.style.display="none";
}
//This function is for Question number 2...
btn1.onclick = function(){
    sec.style.display="block";
}
neg1.onclick = function(){
    sec.style.display="none";
}
//This function is for Question number 3...
btn2.onclick = function(){
    third.style.display="block";
}
neg2.onclick = function(){
    third.style.display="none";
}
//This function is for Question number 4...
btn3.onclick = function(){
    forth.style.display="block";
}
neg3.onclick = function(){
    forth.style.display="none";
}
//This function is for Question number 5...
btn4.onclick = function(){
    fifth.style.display="block";
}
neg4.onclick = function(){
    fifth.style.display="none";
}