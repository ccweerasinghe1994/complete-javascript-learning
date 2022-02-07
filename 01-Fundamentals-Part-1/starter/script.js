// let

// if u want to mutate use let
let age = 23;
// reassigning the value.

age = 34;

// const

const birthYear = 1994;
// can't be mutated
// can't do that
// Uncaught TypeError: invalid assignment to const 'birthYear'
// birthYear = 1222;

// can't do that
// Uncaught SyntaxError: missing = in const declaration
// const test;

// use const generally lead to less bugs.

// var

// prior to ES6 way

var job = "programer";
// can be mutated
job = "teacher";
// never use var

// another terrible way to create variables are
// this will create a variable in global object
terribleVariable = "test";
