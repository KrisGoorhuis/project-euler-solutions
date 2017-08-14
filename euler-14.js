// Both are fast enough

var steps = 0;

var frontRunner = {
  "tested_number": 1,
  "steps_required": 1
};

function testN(n) {

    if (n === 1) {
      if (steps > frontRunner.steps_required) {
        frontRunner.steps_required = steps;
        frontRunner.tested_number = i;
      }
      
    } else if (n % 2 === 0) { // n is even
      n = n/2;
      steps++;
      testN(n);
      
    } else if (n % 2 !== 0) { // n is odd
      n = (n*3) + 1;
      steps++;
      testN(n);
    } 
}

for (var i = 1; i < 1000000; i++) {
  steps = 0;
  testN(i);
}

console.log("Leader: " + frontRunner.tested_number + " in " + frontRunner.steps_required + " steps");


------
   
   
   var limit = 100;
var longestChain = 1;
var largestProducer = 1;

function operateOn(num) {
  if (num % 2 === 0) {
    // even
    return num/2;
  }
  if (num % 2 !== 0) {
    return (num*3) + 1;
  }
}

function findChainLength(num) {
  var chainLength = 1;
  var currentStartingNumber = num;
  
  while (num !== 1) {
    num = operateOn(num);
    chainLength++;
  }
  
  if (num === 1) {
    if (chainLength > longestChain) {
      longestChain = chainLength;
      largestProducer = currentStartingNumber;
    }
  }
}


for (i = 1; i < limit; i++) {
  findChainLength(i);
}

console.log(largestProducer + " at " + longestChain + " terms");