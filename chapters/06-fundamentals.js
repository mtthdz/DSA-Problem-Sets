/**
 * 6.0
 * Time complexity describes the number of operations a program will execute given the size of input n
 * Space complexity describes the amount of memory and variables used additionally to input n
 *  
 *
 * consider the following algorithm:
 *  assuming each line of code is an operation, there are 3 operations (8, 9, 16).
 *  within the for loop, there's another 3 operations (11,12,13), where index = n
 *  this algorithm's time complexity is 3n + 3, where n = input size
 *  this algorithm's space complexity is 1, as the only variable is 'min'
 */
function getMin(array) {
    let min;
    for(let index = 0; index < array.length; index++) {
        const element = array[index];
        if (min === undefined || element < min) {
            min = element;
        };
    };

    return min;
}

/**
 * Asymptotic analysis describes the behaviour of functions as their inputs approach infinity.
 *  looking at the above algorithm, '+ 3' doesn't contribute much when n = 1,000,000
 *  i.e. 3n + 3 = 3(1,000,000) + 3 = 3,000,003
 * 
 * Big O = Big Order (rate of growth) of a function
 *  if we have a program with a runtime of 7n^3 + 3n^2 + 5,
 *  the Big O notation is O(n^3), as Big O only cares about the 'biggest' term in time & space complexity
 *  Big O combines the concerns of both time & space with asymptotic analysis
 */



/**
 * TAKEAWAYS
 *  - Big O cares about the algorithm's highest order in the worst case scenario
 *  - time complexity is not a direct measure of program runtime length, but how many operations it performs dependent on input size
 */


/**
 * test function for node environment
 */
const testFn = () => {
    console.log('it works');
}

export default testFn;