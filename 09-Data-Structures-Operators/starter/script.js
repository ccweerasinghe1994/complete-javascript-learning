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
  orderPasta: function (ing1, ing2, ing3) {
    return `we are making your pasta with ${ing1}, ${ing2}, ${ing3}`;
  },
};


