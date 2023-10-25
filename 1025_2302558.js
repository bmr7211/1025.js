
'use strict';

//1
const arr1 = new Array();
const arr2 = [1, 2];

//2
const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

//3
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit)) ;

//4
fruits.push('😊', '😒');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

fruits.unshift('🍎', '🍌');
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits);

fruits.push('🍉', '🍋', '🍒');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '❤️', '🍒');
console.log(fruits);

const fruits2 = ['😎', '🤩'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍌'));
console.log(fruits.indexOf('🍌'));

fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

console.clear();
//Chapter 9
//1
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', and ');
    console.log(result);
}
  
//2
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

//3 
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

//4
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//5
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}