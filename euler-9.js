var limiter = 999; // Lowest limit could have been 426

function findTriplet() {
  for (var i = 1; i < limiter; i++) {
    for (var j = 1; j < limiter; j++) {
      for (var k = 1; k < limiter; k++) {
        if (i*i + j*j === k*k && i+j+k === 1000) {
          return ( i*j*k);
        }
      }
    }
  }
}

console.log(findTriplet());