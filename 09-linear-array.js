/**
 * An array is a linear data structure that is also the most used.
 * accessing any index in an array takes o(1) time
 * while inserting a value at the end of an array (shift) takes o(1) time,
 *  inserting a value at the beginning (unshift) or middle takes o(n) time,
 *  as it affects all of the elements in the array.
 *  inserting a value into the middle of the array involves splicing the array,
 *  which at most takes o(n) as it involves moving half of the array.
 *  note: remember that if the operation involves halving the data, it's probably logarithmic o(n).
 * 
 * searching for index takes o(1), however searching for a value takes o(n) since it involves a loop.
 * deleting a value in an array is the opposite of adding; the beginning and middle involve 
 *  shifting & splicing (respectively) which takes o(n) time, 
 *  while deleting at the end (pop) has an o(1) runtime.
 */
