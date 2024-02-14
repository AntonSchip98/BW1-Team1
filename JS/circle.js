
let risposteGiuste=8;
let risposteSbagliate = 2;


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      label: '# of Tomatoes',
      data: [risposteGiuste, risposteSbagliate,],
      backgroundColor: [
        '#00ffff',
        '#d20094',
        
      ],
      borderColor: [
        '#00ffff',
        '#d20094',
       
      ],
      
    }]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false,
    cutout:130,
    boxShadow: '0px 0px 30px 4px rgba(32, 27, 27, 0.4);'
  }
});
 
