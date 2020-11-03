let flag = true //this flag will be toggled by the stop button
let counter = 0
const counterMin = 0
const counterMax = 100
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const commentInput = document.querySelector("#comment-input").value
const heart = document.querySelector("#heart")
const pausePlayButton = document.querySelector("#pause")
const commentForm = document.querySelector("#comment-form")
const counterDisplay = document.querySelector("#counter")
const commentCard = document.querySelector()
const likeCard = document.querySelector()


function counterUp(){
    if (counter < counterMax){
        counter+= 1;
        debugger
        counterDisplay.innerHTML = `${counter}`;
    }
    if(counter === counterMax){
        counter = counterMin
        counterDisplay.innerHTML = `${counter}`;fd
    }
}

function counterDown(){
   if ( counter > counterMin) {
       counter -=  1;
       debugger
       counterDisplay.innerHTML = `${counter}`;
   }
   if ( counter === counterMin ){
      counter = counterMax;
      counterDisplay.innerHTML = `${counter}`;
   }
}

// function runCounter(){
//     while(flag === true){
//         document.setTimeout(counterUp(1000));
//     }
// }

function like(){

}

plus.addEventListener("click", function(){
    console.log("It Worked")
});
minus.addEventListener("click", counterDown());
//use a while loop on the counter?
//while the button is unpressed, continue the loop.
//once it is pressed, break the loop.
//when pressed again start the loop.

