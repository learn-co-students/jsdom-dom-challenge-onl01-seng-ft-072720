setInterval(myTimer, 1000);
let counter = 0

function myTimer() {
    document.querySelector("#counter").innerText = counter++
}