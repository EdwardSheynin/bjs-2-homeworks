'use strict';

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь

  let d = b ** 2 - 4 * a * c;
  let rootOne;
  let rootTwo;
  if (d > 0) {
    rootOne = (-b + Math.sqrt(d)) / (2 * a);
    rootTwo = (-b - Math.sqrt(d)) / (2 * a);
    arr  [rootOne, rootTwo];
  } else if (d === 0) {
    rootOne = -b / (2 * a);
    arr = [rootOne];
  } else if (d < 0) {
    arr = [];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
