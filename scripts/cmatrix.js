// first of all, trying to generate a random number and converting it to it's char

function randomChar(){
    num = Math.floor(Math.random() * 200) + 33;
    return String.fromCharCode(num);
}
function bonjour(){
    console.log((randomChar()));
    

}
setInterval(bonjour(), 400)

/* Creating balls or letter with a button
let ballcontainer = document.getElementById("second-container");
let BallCreator = document.getElementById("myBtn");
BallCreator.addEventListener("click", function(){
    let newP = document.createElement("p");
    newP.className = "green-letter"
    newP.innerHTML = randomChar();
    ballcontainer.appendChild(newP)
})

*/