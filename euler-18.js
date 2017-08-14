// Unsolved. 
// Stopped due to tedium.
// 04 needs to be changed to just 4 and stuff.

var rowOne = [75];
var rowTwo = [95, 64];
var rowThree = [17, 47, 82];
var rowFour = [18, 35, 87, 10];
var rowFive = [20, 04, 82, 47, 65];
var rowSix = [19, 01, 23, 75, 03, 34];
var rowSeven = [88, 02, 77, 73, 07, 63, 67];
var rowEight = [99, 65, 04, 28, 06, 16, 70, 92];
var rowNine = [41, 41, 26, 56, 83, 40, 80, 70, 33];
var rowTen = [41, 48, 72, 33, 47, 32, 37, 16, 94, 29];
var rowEleven = [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14];
var rowTwelve = [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57];
var rowThirteen = [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48];
var rowFourteen = [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31];
var rowFifteen = [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23];

var one = 0;
var two = 0;
var three = 0;
var four = 0; 
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;
var ten = 0;
var eleven = 0;
var twelve = 0;
var thirteen = 0;
var fourteen = 0;
var fifteen = 0;

var highestRoute = 0;
var highestRouteSteps = [];

function findRouteSum() {
  var routeSum = rowOne[one] + rowTwo[two] + rowThree[three] + rowFour[four] + rowFive[five] + rowSix[six] + rowSeven[seven] + rowEight[eight] + rowNine[nine] + rowTen[ten] + rowEleven[eleven] + rowTwelve[twelve] + rowThirteen[thirteen] + rowFourteen[fourteen] + rowFifteen[fifteen];
  
  if (routeSum > highestRoute) {
    heighestRoute = routeSum;
    highestRouteSteps.push(rowOne[one] + rowTwo[two] + rowThree[three] + rowFour[four] + rowFive[five] + rowSix[six] + rowSeven[seven] + rowEight[eight] + rowNine[nine] + rowTen[ten] + rowEleven[eleven] + rowTwelve[twelve] + rowThirteen[thirteen] + rowFourteen[fourteen] + rowFifteen[fifteen]);
  }
}



for (i = 0; i < rowFifteen.length; i++) {
  findRoutesum();
  if (i === rowFifteen.length-1) {
    if (fourteen < rowFourteen.length-1) {
      fourteen++;
      i = 0;
    }
    
    if (fourteen === rowFourteen.length) {
      if (thirteen < rowThirteen.length-1) {
        thirteen++;
        fourteen = 0;
        i = 0;
      }
      
      if (thirteen === rowThirteen.length-1) {
        if (twelve < rowTwelve.length-1) {
          twelve++
          thiteen = 0;
          fourteen = 0;
          i = 0;
        }
        
        if (twelve === rowTwelve.length-1) {
          if (eleven < rowEleven.length-1) {
            eleven++;
            twelve = 0;
            thirteen = 0;
            fourteen = 0;
            i = 0;
          }
          
          if (eleven === rowEleven.length-1) {
             if (ten < rowTen.length-1) {
               ten++;
               eleven = 0;
               twelve = 0;
               thirteen = 0;
               fourteen = 0;
               i = 0; // And so on. Maybe I'll skip this problem.
             }
          }
        }
      }
    }
  }
}










