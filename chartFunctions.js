async function chartIt() {
  await getData();
  let ctx = document.getElementById('chart').getContext('2d');
  var myChart = new Chart(ctx, chartConfing);
  document.getElementById('toHide').style.display = "none";
}
async function getData() {
  const uid = document.getElementById('uid').value;
  const user = document.getElementById('Username').value;
  const resp = await fetch('http://'+HOST+'/SensorsIOT/getTrend.js.php?uid='+uid+'&user='+user);
  const data = await resp.json();
  console.log(data[0]);
  for (var i = 0; i < data.length; i++) {
    xlabels.push(data[i].at);
    tempVals.push(parseFloat(data[i].temperature));
    humVals.push(parseFloat(data[i].humidity));
    gasVals.push(parseFloat(data[i].co2) * 100);
  }
}
