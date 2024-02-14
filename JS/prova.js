/*function mostraPaginaSuccessiva() {
    const template = document.querySelectorAll('template')
    console.log(template)
    for (let i = 0; i < template.length; i++) {
        document.content.cloneNode(true)
        document.body.innerHTML = ''
        document.body.appendChild(template[i])
    }
}

 document.querySelector('.btn').addEventListener('click', function(){
    mostraPaginaSuccessiva()
})      
    //document.body.innerHTML = '';
    //document.body.appendChild(template);

// Aggiungi un evento click al pulsante per andare alla pagina successiva
/*document.getElementById('paginaSuccessivaButton').addEventListener('click', function() {
    mostraPaginaSuccessiva();
});*/
/*let btn = document.querySelectorAll('.btn')
function cambiaPagina(){
    let template = document.querySelectorAll('template')
    if (template.classList.contains('templateResults')) {
        return template
    }else
        return template.classList.contains('templateFeedback')
    }

        
btn.addEventListener('click',function(){
    cambiaPagina()})    */
    /*let page = 0;
    const templates = document.querySelectorAll('template');
    
    function mostraPaginaSuccessiva() {
      const template = templates[page];
    
      if (template) {
        const content = template.content.cloneNode(true);
    
        document.body.innerHTML = '';
        document.body.appendChild(content);
    
        page++;
      }
    }
    
    document.querySelector('.btn').addEventListener('click', function() {
      mostraPaginaSuccessiva(); 
    });*/
   /* let page = 0;
const templates = document.querySelectorAll('template');

function mostraPaginaSuccessiva(pagesToAdvance = 1) {
  for (let i = 0; i < pagesToAdvance; i++) {
    const template = templates[page];

    if (template) {
      const content = template.content.cloneNode(true);

      document.body.innerHTML = '';
      document.body.appendChild(content);

      page++;
    } else {
        console.log('No more pages available');
        break;
      
    }
  }
}

document.querySelector('.btn').addEventListener('click', function() {
  mostraPaginaSuccessiva(1); 
});*/

const templates = document.querySelectorAll('template');
let page = 0;

function riempiTemplate() {
    const template = templates[page].content.cloneNode(true);
    document.body.innerHTML = "";
    document.body.append(template);
    console.log(template);
}

document.querySelector('.btn').addEventListener('click', function() {
    if (page < templates.length) {
        riempiTemplate();
        page++;
    }
});