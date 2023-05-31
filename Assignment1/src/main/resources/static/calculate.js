
var boundMax = parseInt(document.getElementById("bounds-1").value);
var boundA1 = parseInt(document.getElementById("bounds-2").value);
var boundA2 = parseInt(document.getElementById("bounds-3").value);
var boundA3 = parseInt(document.getElementById("bounds-4").value);
var boundB1 = parseInt(document.getElementById("bounds-5").value);
var boundB2 = parseInt(document.getElementById("bounds-6").value);
var boundB3 = parseInt(document.getElementById("bounds-7").value);
var boundC1 = parseInt(document.getElementById("bounds-8").value);
var boundC2 = parseInt(document.getElementById("bounds-9").value);
var boundC3 = parseInt(document.getElementById("bounds-10").value);
var boundD1 = parseInt(document.getElementById("bounds-11").value);
var boundF2 = parseInt(document.getElementById("bounds-12").value);

var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];
var bounds = ["bounds-1","bounds-2","bounds-3","bounds-4","bounds-5","bounds-6","bounds-7","bounds-8","bounds-9","bounds-10","bounds-11","bounds-12"];


  var box = document.getElementById(bounds[0]);
  box.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;

      } else {
        window.alert("Wrong Bound Input");
        box.value = "";
        
      }
  })
  var box2 = document.getElementById(bounds[1]);
  box2.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;

      } else {
        window.alert("Wrong Bound Input");
        box2.value = "";
        
      }
  })
  var box3 = document.getElementById(bounds[2]);
  box3.addEventListener("blur",function(event){
      event.preventDefault(); 
      
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;

      } else {
        window.alert("Wrong Bound Input");
        box3.value = "";
        
      }

  })
  var box4 = document.getElementById(bounds[3]);
  box4.addEventListener("blur",function(event){
      event.preventDefault(); 
      
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;

      } else {
        window.alert("Wrong Bound Input");
        box4.value = "";
        
      }

  })
  var box5 = document.getElementById(bounds[4]);
  box5.addEventListener("blur",function(event){
      event.preventDefault(); 
      
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;

      } else {
        window.alert("Wrong Bound Input");
        box5.value = "";
        
      }
  })
  var box6 = document.getElementById(bounds[5]);
  box6.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;

      } else {
        window.alert("Wrong Bound Input");
        box6.value = "";
        
      }

  })
  var box7 = document.getElementById(bounds[6]);
  box7.addEventListener("blur",function(event){
      event.preventDefault(); 
      
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;

      } else {
        window.alert("Wrong Bound Input");
        box7.value = ""; 
      }
  })
  var box8 = document.getElementById(bounds[7]);
  box8.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;
        console.log("duma1");

      } else {
        window.alert("Wrong Bound Input");
        box8.value = ""; 
      }
  })
  var box9 = document.getElementById(bounds[8]);
  box9.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;
      } else {
        window.alert("Wrong Bound Input");
        box9.value = "";
        
      }
  })
  var box10 = document.getElementById(bounds[9]);
  box10.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;
      } else {
        window.alert("Wrong Bound Input");
        box10.value = "";
        
      }
  })
  var box11 = document.getElementById(bounds[10]);
  box11.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;
      } else {
        window.alert("Wrong Bound Input");
        box11.value = "";
      }
  })
  var box12 = document.getElementById(bounds[11]);
  box12.addEventListener("blur",function(event){
      event.preventDefault(); 
      if (isValidBound()) {
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;
      } else {
        window.alert("Wrong Bound Input");
        box12.value = "";
      }
  })


function isValidBound(){
  updateBounds();
  if (
    boundMax > boundA1 &&
    boundA1 > boundA2 &&
    boundA2 > boundA3 &&
    boundA3 > boundB1 &&
    boundB1 > boundB2 &&
    boundB2 > boundB3 &&
    boundB3 > boundD1 &&
    boundD1 > boundF2
  ) {
    return true;
  }
  return false;
}



function updateBounds(){
  boundMax = parseInt(document.getElementById("bounds-1").value);
  boundA1 = parseInt(document.getElementById("bounds-2").value);
  boundA2 = parseInt(document.getElementById("bounds-3").value);
  boundA3 = parseInt(document.getElementById("bounds-4").value);
  boundB1 = parseInt(document.getElementById("bounds-5").value);
  boundB2 = parseInt(document.getElementById("bounds-6").value);
  boundB3 = parseInt(document.getElementById("bounds-7").value);
  boundC1 = parseInt(document.getElementById("bounds-8").value);
  boundC2 = parseInt(document.getElementById("bounds-9").value);
  boundC3 = parseInt(document.getElementById("bounds-10").value);
  boundD1 = parseInt(document.getElementById("bounds-11").value);
  boundF2 = parseInt(document.getElementById("bounds-12").value);
}


function resetcount(){
    for ( var i = 0; i< count.length; i++){
        count[i] = 0; 
    }
  }
function updateCount() {
    resetcount();
    for (var i = 0; i < grades.length; i++) {
      if (parseFloat(grades[i]) > parseFloat(boundMax)) {
        console.log("Too high, too smart");
      } else if (parseFloat(grades[i]) >= parseFloat(boundA1) && parseFloat(grades[i]) <= parseFloat(boundMax)) {
        count[0]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundA2) && parseFloat(grades[i]) < parseFloat(boundA1)) {
        count[1]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundA3) && parseFloat(grades[i]) < parseFloat(boundA2)) {
        count[2]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundB1) && parseFloat(grades[i]) < parseFloat(boundA3)) {
        count[3]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundB2) && parseFloat(grades[i]) < parseFloat(boundB1)) {
        count[4]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundB3) && parseFloat(grades[i]) < parseFloat(boundB2)) {
        count[5]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundC1) && parseFloat(grades[i]) < parseFloat(boundB3)) {
        count[6]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundC2) && parseFloat(grades[i]) < parseFloat(boundC1)) {
        count[7]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundC3) && parseFloat(grades[i]) < parseFloat(boundC2)) {
        count[8]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundD1) && parseFloat(grades[i]) < parseFloat(boundC3)) {
        count[9]++;
      } else if (parseFloat(grades[i]) >= parseFloat(boundF2) && parseFloat(grades[i]) < parseFloat(boundD1)) {
        count[10]++;
      } else {
      }
    }

  }

var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
var newGrade = document.getElementById('newGradeBox');

newGrade.addEventListener('keydown', function(event) {
    updateBounds();
    if (event.key === 'Enter') {
      event.preventDefault();
      const gradeInput = parseFloat(newGrade.value);
      console.log(gradeInput);
      console.log(boundMax);
      if (!isNaN(gradeInput) && gradeInput <= parseFloat(boundMax) && isValidBound()) {
        grades.push(gradeInput);
        newGrade.value = "";
        var warning = document.getElementById("errorMessage");
        warning.textContent = "";
        updateCount();
        chart.data.datasets[0].data = count;
        chart.update() ;
      } else {
        var warning = document.getElementById("errorMessage");
        warning.textContent = "*INVALID INPUT";
      }
    }
  });
updateCount();

var chartElement = document.getElementById("charts");

chart = new Chart(chartElement, {
  type: 'bar',
  data: {
    labels:['A+','A','A-','B+','B','B-','C+','C','C-','D','F'],
    datasets: [{
      data:count,
    borderWidth: 1,
    backgroundColor: ['lightgreen', 'pink', 'yellow'],

    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 8 
          }
        },
        grid: {
          display: false 
        }
      },
      y: {
        ticks: {
          font: {
            size: 8 
          }
        },
        grid: {
          display: false 
        }
      }
    }
  }
});
