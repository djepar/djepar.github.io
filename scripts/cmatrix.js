// first of all, trying to generate a random number and converting it to it's char

function randomChar(){
    num = Math.floor(Math.random() * 100) + 33;
    return String.fromCharCode(num);
}
function generateOne(i){
    let container = document.getElementById(`container${i}`);
    let rand = randomChar()
    let  newChar = document.createElement("p");
    newChar.innerHTML = rand
    container.appendChild(newChar)
    console.log(rand)
}
async function generateAll(){

    for (let i = 0; i < 30; i++){
        await sleep(0.05);
        setTimeout(generateOne(i), 380)
    }
    

   
}
async function sleep(seconds){
    return new Promise(resolve=>setTimeout(resolve, seconds * 1000));
}
for (let i = 0; i < 30; i++){
    setInterval(generateAll(), 500)
}
 

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