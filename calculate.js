
var boundMax =document.getElementById("bounds-1").value;
var boundA1  =document.getElementById("bounds-2").value;
var boundA2  =document.getElementById("bounds-3").value;
var boundA3  =document.getElementById("bounds-4").value;
var boundB1  =document.getElementById("bounds-5").value;
var boundB2  =document.getElementById("bounds-6").value;
var boundB3  =document.getElementById("bounds-7").value;
var boundC1 =document.getElementById("bounds-8").value;
var boundC2  =document.getElementById("bounds-9").value;
var boundC3  =document.getElementById("bounds-10").value;
var boundD1 =document.getElementById("bounds-11").value;
var boundF2 =document.getElementById("bounds-12").value;



var countA1  =0;
var countA2  =0;
var countA3  =0;
var countB1  =0;
var countB2  =0;
var countB3  =0;
var countC1 =0;
var countC2  =0;
var countC3  =0;
var countD1 =0;
var countF2 =0;

function updateBounds(){
    boundMax =document.getElementById("bounds-1").value;
    boundA1  =document.getElementById("bounds-2").value;
    boundA2  =document.getElementById("bounds-3").value;
    boundA3  =document.getElementById("bounds-4").value;
    boundB1  =document.getElementById("bounds-5").value;
    boundB2  =document.getElementById("bounds-6").value;
    boundB3  =document.getElementById("bounds-7").value;
    boundC1 =document.getElementById("bounds-8").value;
    boundC2  =document.getElementById("bounds-9").value;
    boundC3  =document.getElementById("bounds-10").value;
    boundD1 =document.getElementById("bounds-11").value;
    boundF2 =document.getElementById("bounds-12").value;
}

var grades = [];
var newGrade = document.getElementById('newGradeBox');


var grades = [];
var newGrade = document.getElementById('newGradeBox');

newGrade.addEventListener('keydown', function(event) {
    updateBounds();
    if (event.key === 'Enter') {
      event.preventDefault();
      const gradeInput = parseFloat(newGrade.value);
      console.log(gradeInput);
      console.log(boundMax);
      if (!isNaN(gradeInput) && gradeInput <= parseFloat(boundMax)) {
        grades.push(gradeInput);
        newGrade.value = "";
        var warning = document.getElementById("errorMessage");
        warning.textContent = "";
        updateCount();
        makeCharts();
        
      } else {
        var warning = document.getElementById("errorMessage");
        warning.textContent = "*INVALID INPUT";
      }
    }
  });
  

function updateCount(){
    updateBounds();
    countA1  =0;
    countA2  =0;
    countA3  =0;
    countB1  =0;
    countB2  =0;
    countB3  =0;
    countC1 = 0;
    countC2  =0;
    countC3  =0;
    countD1 =0;
    countF2 =0;

    for (var i = 0; i < grades.length; i++) {
        if (parseFloat(grades[i]) >= parseFloat(boundMax)) {
          console.log("Too high, too smart");
        } else if (parseFloat(grades[i]) > parseFloat(boundA1) && parseFloat(grades[i]) <= parseFloat(boundMax)) {
          console.log("grades[i] is within A+ bounds");
          countA1++;
          console.log(countA1);
        } else if (parseFloat(grades[i]) > parseFloat(boundA2) && parseFloat(grades[i]) <= parseFloat(boundA1)) {
          console.log("grades[i] is within A bounds");
          countA2++;
        } else if (parseFloat(grades[i]) > parseFloat(boundA3) && parseFloat(grades[i]) <= parseFloat(boundA2)) {
          console.log("grades[i] is within A- bounds");
          countA3++;
        } else if (parseFloat(grades[i]) > parseFloat(boundB1) && parseFloat(grades[i]) <= parseFloat(boundA3)) {
          console.log("grades[i] is within B+ bounds");
          countB1++;
        } else if (parseFloat(grades[i]) > parseFloat(boundB2) && parseFloat(grades[i]) <= parseFloat(boundB1)) {
          console.log("grades[i] is within B bounds");
          countB2++;
        } else if (parseFloat(grades[i]) > parseFloat(boundB3) && parseFloat(grades[i]) <= parseFloat(boundB2)) {
          console.log("grades[i] is within B- bounds");
          countB3++;
        } else if (parseFloat(grades[i]) > parseFloat(boundC1) && parseFloat(grades[i]) <= parseFloat(boundB3)) {
          console.log("grades[i] is within C+ bounds");
          countC1++;
        } else if (parseFloat(grades[i]) > parseFloat(boundC2) && parseFloat(grades[i]) <= parseFloat(boundC1)) {
          console.log("grades[i] is within C bounds");
          countC2++;
        } else if (parseFloat(grades[i]) > parseFloat(boundC3) && parseFloat(grades[i]) <= parseFloat(boundC2)) {
          console.log("grades[i] is within C- bounds");
          countC3++;
        } else if (parseFloat(grades[i]) > parseFloat(boundD1) && parseFloat(grades[i]) <= parseFloat(boundC3)) {
          console.log("grades[i] is within D bounds");
          countD1++;
        } else if (parseFloat(grades[i]) > parseFloat(boundF2) && parseFloat(grades[i]) <= parseFloat(boundD1)) {
          console.log("grades[i] is within F bounds");
          countF2++;
        } else {
          console.log("grades[i] is outside the defined bounds");
          
        }
      }
    }

    function makeCharts() {
        var bar1 = document.querySelector(".bar.bar-1");
        var bar2 = document.querySelector(".bar.bar-2");
        var bar3 = document.querySelector(".bar.bar-3");
        var bar4 = document.querySelector(".bar.bar-4");
        var bar5 = document.querySelector(".bar.bar-5");
        var bar6 = document.querySelector(".bar.bar-6");
        var bar7 = document.querySelector(".bar.bar-7");
        var bar8 = document.querySelector(".bar.bar-8");
        var bar9 = document.querySelector(".bar.bar-9");
        var bar10 = document.querySelector(".bar.bar-10");
        var bar11 = document.querySelector(".bar.bar-11");


      

        bar1.style.width = countA1 * 10 + "px";
        bar2.style.width = countA2 * 10 + "px";
        bar3.style.width = countA3 * 10 + "px";
        bar4.style.width = countB1 * 10 + "px";
        bar5.style.width = countB2 * 10 + "px";
        bar6.style.width = countB3 * 10 + "px";
        bar7.style.width = countC1 * 10 + "px";
        bar8.style.width = countC2 * 10 + "px";
        bar9.style.width = countC3 * 10 + "px";
        bar10.style.width = countD1 * 10 + "px";
        bar11.style.width = countF2 * 10 + "px";
      }
      
// var bar = document.querySelector(".bar-1");

// function increaseBarWidth(width) {
//   let barWidth = 0;
//   const interval = setInterval(() => {
//     if (barWidth >= width) {
//       clearInterval(interval);
//     } else {
//       barWidth += 10;
//       bar.style.width = barWidth + "%";
//     }
//   }, 500);
// }

// // Example: Increase the bar's width to 80%
// increaseBarWidth(80);







