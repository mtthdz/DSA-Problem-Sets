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
 */


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