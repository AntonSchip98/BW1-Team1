let isStopped = false;
const stars = Array.from(document.getElementsByClassName('star'));

function highlightStar(star) {
  star.style.filter = "invert(21%) sepia(64%) saturate(6989%) hue-rotate(357deg) brightness(95%) contrast(129%)";
}

function resetStarColor() {
  stars.forEach(star => star.style.filter = "");
}

function getPreviousStars(star) {
  const previousStars = [];
  let previousStar = star.previousElementSibling;
  
  while (previousStar) {
    previousStars.push(previousStar);
    previousStar = previousStar.previousElementSibling;
  }
  
  return previousStars;
}

function toggleColorChange(star) {
  isStopped = !isStopped;

  if (isStopped) {
    const previousStars = getPreviousStars(star);
    previousStars.forEach(highlightStar);
    highlightStar(star);
  } else {
    resetStarColor();
  }
}

function handleMouseOver(event) {
  const target = event.target;
  
  if (target.classList.contains('star')) {
    const previousStars = getPreviousStars(target);
    previousStars.forEach(highlightStar);
    highlightStar(target);
  }
}

function handleMouseOut() {
  if (!isStopped) {
    resetStarColor();
  }
}

function handleStarClick(event) {
  const target = event.target;
  
  toggleColorChange(target);
}

document.addEventListener('mouseover', handleMouseOver);
document.addEventListener('mouseout', handleMouseOut);
stars.forEach(star => {
  star.addEventListener('click', handleStarClick);
});