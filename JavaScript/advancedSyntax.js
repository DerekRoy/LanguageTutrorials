//Valid Identifiers: any unicode and can start with accented characters. Legal Examples:
const ε = .0001;
const строка = '';
const _tmp = 0;
const $foo2 = true;

/*
  Reserved Keywords
*/
//Keywords: await break case catch class const continue debugger default delete
//do else export extends finally for function if import in instanceof let new
//return static super switch this throw try typeof var void while with yield

//Tokens: enum implements package protected interface private public

// Literals: true false null

// Avoid using: Infinity NaN undefined async

// Avoid using global variables as variable names like Math, String, etc.


/*
  Statement V Expressions
*/
//Statement: a piece of code that can be executed to perform some kind of action.
let myStr;
if (myBool){
  myStr = 'Yes';
} else {
  myStr = 'No';
}
// Example 2
function twice(x){
  return x + x;
}

//Expression: a piece of code that can be evaluated to produce a value.
let myStr = (myBool ? 'Yes' : 'No'); // ? is a ternary operator. It is the expression version of the if Statement
'ab' + 'cd' // = 'abcd'
Number('123') // 123
true || false // true


//The body of a function call must be a sequence of statements

//The arguements of a function or method call must be expressions

//Expressions can be used as statements called expression statements
function f(){
  console.log(bar()); // expression
  bar(); // (expression) statement
}


/*
  Ambiguous Syntax
*/
//Function declaration statement
function id(x){
  return x;
}
//Function expression
const id = function me(x){
  return x;
};

//Object literal
const obj = {};

//Statement: empty code block
{
}

//Statements starting with function or { are never interpretted as expressions to make an expression statement for a functiopn do this:
(function (x) { console.log(x) })('abc') //Output: abc
//Interpretted as an expression because we wrapped it in paranthesis


/*
  Semicolons
*/
//As mentioned before, but watch out for => statements, they need a semicolon even if followed by {}

//ASI (Automatic Semicolon Insertion) is present in JS, but may cause issues.
  //return statements can not be followed by a new line
// ASI can be triggered randomnly when followed by (), /, or []

//Always write semicolons


/*
  Strict V Sloppy Mode
*/
//Strict mode is the default in modules and classes and Sloppy mode is the default in scripts

//Switch on strict mode by typing:
'use strict';

//Strict mode prevents reference errors, variables are scope specific to blocks, and lets you know when you are trying to change an immutable variable


//When printing you can use %s for strings, %o to stringify objects, or %j to print full json strings

// JSON stringify can also be used to print out JSON objects
