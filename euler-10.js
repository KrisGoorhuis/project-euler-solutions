var target = 50;
var sieveArray = [];
var primesArray = [];
var answer = 0;


// Making an array full of trues.
// Anything left marked true has a prime index;
function generateSieveArray() {
    for (i = 0; i < target; i++) {
        sieveArray.push(true);
    }
}

// 2 is the first prime. Eliminate everything that is a multiple of it with a false flag.
// 3 is the next prime. Eliminate.
// i is now 4 - but 4 has been set to false. No math.
// 5 is prime. Eliminate.
// i is now 6 - but it's been set to false. No math.
// and so on...
function filterArray() {
  for (var i = 2; i < sieveArray.length; i++) {
    if (sieveArray[i] === true) {
      for (var j = i * i; j < sieveArray.length; j += i) {
        sieveArray[j] = false;
      }
    }
  }
}


// 2 is the first prime. Just start there.
function acquirePrimesByIndex() {
  for (var i = 2; i < sieveArray.length; i++) {
    if (sieveArray[i] === true) {
      primesArray.push(i);
    }
  }
}

function sumPrimes() {
  for (var i = 0; i < primesArray.length; i++) {
    answer += primesArray[i];
  }
}



generateSieveArray();
filterArray();
acquirePrimesByIndex();
sumPrimes();
console.log(answer);


--------------------------
   // old solution:
   // This would work eventually. I don't know why the sieve is so much faster, but it is.
   // Seems like this one should be setting a ton of false flags that don't require calculation as well. 
   
var target = 10;
var sieveArray = [];
var primesArray = [];
var answer = 0;

function generateSieveArray() {
    for (var i = 2; i <= target; i++) {
        sieveArray.push(i);
    }
}

function findPrimes() {
    for (var i = 0; i < sieveArray.length; i ++) {
        
        if (sieveArray[i] !== false) {
            for (var j = i + 1; j < sieveArray.length; j++) {
                if (sieveArray[j] % sieveArray[i] === 0) {
                    sieveArray[j] = false;
                }
            }
        }
        
    }
    
    for (var i = 0; i < sieveArray.length; i++) {
        if (sieveArray[i] !== false) {
            primesArray.push(sieveArray[i]);
        }
    }
}

function sumPrimes() {
  for (var i = 0; i < primesArray.length; i++) {
    answer += primesArray[i];
  }
}

generateSieveArray();
findPrimes();
sumPrimes();
console.log(answer);