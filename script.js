let home = document.querySelector(".home");
let projects = document.querySelector(".projects");
let me = document.querySelector(".me");

let topLeft = document.querySelector(".top-left");
let topLeftText = document.querySelector(".topLeftText");

let middle = document.querySelector(".middle");
let middleText = document.querySelector(".middleText");


let background = document.querySelector(".background");


$(document).ready(function(){
    $(".home").click(function(){
      $(".middleText").load("welcome.txt").hide().fadeIn('slow');
      topLeftText.innerHTML = "Welcome to My Portfolio";
    });
});

$(document).ready(function(){
    $(".projects").click(function(){
      $(".middleText").load("resume.txt").hide().fadeIn('slow');
      topLeftText.innerHTML = "Past Projects";
    });
});

$(document).ready(function(){
    $(".me").click(function(){
      $(".middleText").load("me.txt").hide().fadeIn('slow');
      topLeftText.innerHTML = "A Bit About Me";
    });
});

let indexFile = " ";
$.get("index.html", function(response) {
    indexFile = response; 
    console.log(String(indexFile))
});



// $(document).ready(function(){
//     let i = 0;
//     let speed = 50;
//     // function typeWriter(){
    
//     // if(i < indexFile.length){
//     //     background.innerHTML += indexFile.charAt[i];
//     //     i++;
//     //      setTimeout(typeWriter, speed);  
//     // }  

//     // }
    



//     let typeWriter = setInterval(function () {
//         for(let i = 0; i < indexFile.length; i++){
//             background.innerHTML += indexFile.charAt[i];
//         }
//     }, 700);
//     setTimeout(typeWriter, 2000);
//     // setInterval(function(){clearInterval(typeWriter), 8000});


//     // let typed = new Typed(".typing",{
//     //     strings: ["Freelancer","Developer","Designer"],
//     //     typeSpeed: 100,
//     //     bacSpeed: 60,
//     //     loop: true
//     //    })


// });







