
function checkForPalindrome(num) {
    var array = num.toString().split("").map(Number);
    for (var i = 0; i < array.length/2; i++) {
        if (array[i] !== array[array.length-1-i]) {
            return false;
        }
    }
    return true;
}

function findLargestPalindrome() {
    var currentLargest = 0;
    var n;
    for (i = 0; i < 999; i++) {
        for (j = 0; j < 999; j++) {
            n = i * j;
            if (checkForPalindrome(n) === true && n > currentLargest) {
                currentLargest = n;
            }
        }
    }
    return currentLargest;
}

console.log(findLargestPalindrome());