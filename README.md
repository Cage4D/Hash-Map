# HashMap Implementation in JavaScript

This is a basic implementation of a HashMap (or Hash Table) in JavaScript using an array and linked lists to handle hash collisions. It does not rely on JavaScript's built-in `Map` or `Object` for storing key-value pairs.

The purpose of this project is to understand how hash maps work under the hood, including hashing, collision handling, and dynamic resizing.

## Features

- set(key, value) - Add or update a key-value pair
- get(key) - Retrieve the value associated with a key
- has(key) - Check if a key exists
- remove(key) - Delete a key-value pair
- length() - Get the total number of stored key-value pairs
- clear() - Remove all entries
- keys() - Return an array of all keys
- values() - Return an array of all values
- entries() - Return an array of [key, value] pairs
- Automatically resizes when the number of items exceeds the load factor threshold

## Concepts Covered

- How hashing functions work
- Handling collisions with separate chaining (linked lists)
- Dynamic resizing of the internal array when the load factor is exceeded
- Basic linked list usage in JavaScript
- Core operations in a hash map data structure

## Project Structure
- HashMap class handles the main functionality
- LinkedList class handles storage of multiple entries in a bucket
- Node class is used for individual entries in the linked list

## Notes
- Keys must be strings (this can be extended in the future)
- This project is meant for learning and is not optimized for production use

## Usage Example

```js
const map = new HashMap();

map.set('apple', 'red');
map.set('banana', 'yellow');

console.log(map.get('banana')); // "yellow"
console.log(map.has('apple'));  // true

map.remove('apple');
console.log(map.get('apple'));  // null

console.log(map.length());      // 1
console.log(map.keys());        // ['banana']
console.log(map.values());      // ['yellow']
console.log(map.entries());     // [['banana', 'yellow']]

