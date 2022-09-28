// first of all, trying to generate a random number and converting it to it's char

function randomChar(){
    num = Math.floor(Math.random() * 100) + 33;
    return String.fromCharCode(num);
}

console.log(randomChar(66))
