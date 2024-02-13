const timer = document.querySelector('.timerContainer')

const timerDiv = () => {
  const timer = document.querySelector(".timer");
  timer.classList.add("timer");
  const outer = document.createElement("div");
  outer.classList.add("outer");
  const inner = document.createElement("div");
  inner.classList.add("inner");
  const number = document.createElement("p");
  number.classList.add("number");
  number.innerText = 60;
  // creazion svg
  const divSvg = document.querySelector(".svg");
  const secondi = document.createElement("p").innerText = "Secondi"
  
  const rimanenti = document.createElement("p").innerText = "Rimanenti"
  
 
  // michele ci dispiace :(
  const svg = `<svg
  class="svgTimer"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="160px"
  height="160px"
>
  <defs>
    <linearGradient id="GradientColor">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="#673ab7" />
    </linearGradient>
  </defs>
  <circle class="circleTimer" cx="80" cy="80" r="70" stroke-linecap="round" />
</svg>`;
  divSvg.innerHTML = svg;

  // classi svg e circle

  // funzione per il timer
  let seconds = 60;
  function timerFunction() {
    let interval = setInterval(function () {
      seconds--;
      document.querySelector(".number").innerHTML = seconds;
      if (seconds === 0) clearTimeout(interval);
    }, 1000);
  }

  timerFunction();
  // append the element

  timer.append(outer);
  outer.append(inner);
  inner.append(secondi)
  inner.append(number);
  inner.append(rimanenti)
  secondi.classList.add("prova")
  console.dir(timer);
};
timerDiv();
timer.document.append(timerDiv)