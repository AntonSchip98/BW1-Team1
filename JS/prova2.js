let templateIndex = 1;
const templateContainer = document.querySelector("#template-container");

// All'avvio della pagina, mostriamo il contenuto del primo template.
showTemplate(templateIndex);

function showTemplate(templateIndex) {
  // Rimuoviamo il contenuto precedente del container.
  templateContainer.innerHTML = "";

  // Otteniamo il contenuto del template corrente.
  const templateContent = document.querySelector(`#template${templateIndex}`).content.cloneNode(true);

  // Aggiungiamo il contenuto del template al container.
  templateContainer.append(templateContent);

  if (templateIndex === 2) {
    timerDiv();
  }

  // Selezioniamo i bottoni dopo aver aggiunto il template al container.
  const switchButtons = document.querySelectorAll(".switchButton");
  // Aggiungiamo un event listener per l'evento "click" a ciascun pulsante.
  switchButtons.forEach((el) => {
    el.addEventListener("click", switchTemplate);
  });
}

function switchTemplate() {
  // templateIndex = templateIndex === 3 ? 1 : templateIndex + 1;
  if (templateIndex === 1 && !document.querySelector("#templateCheckbox").checked) {
    alert("clicca");
    return;
  }
  if (templateIndex != 3) {
    templateIndex++;
  }
  //   inserire la funzione per far partire i quiz
  showTemplate(templateIndex);

  // Mostriamo il nuovo template.
}
