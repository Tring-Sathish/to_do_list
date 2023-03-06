function storeDetails(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if(password.value !== ""){
        let details = {
            "name": name,
            "password": password
        };
        localStorage.setItem("details", JSON.stringify(details));
        alert("Registered Succesfully");
    }
}
function checkDetails(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let details = JSON.parse(localStorage.getItem("details"));
     if(!details)
     {
         alert("User is not registered here ");
        return false;
     }
    if(name == details.name && password == details.password){
        alert("Sign-In succesfully");
        return true;
    }
    else{
        alert("Invalid Name or Password!");
        return false;
    }
}
function addList(){
    let myList = document.getElementById("myList");
    let text = document.getElementById("newList").value;
    document.getElementById("newList").value = ""
    let list = document.createElement("li");
    let span = document.createElement("span");
    list.innerHTML=text;
    list.className = "l";
    list.addEventListener('click', function(){
        list.classList.toggle('completed');
    })
    myList.appendChild(list);
}
let createList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < createList.length; i++) {
let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
createList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
}
}
function empty(){
    let elements = document.querySelectorAll(".l");
    for(let x of elements){
        x.remove();
    }
}
function save(){
    let saveList = document.getElementById("myList").innerHTML;
    localStorage.setItem("saveList", JSON.stringify(saveList));    
}
function showSavedList(){
    let savedList = localStorage.getItem("saveList");
    document.getElementById("myList") = JSON.parse(savedList);
}
