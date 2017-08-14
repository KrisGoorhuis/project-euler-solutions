
function findAnswer() {
    var upperLimit = 999999999; // TODO: This can probably just be (i) instead of "i < upperLimit. Test that before committing the change.
    for (var i = 1; i < upperLimit; i++) {
        
       
       // Approach that failed for me: hunt and seek the correct answer.
       // Better approach for me: assume the next number we're checking is *the* answer to the problem and attempt to disprove.
        var assumeTheBest = true;
        for (var j = 1; j <= 20; j++) {
            if (i % j === 0) { // This will trigger for every j value when we've found the problem's answer number. Hypothesis was not disproven.
                // do not disprove
            }
            
            if (i % j !== 0) { // This will trigger at some point for every number that is not the problem's answer. Hypothesis disproven!
                assumeTheBest = false;
            }
        }
        
        if (assumeTheBest === true) { // If our check loop fails to disprove the assumption that current number is the answer, this will catch and exit the function with our answer. Otherwise we just move on to the next number to test.
            return i;
        }
    }
    
}

console.log(findAnswer());