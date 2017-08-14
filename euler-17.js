// Not solved.
// "ninehundred ninety eight and ninety nine
// getNumberWordBelowOneHundredAndOne and getNumberWordBelowTwentyOne are firing again immediately after - it is not going through the actions for i again. 
// Like they're calling themselves after the current iteration's work is done but before the next iteration starts.

var wordArray = [];

for (var i = 1; i <= 1000; i++) {
    var currentNumber = i;
    if (currentNumber <= 20) {
        getNumberWordBelowTwentyOne(currentNumber);
    }
    if (20 < currentNumber <= 100) {
        var firstDigit = parseInt(currentNumber.toString().slice(0, 1));
        getNumberWordBelowOneHundredAndOne(firstDigit);
        
        var secondDigit = parseInt(currentNumber.toString().slice(1, 2));
        getNumberWordBelowTwentyOne(secondDigit);
        
    }
    if (100 < currentNumber < 1000) {
        var firstDigit = parseInt(currentNumber.toString().slice(0, 1));
        if (firstDigit !== 0) {
            getNumberWordBelowOneThousand(firstDigit);
        }
        
        var secondDigit = parseInt(currentNumber.toString().slice(1, 2));
        if (secondDigit !== 0) {
            getNumberWordBelowOneHundredAndOne(secondDigit);
        }
        
        
        var thirdDigit = parseInt(currentNumber.toString().slice(2, 3));
        if (thirdDigit !== 0) {
            getNumberWordBelowTwentyOne(thirdDigit);
        }
        
        if (thirdDigit !==0 && secondDigit !== 0) {
           wordArray.push("and"); 
        }
        
        
        
        
    }
    
    if (currentNumber === 1000) {
        wordArray.push("onethousand");
    }
}

function getNumberWordBelowTwentyOne(num) {
   switch(num) {
    case 1:
        wordArray.push("one");
        break;
    case 2:
        wordArray.push("two");
        break;
    case 3:
        wordArray.push("three");
        break;
    case 4:
        wordArray.push("four");
        break;
    case 5:
        wordArray.push("five");
        break;
    case 6:
        wordArray.push("six");
        break;
    case 7:
        wordArray.push("seven");
        break;
    case 8:
        wordArray.push("eight");
        break;
    case 9:
        wordArray.push("nine");
        break;
    case 10:
        wordArray.push("ten");
        break;
    case 11:
        wordArray.push("eleven");
        break;
    case 12:
        wordArray.push("twelve");
        break;
    case 13:
        wordArray.push("thirteen");
        break;
    case 14:
        wordArray.push("fourteen");
        break;
    case 15:
        wordArray.push("fifteen");
        break;
    case 16:
        wordArray.push("sixteen");
        break;
    case 17:
        wordArray.push("seventeen");
        break;
    case 18:
        wordArray.push("eighteen");
        break;
    case 19:
        wordArray.push("nineteen");
        break;
    case 20:
        wordArray.push("twenty");
        break;
    } 
}

function getNumberWordBelowOneHundredAndOne(num) {
    switch(num) {
        case 3: 
            wordArray.push("thirty");
            break;
        case 4: 
            wordArray.push("fourty");
            break;
        case 5: 
            wordArray.push("fifty");
            break;
        case 6:
            wordArray.push("sixty");
            break;
        case 7: 
            wordArray.push("seventy");
            break;
        case 8: 
            wordArray.push("eighty");
            break;
        case 9: 
            wordArray.push("ninety");
            break;
    }
}

function getNumberWordBelowOneThousand(num) {
    switch(num) {
        case 3:
            wordArray.push("threehundred");
            break;
        case 2: 
            wordArray.push("twohundred");
            break;
        case 3: 
            wordArray.push("threehundred");
            break;
        case 4: 
            wordArray.push("fourhundred");
            break;
        case 5: 
            wordArray.push("fivehundred");
            break;
        case 6:
            wordArray.push("sixhundred");
            break;
        case 7: 
            wordArray.push("sevenhundred");
            break;
        case 8: 
            wordArray.push("eighthundred");
            break;
        case 9: 
            wordArray.push("ninehundred");
            break;
    }
}

console.log(wordArray);

var answer = 0;
for (var i = 0; i < wordArray.length; i++) {
    answer += wordArray[i].length;
    
}
console.log(answer);














