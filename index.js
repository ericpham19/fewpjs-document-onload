// Your code goes here

function changeText(){
    const p = document.getElementById("text");
    p.textContent = "This is really cool!";
}

document.addEventListener("DOMContentLoaded", function(){
    changeText();
})