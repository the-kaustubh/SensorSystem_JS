var data = {};
var xlabels = [];
var tempVals = [];
var humVals = [];
var gasVals = [];
const chartConfing = {
  type: 'line',
  data: {
      labels: xlabels,
      datasets: [{
          label: 'Temperature',
          data: tempVals,
          backgroundColor:
              'rgba(153, 102, 255, 0.2)',
          borderColor:
              'rgba(153, 102, 255, 0.2)',
          borderWidth: 1
      },
      {
          label: 'Humidity',
          data: humVals,
          backgroundColor:
              'rgba(153, 102, 255, 0.2)',
          borderColor:
              'rgba(153, 102, 255, 0.2)',
          borderWidth: 1
      },
      {
          label: 'CO2',
          data: gasVals,
          backgroundColor:
              'rgba(153, 102, 255, 0.2)',
          borderColor:
              'rgba(153, 102, 255, 0.2)',
          borderWidth: 1
      }]
  }
};
