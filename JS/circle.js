
let risposteGiuste=5;
let risposteSbagliate = 5;

let risposteTotale = 10;


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      label: '# of Tomatoes',
      data: [risposteGiuste, risposteSbagliate,],
      backgroundColor: [
        '#d20094',
        '#00ffff',
        
        
      ],
      borderColor: [
        '#d20094',
        '#00ffff',
        
       
      ],
      
    }]
  },
  options: {
    
    
    cutout:125,
    
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        onHover: function() {}
      }
    }
  
  }
});






/*********************calcolo risposte giuste ***********************/
let posizioneCorette = document.getElementById('statistics-correct')
let percentualeGiuste = risposteGiuste*100/10

posizioneCorette.append(percentualeGiuste + '%' )

/*********************calcolo risposte sbagliate ***********************/
let posizioneSbagliate = document.getElementById('statistics-wrong')
let percentualeSbagliate = risposteSbagliate*100/10

posizioneSbagliate.append(percentualeSbagliate + '%' )



/*********************quota risposte giuste ***********************/


let quotaCorette = document.getElementById('number-question-correct')


quotaCorette.append(risposteGiuste + '/' + risposteTotale + 'questions' )


/*********************quota risposte sbagliate ***********************/


let quotaSbagliate = document.getElementById('number-question-wrong')


quotaSbagliate.append(risposteSbagliate + '/' + risposteTotale + 'questions' )


