const searchTarget = (arrayNumber, target) => {
  if (arrayNumber.length === 0) return "Empty array";

  const sortArray = arrayNumber.sort((a, b) => a - b);
  let firstNumber = 0;
  let lastNumber = sortArray.length - 1;

  while (firstNumber <= lastNumber) {
    let mid = Math.floor((firstNumber + lastNumber) / 2);
    if (sortArray[mid] === target) {
      return mid;
    } else if (sortArray[mid] < target) {
      firstNumber = mid + 1;
    } else {
      lastNumber = mid - 1;
    }
  }

  return firstNumber;
};

const arrayNumber = [1, 3, 5, 6];

const targetNumber = 5;
console.log({
  targetNumber,
  indexInArray: searchTarget(arrayNumber, targetNumber),
});

const targetNumber2 = 2;
console.log({
  targetNumber2,
  indexInArray: searchTarget(arrayNumber, targetNumber2),
});

const targetNumber3 = 7;
console.log({
  targetNumber3,
  indexInArray: searchTarget(arrayNumber, targetNumber3),
});
