const dolphins = [103, 103, 103];
const koalas = [100, 100, 100];

const calculateAverage = array => {
  const total = array.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);

  const average = total / array.length;

  return average.toFixed(2);
};
const test = () => 2 * 2;
function checkForHundred(array = []) {
  const hundredCheck = array.filter(value => value >= 100);
  return hundredCheck.length ? true : false;
}

function whoIsTheWinner(array_1, array_2) {
  const dolphins = calculateAverage(array_1);
  const koalas = calculateAverage(array_2);

  if (checkForHundred(array_1) && checkForHundred(array_2)) {
    if (dolphins === koalas) {
      return `there is no winner it is a draw`;
    }
    if (dolphins > koalas) {
      return `dolphins win`;
    } else {
      return `koalas win`;
    }
  } else if (checkForHundred(array_1) && !checkForHundred(array_2)) {
    return `dolphins win`;
  } else if (checkForHundred(array_2) && !checkForHundred(array_1)) {
    return `koalas win`;
  } else {
    return `no one has hundred score`;
  }
}

console.log(whoIsTheWinner(dolphins, koalas));


