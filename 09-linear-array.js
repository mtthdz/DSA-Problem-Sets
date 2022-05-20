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

/**
 * Problem sets
 * 
 * 1. Two Pointers Pattern
 * Find two numbers that add up to target.
 * runtime: o(n)
 * @param arr - the array of integers
 * @param target - the target value
 * @returns {number[]} - array with the values that add up to target
 * 
 * @example
 * ([-5,-3,1,10], 7)        -> [-3, 10]
 * ([-5,-3,-1,1,2], 30)     -> []
 * ([-3,-2,-1,1,1,3,4], -4) -> [-3, -1]
 */
const twoSum = (arr, target) => {
	/**
	 * bc the array is sorted, we can set two pointers; one left and one right
	 * if sum is bigger we move right; if smaller, we move left
	 */
	let left = 0;
	let right = arr.length -1;

	while(left < right) {
		const sum = left + right;

		if(sum === target) {
			return [arr[left], arr[right]];
		} else if(sum > target) {
			right - 1;
		} else {
			left + 1;
		}
	}
}