"use strict";

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) return `${firstName} retires in ${retirement} years`;

//   return `${firstName} is already retired`;
//   // return retirement;
// }

// console.log(yearsUntilRetirement(1934, "chamara"));

/ /; ////////////////////// ARRAYS //////////////////

// const friend1 = "bob";
// const friend2 = "andrew";
// const friend3 = "rock";

// const friends = ["bob", "andrew", "rock"];

// console.log(friends);

// const friends_with_Array = new Array("bob", "andrew", "rock");
// console.log(friends_with_Array);

// // accessing data
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// // lenth of an array

// console.log(friends.length);

// // getting the last element

// console.log(friends[friends.length - 1]);

// // different type of arrays
// const me = ["rock", 2022 - 1982, "actor"];
// console.log(me);

// const calcAge = function (birthAge) {
//   return 2022 - birthAge;
// };

// const years = [1994, 1995, 1996, 2000];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// console.log(age1);
// console.log(age2);
// console.log(age3);

// // [] we can you expression
// const newArray = [years[years.length - 1], calcAge(years[0])];
// console.log(newArray);

// ///////////////////  ARRAYS //////////////////////////////

// const friends = ["bob", "andrew", "rock"];

// console.log(`start ---------------------- ARRAY-----------------`);
// console.log(friends);
// // adding
// console.log(`start ---------------------- adding-----------------`);
// // end
// const push = friends.push("andrew");
// console.log("push", push);
// console.log(friends);
// // begin
// const unshift = friends.unshift("json");
// console.log("unshift", unshift);
// console.log(friends);
// console.log(`end ---------------------- adding-----------------`);
// console.log(`start ---------------------- removing-----------------`);
// // removing
// console.log(friends);
// const pop = friends.pop();
// console.log("pop", pop);
// console.log(friends);
// const shift = friends.shift();
// console.log("shift", shift);
// console.log(friends);

// console.log(`end ---------------------- removing-----------------`);
// // search
// const index = friends.indexOf("bob");
// const index_2 = friends.indexOf("b");
// console.log(index);
// console.log(index_2);
// // strict matching
// const includes = friends.includes("bob");
// console.log(includes);
// console.log(`end ---------------------- ARRAY-----------------`);

// ////////////////////////  OBJECTS ////////////////////////////////

// const me = ["rock", 2022 - 1982, "actor", ["gagni", "shan", "gayan"]];

// order doesn't matter
// const meObj = {
//   first_name: "chamara",
//   last_name: "weerasinghe",
//   birthYear: 2022 - 1982,
//   job: "full stack developer",
//   friends: ["gagni", "shan", "gayan"],
// };

// console.log(meObj);
// // .dot notation -> strict value
// console.log(meObj.last_name);
// // [] notation -> expression
// console.log(meObj["last_name"]);

// const nameKey = "_name";

// console.log(meObj["first" + nameKey]);
// console.log(meObj["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about chamara ? first_name,last_name,birthYear,job,friends"
// );
// console.log(interestedIn);
// console.log(meObj[interestedIn]);

// const friendFunction = (interestedIn) => {
//   console.log("i am running");
//   if (interestedIn === "friends") {
//     return `${meObj.first_name} has ${meObj.friends.length} friends and his best friend is ${meObj.friends[0]}`;
//   }
// };

// if (meObj[interestedIn]) {
//   console.log(meObj[interestedIn]);
//   console.log(friendFunction(interestedIn));
// } else {
//   console.log(
//     `wrong request!! request something first_name,last_name,birthYear,job,friends`
//   );
// }

// // adding more properties

// meObj.location = "sti lanka";
// meObj["twitter"] = "@ccweerasinghe1994";

// OBJECT METHODS /////////////////////////////////////////////////

// const me = {
//   first_name: "chamara",
//   last_name: "weerasinghe",
//   birthYear: 1982,
//   job: "full stack developer",
//   friends: ["gagni", "shan", "gayan"],
//   hasDriversLicense: true,

//   //   //   this is  confusing
//   //   calcAge: function (birthYear) {
//   //     return 2037 - birthYear;
//   //   },

//   //   // this has to be a expression
//   //   // if you run this 100 times
//   //   // it will execute 100 times
//   //   // this is not efficient

//   //   calcAge: function () {
//   //     return 2037 - this.birthYear;
//   //   },
//   // now at the first run it will add the age property to the this.object
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummery: function () {
//     return `${
//       this.first_name
//     } is a ${this.calcAge()} years old teacher and he ${
//       this.hasDriversLicense ? "has" : "does't have"
//     } a driver's license`;
//   },
// };
// console.log(me);

// console.log(me.getSummery());

// LOOPS ////////////////////////////////////////////////////

// console.log(`lifting weights rep 1`);
// console.log(`lifting weights rep 2`);
// console.log(`lifting weights rep 3`);
// console.log(`lifting weights rep 4`);
// console.log(`lifting weights rep 5`);
// console.log(`lifting weights rep 6`);
// console.log(`lifting weights rep 7`);
// console.log(`lifting weights rep 8`);
// console.log(`lifting weights rep 9`);
// console.log(`lifting weights rep 10`);

// for (let index = 1; index <= 10; index++) {
//   console.log(`lifting weights rep ${index}`);
// }

// const types = [];
// const me = [
//   "chamara",
//   "weerasinghe",
//   2022 - 1982,
//   "actor",
//   ["gagni", "shan", "gayan"],
// ];

// for (let i = 0; i < me.length; i++) {
//   console.log(me[i], typeof me[i]);

//   types.push(typeof me[i]);
// }
// console.log(types);

// const years = [1994, 1995, 1996, 1997];
// const ages = [];

// for (let index = 0; index < years.length; index++) {
//   const element = years[index];
//   ages.push(2022 - element);
// }

// console.log(ages);

// // continue and break

// //  continue
// console.log(`-----------------------------------------------------`);
// for (let i = 0; i < me.length; i++) {
//   if (typeof me[i] !== "string") continue;
//   console.log(me[i], typeof me[i]);
// }
// console.log(`-----------------------------------------------------`);

// // break
// for (let i = 0; i < me.length; i++) {
//   if (typeof me[i] === "number") break;
//   console.log(me[i], typeof me[i]);
// }

// console.log(`-----------------------------------------------------`);

// const me = [
//   "chamara",
//   "weerasinghe",
//   2022 - 1982,
//   "actor",
//   ["gagni", "shan", "gayan"],
// ];

// console.log(me);
// const reverse = [];
// for (let i = 1; i < me.length; i++) {
//   reverse.push(me[me.length - i]);
// }

// console.log(reverse);

// // loop inside a loop

// for (let i = 0; i < me.length; i++) {
//   console.log("outer loop " + i);
//   for (let j = 0; j < 4; j++) {
//     console.log("              inner loop " + j);
//   }
// }

// while loop

// counter
// condition
// increment

let rep = 1;
while (rep <= 10) {
  console.log("running");
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// we don't know how many times we will dice
// there for we don't know the counter
while (dice !== 6) {
  console.log(`your rolled a  ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("loop is about to end");
  }
}
