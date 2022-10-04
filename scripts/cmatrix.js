// first of all, trying to generate a random number and converting it to it's char

function randomChar(){
    num = Math.floor(Math.random() * 200) + 33;
    return String.fromCharCode(num);
}

console.log(randomChar())
function createDiv(){
    var newdiv = document.createElement("div");
    document.body.appendChild(newdiv);
}

document.getElementById("Btn-balls").document.addEventListener("click", createDiv);

function createP(){
    var newP = document.createElement("p");
    newP.id
    newP.innerHTML = "PPPPPP"
    document.body.appendChild(newP)
}
document.getElementById("test").document.addEventListener("click", createP);
