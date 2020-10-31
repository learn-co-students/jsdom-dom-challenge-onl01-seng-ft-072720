

document.addEventListener("DOMContentLoaded", () => {


    let minus_button = document.getElementById("minus")
    let plus_button = document.getElementById("plus")
    let heart_button = document.getElementById("heart")
    let pause_button = document.getElementById("pause")
    let counter_img = document.getElementById("counter")

    let timer = 0
    

    let spaghetti = setInterval( () => {
        counter_img.innerText = timer++;
    }, 1000);

    

    minus_button.addEventListener("click", () => {
        counter_img.innerText = timer--;
    });


    plus_button.addEventListener("click", () => {
        counter_img.innerText = timer++;
    });


    heart_button.addEventListener("click", () => {
        let likes = counter.innerText;
        
    })


    //pause function
    pause_button.addEventListener("click", () => {
        if (pause_button.innerText = "pause") {
            clearInterval(spaghetti)
            pause_button.innerText = "resume"
        } else { 
            
            pause_button.innerText = "pause"
        }
    })
    





})

