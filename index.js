// Start links
$(document).ready(function(){
  $(".home").click(function(){
    $(".contentText").load("welcome.txt").hide().fadeIn('slow');
    document.querySelector('.title').innerHTML = '<div class="letters pt-5">'
    + '<span>W</span>'
    + '<span>e</span>'
    + '<span>l</span>'
    + '<span>c</span>'
    + '<span>o</span>'
    + '<span>m</span>'
    + '<span>e</span>'
   + '</div>';   
    
  });
});

$(document).ready(function(){
  $(".resume").click(function(){
    $(".contentText").load("resume.txt").hide().fadeIn('slow');
    document.querySelector('.title').innerHTML = '<div class="letters pt-5">'
    + '<span>P</span>'
    + '<span>r</span>'
    + '<span>o</span>'
    + '<span>j</span>'
    + '<span>e</span>'
    + '<span>c</span>'
    + '<span>t</span>'
    + '<span>s</span>'
   + '</div>';   
  });
});

$(document).ready(function(){
  $(".me").click(function(){
    $(".contentText").load("me.txt").hide().fadeIn('slow');
    document.querySelector('.title').innerHTML = '<div class="letters pt-5">'
    + '<span>A</span>'
    + '<span>b</span>'
    + '<span>o</span>'
    + '<span>u</span>'
    + '<span>t</span>'
    + '<span>&nbsp;</span>'
    + '<span>M</span>'
    + '<span>e</span>'
   + '</div>';   
  });
});

// Socials start
function socialOops(socialName){
  document.querySelector('.contentText').innerHTML = 
  "<center> Once I make a " + socialName + " I will put it here!</center>";
  document.querySelector('.title').innerHTML = '<div class="letters pt-5">'
    + '<span>O</span>'
    + '<span>o</span>'
    + '<span>p</span>'
    + '<span>s</span>'
    + '<span>.</span>'
    + '<span>.</span>'
    + '<span>.</span>'
   + '</div>';   
}


$(document).ready(function(){
  $(".twitter").click(function(){
    socialOops("Twitter");
  });
});

$(document).ready(function(){
  $(".git").click(function(){
    socialOops("GitHub");
  });
});

$(document).ready(function(){
  $(".insta").click(function(){
    socialOops("Instagram");
  });
});

$(document).ready(function(){
  $(".facebook").click(function(){
    socialOops("Facebook");
  });
});

$(document).ready(function(){
  $(".linkedIn").click(function(){
    socialOops("LinkedIn");
  });
});
//Socials End

// End Links




let lightSwitch = 1;
//draw the moon into moon class
document.querySelector(".moon").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">'
    +   '<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>'
    + '</svg>';
    
// Goes dark mode when triggered
function goDark() {
    let element = document.body; 
    element.classList.toggle("go-dark");
}

// draws either sun or moon icon depeneding on if the lightswitch is on
function drawSunOrMoon (picUrl, minusOrPlus) {
    document.querySelector(".moon").innerHTML = picUrl;
        minusOrPlus;
}

function lights(){
    if(lightSwitch == 0){
        drawSunOrMoon('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">'
            +'<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>'
            +'</svg>', lightSwitch++)              
    }
    else if(lightSwitch == 1){       
        drawSunOrMoon('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">'
            + '<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>'
            + '</svg>', lightSwitch--);
    } 
}

let background = document.querySelector(".background");

function drawCircles() {
  for(let i = 1; i < 30; i++){ 
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);
    let randomSize = Math.floor(Math.random() * 100);
    background.innerHTML += `<div style='font-size: ${randomSize}px; position:absolute; left: ${randomX}px; top: ${randomY}px;'>&#x25CF;</div>`;
  }
}

drawCircles();










