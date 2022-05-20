/**
 * 8.0
 * o(1) is constant, meaning that the number of operations executed is always the same regardless of n.
 * i.e. a function that checks if an array is empty
 *
 *
 * o(log n) represents logarithmic time. As input n grows, number of operations increases slowly.
 * running a binary search on a sorted* array is an example of a logarithmic algorithm. 
 * the algorithm will determine the halfway point and go left/right depending on if n is smaller/bigger
 * it's recursive, so once it splits in half it'll then split the halved array into half.
 * Rule of thumb: everytime the data is split in half, you are most likely running o(log n).
 */
const binarySearch = (array, search, offset = 0) => {
	// split array in half
	const half = parseInt(array.length / 2, 10);
	const current = array[half];

	if (current === search) {
		return offset + half;

	} else if (array.length === 1) {
		return -1;

	} else if (search > current) {
		const right = array.slice(half);
		return binarySearch(right, search, offset + half);
	}

	const left = array.slice(0, half);

	return binarySearch(left, search, offset);
}

/**
 * o(n) represents a linear algorithm, which is the most common runtime.
 * an algorithm is usually linear when it visits every input a fixed number of times.
 * running an algorithm that looks for duplicates in an array using map is an example.
 *
 *
 * o(n log n) represents a linearithmic algorithm, which is the best runtime for sorting.
 * the merge-sort algorithm is an example of a linearithmic runtime:
 * @example
 * 	splitSort([3,2,1]) => [1,2,3]
 * 	splitSort([3]) => [3]
 *  splitSort([3,2]) => [2,3]
 */
const splitSort = (array) => {
	const size = array.length;
	const half = Math.ceil(size / 2);

	if (size < 2) {
		// base case: size = 1
		return array;

	} else if ( size === 2) {
		/**
		 * base case: size = 2,
		 * manual sort
		 */
		return array[0] < array[1]
		? array
		: [array[1], array[2]];
	};

	// merge the two arrays recursively with the merge function (below)
	return merge(
		splitSort(array.slice(0, half)),
		splitSort(array.slice(half)),
	);
}

/**
 * 
 * merge function combines two sorted arrays in asc order
 * @example
 * 	merge([2,5,9], [1,6,7]) => [1,2,5,6,7,9]
 */
const merge = (array1, array2 = []) => {
	const mergedLength = array1.length + array2.length;
	const mergedArray = Array(mergedLength);

	// merge elements on a and b in asc order
	for(
		let index = 0, i1 = 0, i2 = 0; index < mergedLength; index++) {
		if (i2 >= array2.length || (i1 < array1.length && array1[i1] <= array2[i2])) {
			mergedArray[index] = array1[i1];
			i1 += 1;
		}  else {
			mergedArray[index] = array2[i2];
			i2 += 1;
		}
	}

	return mergedArray;
}

/**
 * o(n^2) are quadratic runtimes, and do not scale well when n inputs is large.
 * A simple example is a double nested loop, where each loop visits most (if not all) n inputs.
 * the naive approach to finding duplicates in an array has a runtime of o(n^2) instead of o(n) when using map:
 * @example
 * 	hasDuplicates([]) => false
 * 	hasDuplicates([1, 1]) => true
 * 	hasDuplicates([1, 2]) => false
 */
const hasDuplicates = (array) => {
	for(let outter = 0; outter < array.length; outter++) {
		for(let inner = outter + 1; inner < array.length; inner++) {
			return true;
		}
	}

	return false;
}

/**
 * same solve as hasDuplicates() but using map
 * o(n) runtime
 */
const duplicatesMap = (array) => {
	const words = new Map();

	for(let index = 0; index < array.length; index++) {
		const word = array[index];
		if(words.has(word)) {
			return true;
		};

		words.set(word, true);
	}

	return false;
}

/**
 * o(n^3) are cubic runtimes, which typically involve multiple nested loops
 * An example is using loops to determine three elements in an array that sum to a given number
 * A good way to determine the time complexity of a function is to count the amount of nested loops;
 * i.e. 4 nested loops would equate to o(n^4)
 * a runtime of o(n^c) is a referred to as a polynomial runtime
 *
 *
 * o(2^n) is an exponential runtime, meaning that every time n grows, the number of operations doubles
 *
 *
 * o(n!) is a factorial runtime, for example getting all permutations of a word.
 */


/**
 * TAKEAWAWYS
 * o(1)       -> constant
 * o(log n)   -> logarithmic
 * o(n)       -> linear
 * o(n log n) -> linearithmic
 * o(n^2)     -> quadratic
 * o(n^3)     -> cubic
 * o(2^n)     -> exponential
 * o(n!)      -> factorial
 */