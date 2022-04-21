function storeDetails(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if(password.value !== ""){
        var details = {
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
    var details = JSON.parse(localStorage.getItem("details"));
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
    var myList = document.getElementById("myList");
    var text = document.getElementById("newList").value;
    document.getElementById("newList").value = ""
    var list = document.createElement("li");
    var span = document.createElement("span");
    list.innerHTML=text;
    list.className = "l";
    list.addEventListener('click', function(){
        list.classList.toggle('completed');
    })
    myList.appendChild(list);
}
var createList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < createList.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
createList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}
}
function empty(){
    var elements = document.querySelectorAll(".l");
    for(var x of elements){
        x.remove();
    }
}
function save(){
    var saveList = document.getElementById("myList").innerHTML;
    localStorage.setItem("saveList", JSON.stringify(saveList));    
}
function showSavedList(){
    var savedList = localStorage.getItem("saveList");
    document.getElementById("myList") = JSON.parse(savedList);
}