var target = 13195;
var primesBeneathTarget = [];
var primeFactors = [];

function acquirePrimes() {
    for (var i = 2; i <= target/2; i++) {
        var assumePrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                assumePrime = false;
            }
        }
        
        if (assumePrime === true) {
            primesBeneathTarget.push(i);
        }
        
    }
}

function sortOutNonFactors() {
    for (var i = 0; i < primesBeneathTarget.length; i++) {
        if (target % primesBeneathTarget[i] === 0) {
            primeFactors.push(primesBeneathTarget[i]);
        }
    }
}

acquirePrimes();
sortOutNonFactors();

console.log(primeFactors);



-------------------
   
  var target = 13195;
var sieveArray = [];
var primesArray = [];

function generateSieveArray() {
    for (i = 2; i <= target; i++) {
        sieveArray.push(i);
    }
}

function findPrimes() {
    for (i = 0; i < sieveArray.length; i ++) {
        
        if (sieveArray[i] !== false) {
            for (var j = i + 1; j < sieveArray.length; j++) { // The +1 - don't check it against itself or it'll always % to 0
                if (sieveArray[j] % sieveArray[i] === 0) {
                    sieveArray[j] = false;
                }
            }
        }
        
    }
    
    for (i = 0; i < sieveArray.length; i++) {
        if (sieveArray[i] !== false) {
            primesArray.push(sieveArray[i]);
        }
    }
}

function sortOutNonFactors() {
    for (var i = 0; i < primesBeneathTarget.length; i++) {
        if (target % primesBeneathTarget[i] === 0) {
            primeFactors.push(primesBeneathTarget[i]);
        }
    }
}

generateSieveArray();
findPrimes();
console.log(primesArray);

//acquirePrimes();
//sortOutNonFactors();

//console.log(primeFactors);



-------------------------
   
   
   Internet solution: // good grief.

var factor = 2;

function getPrime(number) {
    while(number != factor) {
        if (number % factor === 0) {
            number = number / factor;
        } else {factor += 1}
    }

   console.log(factor);
}
getPrime(600851475143);