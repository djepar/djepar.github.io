// first of all, trying to generate a random number and converting it to it's char

function randomChar(){
    num = Math.floor(Math.random() * 200) + 33;
    return String.fromCharCode(num);
}

function createChar(){
    const rand = randomChar()
    const newChar = document.createElement("p");
    const container = document.getElementById("container");
    newChar.innerHTML = rand
    container.appendChild(newChar)
    console.log(rand)
   
}

setInterval(createChar, 380)


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