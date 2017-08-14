function findSumOfSquares() {
    var answer = 0;
    for (var i = 1; i <= 100; i++) {
        answer += i * i;
    }
    return answer;
}

function findSquareOfSums() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum * sum;
}

function findDifference() {
    return findSquareOfSums() - findSumOfSquares();
}

console.log(findDifference());