var answer = 2;

function findTerm() {
    var previousNum = 1;
    var currentNum = 2;
    var newNum = 0;
    
    for (var i = 3; newNum < 4000000; i++) { // We have the first two already
        
        newNum = currentNum + previousNum;
        previousNum = currentNum;
        currentNum = newNum;
        
        if (newNum % 2 === 0) {
            answer+= currentNum;
        }
        
    }
}

findTerm();
console.log(answer);