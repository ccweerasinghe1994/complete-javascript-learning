// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function cleanUpArray(array = []) {
  const filteredArray = array.filter(element => typeof element === 'number');
  return filteredArray;
}

console.log(cleanUpArray(temperature));

const mergeTwoArrays = (array_1 = [], array_2 = []) => array_1.concat(array_2);

// what is temperature amplitude?
const temperatureAmplitude = (array_1 = [], array_2 = []) => {
  const temperature = mergeTwoArrays(array_1, array_2);
  const cleanedArray = cleanUpArray(temperature);
  const max = Math.max(...cleanedArray);
  const min = Math.min(...cleanedArray);
  return max - min;
};

console.log(temperatureAmplitude(temperature, temperature));
