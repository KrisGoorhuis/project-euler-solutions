// Unsolved.
// Made it to 360 divisors before call stack size was exceeded - problem asks about 500+

var nthTriangle;
var n = 1;


function generateTriangle(n) {
  var sum = 0;
  
  for (var i = 0; i <= n; i++) {
    sum = sum + i;
  }
  
  nthTriangle = sum;
  findDivisors(nthTriangle);
}


function findDivisors(num) {
  var max = num/2;
  var divisors = 0;
  
  for (i = 1; i <= max; i++) {
    if (num % i === 0) {
      divisors++;
    }
  }
  divisors++; // We stopped mathing after 1/2 the triangle's value, but it's still divisible by itself.
 
  
  if (divisors < 50) {
    n++;
    generateTriangle(n);
  } else {
    console.log("Divisors for " + num + " (" + n + "th): " + divisors);
  }
}

generateTriangle(n);

