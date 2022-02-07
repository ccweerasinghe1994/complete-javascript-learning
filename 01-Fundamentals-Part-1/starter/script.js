const age = 23;

// if else in one line
// this is also called ternary operator because of three part condition -> true expression -> false expression
const drink =
  age >= 18
    ? console.log("i like to drink wine")
    : console.log("i like to drink water");

// operator is always return a va lue => expression

// using if

let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

// we can use it inside the template literal

console.log(
  `${
    age >= 18
      ?"i like to drink wine"
      : "i like to drink water"
  }`
);
