// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// function cleanUpArray(array = []) {
//   const filteredArray = array.filter(element => typeof element === 'number');
//   return filteredArray;
// }

// const mergeTwoArrays = (array_1 = [], array_2 = []) => array_1.concat(array_2);

// // what is temperature amplitude?
// const temperatureAmplitude = (array_1 = [], array_2 = []) => {
//   const temperature = mergeTwoArrays(array_1, array_2);
//   const cleanedArray = cleanUpArray(temperature);
//   const max = Math.max(...cleanedArray);
//   const min = Math.min(...cleanedArray);
//   return max - min;
// };

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // fix
//     // value: Number(prompt('Degrees celsius')),
//     value: 12,
//   };
//   // console.log(measurement['value']);
//   // find
//   console.table(measurement);
//   debugger;
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// // identify the bug;

// TODO:
// cording challenge

const printForecast = (array = []) => {
  let message = '';
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    message += `...${element}C in ${index + 1} days  `;
  }

  return message;
};

console.log(printForecast([12, 13, 56, 74]));
