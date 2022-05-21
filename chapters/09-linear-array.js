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
export const twoSum = (arr, target) => {
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


/**
 * 2. Sliding Window Pattern
 * Find the max sum of an array of integers,
 * only taking 'k' items from the right and left side sequentially
 * 
 * @param {number[]} arr - The array of integers
 * @param {number} k - the number of elements to sum up
 * @returns {number}
 * 
 * @example
 * ([1,2,3], 3)               -> (1 + 2 + 3) = 6
 * ([1,1,1,1,200,1], 3)       -> (1 + 200 + 1) = 202
 * ([3,10,12,4,7,2,100,1], 3) -> (3 + 1 + 100) = 104
 */
export const maxSum = (arr, k) => {
	/**
	 * we start left at arr[k - 1] because sliding window
	 * bc we start full left and go full right
	 */
	let left = k - 1;
	let right = arr.length - 1;
	let sum = 0;
	let max = 0;

	/**
	 * this loop will add index values 0 -> k
	 * q: runtime is o(1) bc regardless of n inputs,
	 * it will compute the same operation?
	 */
	for (let i = 0; i < k; i++) {
		sum += arr[i];
	}

	for (let i = 0; i < k; i++) {
		sum += arr[right--] - arr[left--];
		max = Math.max(max, sum);
	}

	console.log(max);
	return max;
}


/**
 * 3. Max Subarray
 * Find the maximmum sum of contiguous elements in an array.
 * @param {number[]} a - Array
 * @returns {number} - max sum
 * 
 * @example
 * ([1,-3,10,-5])       -> 10
 * ([-3,4,-1,2,1,-5])   -> sum[4,-1,2,1] = 6
 * ([-2,1,-3,4,-1,3,1]) -> sum[4,-1,3,1] = 7
 */
export const maxSubArray = (a) => {
	console.log(a);
}

/**
 * 4. Buying & Selling stocks
 * Find the max daily profit from buying and selling a stock
 * given daily prices.
 * @param {number[]} prices - Array with daily stock prices
 * @returns {number} - Max profit
 * 
 * @example
 * ([1,2,3])     -> buy 1, sell 3 = 2
 * ([3,2,1])     -> no buys
 * ([5,10,5,10]) -> buy 5, sell 10 = 5
 */
export const maxProfit = (prices) => {
	console.log(prices);
}