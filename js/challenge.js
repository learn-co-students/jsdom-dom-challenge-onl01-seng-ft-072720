let likedNumbers = {};
let seconds = 0;
let paused = false;
const like = document.getElementById("heart");
const thePause = document.getElementById("pause");
const theSubmit = document.getElementById("submit"); // or document.querySelector("#submit") works too

// seconds counter

function incrementSeconds() {
seconds += 1;
    let c = document.getElementById("counter");
    c.innerText = seconds;
}
let timeRunning = setInterval(incrementSeconds, 1000);

  //manually increment counter

  const increase = document.getElementById("plus");
  increase.addEventListener('click', function(event) {
    seconds += 1;
  });

  //manually decrement counter
  const decrease = document.getElementById("minus");
  decrease.addEventListener('click', function(event) {
    seconds -= 1;
  });

  // liking a number
 

    
  like.addEventListener('click', function(event) {
    if (paused == true) {
      console.log("Paused, doing nothing when you click!")
    } else {
   let holdSeconds = seconds;
     // const theDisplay = document.getElementsByClassName("likes");
   if (likedNumbers[holdSeconds] != undefined) {
    let count = likedNumbers[holdSeconds];
    count ++
    likedNumbers[holdSeconds] = count;
    let oldLi = document.getElementById(`${holdSeconds}`)
    oldLi.textContent = `The number ${holdSeconds} was liked ${likedNumbers[holdSeconds]} times.`;
    like.append(oldLi);
   }
   else {
   let newLi = document.createElement("li");
   newLi.id = holdSeconds;
   likedNumbers[holdSeconds] = 1;
   newLi.textContent = `The number ${holdSeconds} was liked.`;
   like.append(newLi);
  }
}
  });
 



  // Comment Button
  
  theSubmit.addEventListener('click', function(event)  {
    event.preventDefault();
    if (paused == true) {
      console.log("Paused, doing nothing when you click!")
    } else {
    let commentGoesHere = document.querySelector("body > div");
    let newP= document.createElement("p");
    let theText = document.querySelector("#comment-input").value;
    newP.textContent = theText;
    commentGoesHere.append(newP);
   
  }
  });


  // pause button

  thePause.addEventListener('click', function(event) {
    if (paused == false) {
    thePause.innerText="Resume";
    clearInterval(timeRunning);
    paused = true;
    }
    else {
      thePause.innerText="Pause";
      timeRunning = setInterval(incrementSeconds, 1000);
      paused = false;
    }
  });
