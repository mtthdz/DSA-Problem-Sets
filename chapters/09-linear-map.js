/**
 * Introduction
 * ----
 * A map is a data structure that consists of a key value pair
 * where arrays' key/index is always a number, a map key can be of any value,
 * including arrays and objects
 * both maps and arrays have a lookup time of o(1)
 *
 *
 * Maps vs Objects
 * ----
 * within JavaScript, there are two ways to create a map:
 *  1. objects{}
 *  2. built-in map .Map()
 * Maps were introduced to JavaScript to fill the shortcomings of using Object as a Hashmap
 * 
 * notable differences between objects and maps are as follows:
 *  - maps can have any type as a key, whereas objects arrays and maps cannot be keys in objects
 *  - objects are not guaranteed in insertion order (typically alphabetical), while maps are
 *  - objects may be poluted from prototype chain keys; maps do not have this issue
 *  - maps are optimized for frequent additions/removals
 *  - maps do not support JSON
 * 
 * 
 * Key by Reference vs by Value
 * ----
 * when using objects/arrays/classes as keys on a Map, JavaScript will match the key ONLY IF it
 * has the same reference in memory. Consider the below example:
 */

// incorrect
const map = new Map();

map.set(arr, 'value');
console.log(map.get(arr)); // undefined

// correct
const map2 = new Map();
const arr = [1, 2, 3];

map.set(arr, 'value');
console.log(map2.get(arr)); // 'value


/**
 * Map Inner Workings
 * ----
 * two popular implementations of Maps:
 * Array + Hash Function       => Hash Map
 * Balanced Binary Search Tree => Tree Map
 * 
 * a map uses an array to store values and a hash function that translates the key into an array index
 * one common hash function is using modulo division
 * because no hash function is perfect, sometimes it will map two different keys to the same value, called collision
 * to prevent collisions, it rehashes; maps double the size of its internal array when it reaches a threshold
 * collisions and rehashes are handled automatically
 */



/**
 * Problem Sets
 * 
 * 1. Trading Speed for Space
 * Given a text, return the most common words in descending order. Sanitize input by removing punctuation and converting
 * all letters to lowercase. Return the most common words in descending order.
 * time complexity of the 3 steps:
 *  1. lowercase = o(n)
 *  2. clean with regex = o(n)
 *  3. map functionality = o(n log n)
 *
 * @param {string} text - the text to parse
 * @param {number} n - the number of results
 * @return {string[]}
 * 
 * @example
 * ('The map, maps keys to values; keys can be anything.', 1)               -> ['keys]
 * ('Look at it! What is it? It does look like my code from 1 year ago', 2) -> ['it', 'look']
 * ('a; a,b, a\'s c A!; b,B,   c.', 4)                                      -> ['a', 'b', 'c', 's']
 */
export const mostCommonWords = (text, n = 1) => {
  const words = text.toLowerCase().split(/\W+/);
  const map = words.reduce((m, w) => m.set(w, 1 + (m.get(w) || 0)), new Map());

  return Array
    .from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map((w) => w[0]);
}


/**
 * Outside explanations
 * ----
 * When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property
 * which holds a link to another object called its prototype. That prototype object has a prototype of its own, 
 * and so on until an object is reached with null as its prototype. By definition, null has no prototype, and 
 * acts as the final link in this prototype chain.
 * 
 * When trying to access a property of an object, the property will not only be sought on the object but on the 
 * prototype of the object, the prototype of the prototype, and so on until either a property with a matching name 
 * is found or the end of the prototype chain is reached.
 */