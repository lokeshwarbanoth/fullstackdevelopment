const { createElement } = require("react");

let aish = document.createElement("p");
aish.textContent="I'm chitti";
//aish.innerHTML="Memory 1 Tera Byte";
aish.style.color = "blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
setTimeout(()=> {
    let sana = document.getElementsByClassName("list")[0];
    if (sana) {
        sana.remove();
        }
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
        }
    },2000);
    let newHeading = document.createElement("h2");
    newHeading.innerHTML = "This is a new heading added by JavaScript!";
    newHeading.style.color="violet";
    newHeading.style.fontSize="20px";
    document.body.appendChild(newHeading);
    setTimeout(() =>{
        let newText = document.createElement("p");
        newText.textContent = "This Text is added after 3 seconds";
        newText.style.color = "green";
        document.body.appendChild(newText);
    },3000);
    let tagText = document.createElement("p");
    tagText.textContent = "This text is appended to the tag!";
    tagText.style.color =  "orange";
    document.getElementById("vasi").appendChild(tagText);
    let mylist = document/createElement("ul");
    for(let i=1;i<=3;i++){
        let listitems = document.createElement("li");
        listitems.textContent = "Item" +i;
        listitems.style.color="blue";
        listitems.style.fontSize = "18px";
        mylist.appendChild(li);
        document.body.appendChild(mylist);
    }