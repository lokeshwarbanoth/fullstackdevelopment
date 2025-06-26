document.title = "Dom in JavaScript";

document.getElementById("header").innerHTML = "Hello, World!";


document.getElementById("para").style.color = "blue";
document.getElementById("para").style.fontSize = "30px";

document.getElementsByClassName("ds")[0].innerHTML = "JAI SEVALAL";
document.getElementsByClassName("ds")[0].style.color = "red";
document.getElementsByClassName("ds")[0].style.fontSize = "50px";


document.getElementsByTagName("h1")[1].innerHTML = "SEVALAL JAYANTHI";
document.getElementsByTagName("h1")[1].style.color = "ORANGE";


document.body.style.backgroundColor = "lightblue";

let chinnu = document.getElementsByClassName("ds");
chinnu[0].style.color = "red";
chinnu[1].style.color = "green";
chinnu[2].style.color = "red";
chinnu[3].style.color = "black";

document.querySelector(".dsa").style.color = "red";


let depts = document.querySelectorAll(".data");
depts[0].style.color = "red";
depts[1].style.color = "yellow";
depts[2].style.color = "blue";
depts[0].style.fontSize = "20px";
depts[1].style.fontSize = "30px";
depts[2].style.fontSize = "40px";

function changeBackground(color) {
    if (color === "red") {
        document.body.style.backgroundColor = "red";
    } else if (color === "red") {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}
function changeBackground() {
document.body.style.backgroundColor = document.body.style.backgroundColor == "light blue" ? "red" : "yellow";
}
function changetxt(){
document.getElementById("clg").innerHTML="VIT,IIT-HYDERABAD";}
