
let seconds = 60;
function timer(){
    let interval = setInterval(function(){   
       seconds--
       document.querySelector("#timer1").innerHTML = seconds;
       if(seconds === 0)
       clearTimeout(interval)
    }, 100)
}
timer()

