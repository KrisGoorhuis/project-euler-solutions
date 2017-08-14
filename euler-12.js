// Goal calculation was 500. This is too slow for 500.

var triangleNumbers = [1];
var lastTriangle;

function findNextTriangle() {
  // We're adding a number that increases by 1 each time to the previous triangle. 
  // We can tie that to .length. 'cause we kinda did that anyway = incrementing a var would be fine too I think
  
  lastTriangle = triangleNumbers[triangleNumbers.length-1];
  triangleNumbers.push(lastTriangle + triangleNumbers.length+1);
}

function findTriangleWithOverNDivisors(target) {
  var divisors = [];
  
  for (var i = 0; i < lastTriangle; i ++) {
    if (lastTriangle % i === 0) {
      divisors.push(i);
    }
  }
  
  if (divisors.length > target) {
    console.log(lastTriangle);
  } else {
    findNextTriangle();
    findTriangleWithOverNDivisors(target);
  }
  
}

findTriangleWithOverNDivisors(100);