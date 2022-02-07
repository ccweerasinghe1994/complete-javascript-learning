// type conversion

console.log(
  "``````````````````````Number````````````````````````````````````````````````"
);
// Number

const inputYear = "1994";
console.log(typeof Number(inputYear), Number(inputYear));
console.log(typeof (Number(inputYear) + 12), Number(inputYear) + 12);
// -> 199412
// -> 1994 + 12 = 2006
// not a number -> NaN
console.log(Number("number"));
console.log(typeof NaN);

console.log(
  "``````````````````````Number````````````````````````````````````````````````"
);

console.log(
  "``````````````````````String````````````````````````````````````````````````"
);

// String

console.log(typeof String(23), String(23), "||", typeof 23, 23);

console.log(
  "``````````````````````String````````````````````````````````````````````````"
);

// type coercion
console.log(
  `start ---------------------type coercion------------------------------------`
);

console.log("i am " + 23 + "years old");
console.log(`'12' - '1' -> `, "12" - "1");
console.log(`'12' + '1' -> `, "12" + "1");
console.log(`'12' * '5' -> `, "12" * "5");
console.log(`'12' / '2' -> `, "12" / "2");

// logical operators
console.log(` '12' > '2' ->`, "12" > "2");

let n = "1" + 1;
n = n - 1;
console.log(
  `let n = "1" + 1;
   n = n - 1;
   log(n)
`,
  n
);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" + "5");

console.log(
  `end ---------------------type coercion------------------------------------`
);
