// bar-chart code

// The canvas reference ID to display the chart
const chartCanvas2 = document.querySelector('#bar-chart-2')
    
// Create a new chart instance
const newLineChart2 = new Chart(chartCanvas2, {
         
   // Chart configuration
   type: 'bar', // chart type
   data: {
      // Sample five data labels on the horizontal axis
      labels: ['label-1', 'label-2', 'label-3', 'label-4', 'label-5'],
         // Sample five chart datasets
         datasets: [
         {
         label: 'My First Chart', // Chart label
         // Five data points (no % or currency symbols )
         data: [42, 48, 54, 58, 64], 
         // Background colors of bars
         backgroundColor: ['orange'], 
         },
       ],
     },
     // Canvas not responsive by default
     options: {
         responsive: true,
         // indexAxis: 'y',
         plugins: {
             legend: {
                 display: false
             }
         },
         scales: {
             x: {
                 grid:{
                     display:false
                 },
                 ticks: {
                     color: 'white',
                     font: { size: 16 },
                 },
             },
             y: {
                 grid:{
                     display:false
                 },
                 min: 30,
                 ticks: {
                     color: 'white', 
                     font: { size: 16 },
                     callback: function (value) {
                     return value + '%';
                     },
                 },
             }
         }
     }
});