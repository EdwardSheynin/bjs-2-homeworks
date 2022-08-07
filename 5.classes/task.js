'use strict';

//Задача 1

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

    set state(number) {
        this._state = number;
        if (this.state < 0) {
            this._state = 0;
        } else if (this.state > 100) {
            this._state = 100;
        } else {
            this._state = this.state;
        }
    }

    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem('Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе', 2019, 1008);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}
    
const picknick = new FantasticBook('Аркадий и Борис Стругацкие', 'Пикник на обочине', 1972, 168);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

//Задача 2

class Library extends PrintEditionItem { 
    constructor (name, releaseDate, pagesCount) {
        super(releaseDate, pagesCount);
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value) {
                return this.books[i];
            } 
        }
        return null;
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                 return  this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

//Задача 3

class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.gradeBook = {};
    }
  
    addMark(mark, subject) {
      if (mark < 1 || mark > 5) {
        console.log ('Ошибка, оценка должна быть числом от 1 до 5');
      } else if (Object.keys(this.gradeBook).includes(subject)) {
        this.gradeBook[subject].push(mark);
      } else {
        this.gradeBook[subject] = [mark];
      }
    }
  
    getAverageBySubject(subject) {
      let marksSum, marksCount, averageBySubject;
      if (Object.keys(this.gradeBook).includes(subject)) { 
        marksSum = Object.values(this.gradeBook[subject]).reduce(((sum, mark) => sum + mark),0);
        marksCount = this.gradeBook[subject].length;
        averageBySubject = marksSum / marksCount;
        return averageBySubject;
      } else {
        console.log('Несуществующий предмет');
      }
    }
  
    getAverage() {
      let marksSum = 0;
      let marksCount = 0;
      for (let key in this.gradeBook) {
        marksSum += Object.values(this.gradeBook[key]).reduce(((sum, mark) => sum + mark),0);
        marksCount += this.gradeBook[key].length;
      }
      return (marksSum / marksCount);
    }
  
      exclude(reason) {
      delete this.gradeBook;
      this.excluded = reason;
    }
  }
