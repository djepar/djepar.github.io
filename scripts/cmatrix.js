// first of all, trying to generate a random number and converting it to it's char

function randomChar(){
    num = Math.floor(Math.random() * 200) + 33;
    return String.fromCharCode(num);
}

console.log(randomChar())

ballcontainer = getElementById("second-container")
document.getElementById("myBtn").addEventListener("click", function() {
    let newDiv = document.createElement("div");
    newDiv.className = "green-ball"
    document.body.ballcontainer.appendChild(newDiv)
});