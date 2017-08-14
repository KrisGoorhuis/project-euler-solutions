function findNthPrime(num) {
    var array = [];
    
    var i = 2;
    while (array.length < num) {
        var assumePrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                assumePrime = false;
            }
        }
        if (assumePrime === true) {
            array.push(i);
        }
        i++;
    }
    
    console.log(array[array.length-1]);
}

findNthPrime(10001);