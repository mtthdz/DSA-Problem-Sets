/**
 * 7.0
 * Time Complexity is calculated as the sum of n statements in a function
 * denoting t(n) as the total time of a function, t(n) = t(statement 1) + t(statement 2) + t(statement n); 
 * if each statement executes a basic operation i.e. no loops, it takes constant time O(1)
 *
 *
 * for conditionals e, we always take the worst-case i.e. whichever conditional statement holds more statements
 * 
 * loops
 * for loops, take the sum of statements inside a loop and multiply by the number of iterations.
 *  t(n) = n * [ t(s1) + t(s2) ]
 *  loops that grow proportionate to the size of n has a linear time complexity, O(n)
 *  looping through half of n is still O(n), because we drop constants
 *  i.e. 1/2(n) => O(n)
 *  if n is bound to a number such as n=4, runtime is O(4) => O(1) as the loop is no longer dependent on the size of n
 *  basically if n equates to a number, we can calculate the specfic runtime which happens to be O(4).
 * 
 * consider a nested loop to iterate through a multidimensional array:
 *  t(n) = n( t(s1) + m( t(s2) + t(s3) ) )
 *  assuming all three statements are O(1), runtime = O(n*m)
 *  assuming we would have to irate on n again, runtime = O(n^3)
 */
for (let i = 0; i < n; i++) {
    // statement 1

    for (let j = 0; j < m; j++) {
        // statement 2
        // statement 3
    }
}

/**
 * loops & functions
 * consider the nested loops with function calls:
 *  if all three functions are constant O(1), runtime = O(n^3)
 *  if fn1 and fn2 are constant but fn3 = O(n^2), runtime = O(n^5)
 *  t(n) = n( t(fn1) + n( t(fn2) + n( t(fn3) ) ) )
 */
for (let i = 0; i < n; i++) {
    fn1();

    for (let j = 0; j < n; j++) {
        fn2();

        for (let k = 0; k < n; k++) {
            fn3();
        }
    }
}

/**
 * recursion
 * consider the following recursive function:
 *  if n=2, the function is invoked 3 times; if n=3, the function is invoked 5 times, etc
 *  this recursive function returns a binary tree (see book), so n++ doubles function invocations
 *  the number of calls in a binary tree is 2^n - 1
 *  runtime = O(2^n), which is exponential
 */
function fn(n) {
    if (n < 0) return 0;
    if (n < 2) return n;

    return fn(n - 1) + fn(n - 2);
}
