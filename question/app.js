//Q1
let nickname = '中川紗有美';
let age = 26;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。');

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。');

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

const game = playerList[1].favorites[1];
console.log(game);

//Q5
const age1 = playerList[0].age;
const age2 = playerList[1].age;
const age3 = playerList[2].age;
const ave = (age1 + age2 + age3)
console.log(ave/3);

//Q6-1
function sayHello() {
  let word = 'Hello';
  console.log(word);
}
sayHello();

//Q6-2
let sayWorld = function(){
  console.log('sayWorld');
}

sayWorld();

//Q7-1
user.birthday = '2000-09-27';

//Q7-2
user.sayHello = function sayHello(){
  console.log('Hello!');
}

user.sayHello();

//Q8-和
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(3, 4);

//Q8-差
calc.subtract = function(x, y) {
  console.log(x - y);
}
calc.subtract(20, 10);

//Q8-積
calc.multiply = function(x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);

//Q8-商
calc.divide = function(x, y) {
  console.log(x / y);
}
calc.divide(35, 7);

//Q9
function remainder(x, y) {
  return x % y;
}
const amari = remainder(5, 3);
console.log('5を3で割った余りは' + amari + 'です。');

//Q10
//関数の中で定義した変数はその関数の中からしか参照できないという決まりがあり、変数の有効範囲のことをスコープという。
//今回xという変数は関数fooの中で定義されており関数の外参照しようとしたのでエラーが起こっている。



//応用編問題

//Q1
const number = Math.floor(Math.random() * 9) + 1;
console.log(number);

///Q2
setTimeout(() => {
  console.log("Hello World!");
}, 3000);

//Q3
let num = 7;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num = 0) {
  console.log('num is 0');
}

//Q4
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] !== 'number' ){
    console.log('not number');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  } else if (mixed[i] % 2 === 1){
    console.log('odd');
  }
}