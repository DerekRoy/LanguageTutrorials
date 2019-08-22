// Single line Comment for a quick note

/*
Multi line comment:
Good for explaining something complex in code.
*/

// Booleans: Anything True/False, 1/0, Yes/No Variable
true
false

// Numbers: JavaScript (Js) only has one number type
-123
1.141

//Strings: Any text, there is no type for characters
'abc'
"123"

/* assert:
  describes what the result is expected to look like, and throws an exemption if the result doesn't match.

  .equal():
  a method call for assert that takes 2 arguements the actual result and the expected result.
  Part of the Node.js assertion API.
*/
assert.equal(7+1,8);

// Printing message to console
console.log('Hello friendly friend.');

// Printing error to the console
console.error('Oh no, something happened. It was bad.');


/*
  JavaScript Operators
*/

//Booleans
// Logical and. We are asserting if trua&&false (=false) is equal to false, which is correct
assert.equal(true && false, false);
// Logical and. We are asserting if trua||false (=true) is equal to true, which is correct
assert.equal(true || false, true);

//Numbers
assert.equal(3 + 4, 7);
assert.equal(5 - 3, 2);
assert.equal(3 * 3, 9);
assert.equal(6 / 2, 3);

// Strings
assert.equal('a' + 'b', 'ab');
assert.equal('I see ' + 5 + ' pandas', 'I see 5 pandas');

// Comparisons
assert.equal(3 < 4, true);
assert.equal(3 <= 4, true);
assert.equal('abc' === 'abc', true);
assert.equal('abc' !== 'def', true);


/*
  Variables
*/
let x; // Declaring x (mutable)
x = 3 * 5; // Assign the result of 3 * 5 to x
let y = 3 * 5; // Declare y and assign reult of 3 * 5 to y immediately.
const z = 3 * 5 // Declaring z (immutable)


/*
  Control Flow Statements
*/
// if x is less than 0
if (x < 0){
  // negative x (i.e. x < 0) now positive x
  x = -x;
}


/*
  Function Declaration
*/
// function name(arguemewnts)
function add1(a,b){
  return a + b;
}
//Calling Function
assert.equal(add1(5,2),7)

//Arrow function call 1: body is a code block
const add2 = (a,b) => {return a + b};
//Calling function add2
assert.equal(add2(5,2), 7)

//Arrow function call 2: body is an expression
const add3 = (a,b) => a + b;
//Calling function add3
assert.equal(add3(5,2), 7);


/*
  Objects
*/
// Create an Object
const obj = {
  first: 'Jane', // property
  last: 'Doe', // property
  // property (method)
  getFullName(){
    return this.first + ' ' + this.last;
  },
};
//Getting object property values
assert.equal(obj.first, 'Jane');
//Setting object property value
obj.first = 'Janey';
// Calling object method
assert.equal(obj.getFullName(),'Janey Doe');

//arrays: in JS considered another type of object
const arr = ['a','b','c'];
//Gettimg an array element
assert.equal(arr[1], 'b')
//Setting an array element
arr[1] = 'β';


/*
  Modules:
  is a file in java script that can be called and used in another file
*/
//To export a function to be used in other JS files. The export keyword makes obj,functions, and variables
//seen from the module so they can be imported.
export function isTextFilePath(filePath) {
  return filePath.endsWith('.txt');
}
// To import the a whole module from path
import * as path from 'path'
// To import a specific Function i.e. import function from ./file
import {isTextFilePath} from './file-tools.mjs';


/*
  Legal Variable and property names
*/
// Identifier: variable names and property names that are grammatically correct in JS syntax
let identifiers = 'Unicode characters A-Za-z, $ and _, and digits 0-9. Names can not start with digits';
//Reserved words: words with special meaning in JS.
 const if = 123; //Will return error because if is not recognized as a variable name
 const obj = {if: 123} //Reserved words can be used as property names


 /*
  Casing styles:
  camelCase: ie no spaces or symbols, first word of every word capitalized
  snake_case(underscore case): seperate each word with under score
  kebab-case(dash case): sperate each word with hyphen
 */
// JS uses camelCase except for constants where they use snake_case


/*
  Naming Conventions:
  _variable = variable is unused
  _property = property is private
*/


/*
  Semicolons are used after every statement unless followed by a curly brace or in an object
*/
