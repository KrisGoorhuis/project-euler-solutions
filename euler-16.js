// Not solved.

// I have no idea how to prevent a number from being returned in exponential notation.
// This is where I'd google it.
// Without google access, I can only present my solution as it would work without exponential notation. It works for 2^15!


function findNthPowerOfTwo(power) {
    var value = 2;
    for (var i = power; i > 1; i--) {
        value = value*2;
    }
    return value;
}

function findSumOfDigits(num) {
    var array = num.toString().split("").map(Number);
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum+= array[i];
    }
    return sum;
}


function findAnswer() {
    var num = findNthPowerOfTwo(1000);
    var sum = findSumOfDigits(num);
    console.log(num);
    console.log(sum);
}

findAnswer();