'use strict';

function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;
  let rootOne;
  let rootTwo;
  if (d > 0) {
    rootOne = (-b + Math.sqrt(d)) / (2 * a);
    rootTwo = (-b - Math.sqrt(d)) / (2 * a);
    arr = [rootOne, rootTwo];
  } else if (d === 0) {
    rootOne = -b / (2 * a);
    arr = [rootOne];
  } else if (d < 0) {
    arr = [];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNumeric(percent) && percent !== 0) {
    percent = +percent;
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNumeric(contribution)) {
    contribution = +contribution;
  } else {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  
  if (isNumeric(amount)) {
    amount = +amount;
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let totalAmount = countDate * monthPayment;
  let creditBody = amount - contribution;
  let currentDate = new Date();
  let countDate = (date.getMonth() - currentDate.getMonth()) + (12 * (date.getFullYear() - currentDate.getFullYear()));
  let monthPercent = (percent / 100) / 12;
  let monthPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countDate) - 1)));

  return Number(totalAmount.toFixed(2));
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
