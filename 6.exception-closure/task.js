'use strict'

//Задача 1

const parseCount = (value) => {
    let result = Number.parseInt(value);
    if (isNaN(result)) {
      throw new Error('Невалидное значение');
    } else {
      return result;
    }
  }
  
  const validateCount = (value) => {
    try {
      return parseCount(value);
    } catch(err) {
      console.error(err);
      return err;
    }
  }
  
  //Задача 2
  
  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if(this.a + this.b < this.c
        || this.b + this.c < this.a
        || this.c + this.a < this.b) {
        throw new Error('Треугольник с такими сторонами не существует')
      }
    }
  
    getPerimeter() {
      let perimeter = this.a + this.b + this.c;
      return perimeter;
    }
  
    getArea() {
      let p = (this.a + this.b + this.c) / 2;
      let s =  +(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3));
      return s;
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      let triangle = new Triangle(a, b, c);
      return triangle;
    } catch(err) {
      let triangle = {};
      triangle.getPerimeter = function() {
        return 'Ошибка! Треугольник не существует';
      }
      triangle.getArea = function() {
        return 'Ошибка! Треугольник не существует';
      }
  
      return triangle;
    }
  }