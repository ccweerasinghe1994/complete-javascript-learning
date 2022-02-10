'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (side, main) {
    return [this.starterMenu[side], this.mainMenu[main]];
  },
  orderDelivery: function ({ time = '121', side, main }) {
    return `${
      this.name
    } will deliver your order in ${time} minutes. Your order is: ${this.order(
      side,
      main
    ).join(', ')}`; // abc will deliver your order in x minutes. Your order is: x, y
  },
};

const values = restaurant.orderDelivery({
  time: '12:00',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  mainIndex: 1,
  starterIndex: 0,
});

console.log(values); // Classico Italiano will deliver your order in 12:00 minutes. Your order is: Caprese Salad, Pizza

// console.log(restaurant.categories);

// let [main, , secondary] = restaurant.categories; // [ "Italian", "Pizzeria", "Vegetarian", "Organic" ]

// console.log(main, secondary); //Italian Vegetarian

// // flip the values

// [main, secondary] = [secondary, main];

// console.log(main, secondary); // Vegetarian Italian

// // returning two values from a function
// const [sideMenu, mainMenu] = restaurant.order(1, 2);
// console.log(sideMenu, mainMenu);

// nested array desc

// const array = [1, 2, 2, [12, 4, 2]];

// const [a, , , [b, c, d]] = array;

// console.log(a, b, c, d);

// // default values

// const [a = 1, b = 2, c = 3] = [5, 7];

// console.log(a, b, c);

// objects --------------------------
// order doesn't matter
const { name, openingHours, categories } = restaurant;
// giving different names to the same values
// this is very helpful when you are using third party apis
const {
  name: restaurantName,
  openingHours: restaurantHours,
  categories: restaurantCategories,
} = restaurant;
// console.log(restaurantName, restaurantHours, restaurantCategories);

// // setting a default value

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters); // Array [] Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// // mutating variables

// let a = 1;
// let b = 2;
// let c = 3;

// const obj = {
//   a: 23,
//   b: 34,
//   c: 45,
// };

// console.log(a,b); // 1 2

// // {} = obj; // this is not allowed because {} represent a code block

// ({ a, b } ) = obj;

// console.log(a,b); // 23 34

// // nested objects destructuring

// const {openingHours:{fri,sat,thu}} = restaurant;
// console.log(fri,sat,thu); // { open: 11, close: 23 } { open: 0, close: 24 } { open: 12, close: 22 }
