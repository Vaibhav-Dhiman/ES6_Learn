// cost
// a const must be assign at the time of declare
//const x = 5;

// but array and object can be chnahe
//const y = {};
//y['a'] = 3
//y;  


// try to use const as much as you can if its not going to change
// const codes = [1,2,3,4];

// function appendCodes (users) {
//         users.forEach(function (user) {
//         return codes.push(user.code);
//     });
// }

// appendCodes([
//     {
//         code: 10
//     }
// ]);

// codes;


//Let use to replace the var
// let cannot be declare more then one time as var
// error let x =1 ; let x =3;
// no error var t=1; var t=4;

// let can be declare and define later; let x; x =5 /// its good here

// const numbers = [1,5,9,3];

// function getMax(arr) {
//     let max = -Infinity;
//     arr.forEach(function (number){
//         max = Math.max(max,number);
//     });
//     return max;
// }

// const max = getMax(numbers);
// max;

// ----------------- arrow functions -----------------------/////


// simple function

//const arr = [1,2,3,4]

// const byTwo = arr.map(function (number) {
//     return number*2
// })

// byTwo;

// coverting above function to arrow function as below

// const byTwo = arr.map(number => 
//      number*2
// )

 // or const byTwo = arr.map(number =>return number*2)

//byTwo;
// this can be easily bind using arrow functions

// var obj = {
//     value: 0,
//     increment: function() {
//         setTimeout(() =>{
//             this.value++;
//             console.log(this.value);
//         }, 1000);
//     }
// }

// obj.increment();

// --------- default parameters -----------

// pass amount as default params here ..
// if amount not pass it will take amount as 3
// function buy(item, amount =3) {
//     amount;
//     item
// }
// buy('eggs')


// ------------ rest operator ------------ //
// cannot defined a param after rest
// get all the params which  is passed to the function
// cannot set more then one rest

// function print(age,page, ...arr) {
//     age
//     page
//     arr
// }

// print(2,4,5,'hello','world')


// ------ spread ------------
// works for both array and iterable objects like strings
// const message = "hello world";
// const chars = ['!', ...message]
// chars

// string template literals
// use back ticks here as below

// var age = 34; var name = 'tomy'
// var msg = `My name is ${name}. My age is ${age}`
// console.log(msg)



// property shortname

// var fname = 'vaibhav';
// var lname = 'dhiman';
// var age = 34;

// var person = {
//     fname,
//     lname,
//     age
// }

// person;


// computed property string

// var key = 'lastname';

// function getKey() {
//     return 'hello';
// }

// var person = {
//     firstname: 'bob',
//     [key]: 'harvey',
//     [getKey()]: 'test'
// };

// person


//method property 

// var person = {
//     firstname: 'bob',
//     age: 23,
//     birthday() {
//         this.age++;
//     }
// }


// person.birthday();
// person;

// classes used to create new objects in js

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     jump() {
//         console.log('jump')
//     }
// }

// class Employee extends Person {
//     constructor(name,age,years) {
//         super(name,age);
//         this.years = years;
//     }
// }

// const emp = new Employee('bob',23,23)
// emp

// const person = new Person('vaibhav', 34);
// person;
// person.jump();


//super keyword is used to call parent class method in chils class 
// when both methods have the same name


// start with section 10
// array matching

// matching and declare variables 

// function getConfig() {
//     return {
//         isOn: true,
//         amount: 10,
//         servers: {
//             a: true,
//             b: false
//         }
//     }
// }


// var {isOn: myBool, amount: reTime} = getConfig();

// myBool;


// promises
// to replace callbacks
// reduces callbacks hell

// function getName() {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('bob');
//     }, 1000);
//  });
// }

// function getAge(cb) {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10);
//         }, 4000);
//      });
// }



//promise chaining below example
// passing value from one promise to another

// getName()
// .then(name => {
//     console.log(name);
//     return 'lol';
// })
// .then(age => {
//     console.log(age);
// })

// promise.all can take array of multiple promises and resolves them together on by one.

// Promise.all([
//     getName(),
//     getAge()
// ])

// // when all resolved below will run
// .then(([name,age]) => {
//     console.log(name);
//     console.log(age);
// })


// below race function will return the result of the promise which executes first  
// Promise.race([
//     getName(),
//     getAge()
// ])

// // when all resolved below will run
// .then(([name,age]) => {
//     console.log(name);
//     console.log(age);
// })

// promise catch

// Promise.all([
//     getName(),
//     getAge()
// ])

// // when all resolved below will run
// .then(([name,age]) => {
//     console.log(name);
//     console.log(age);
// })
// // below catch will invoke when reject gets called from an above defined functions
// .catch(err => {
//     console.log(err);
// });

// if a promise return an Error or Excception that will be catch by the catch as well
// in case of error and exception it will return it.. reject can keep more info then error or exception in promise methods


//--- alternative to promise is aync and awaits
// we can do try catch


// object assign will copies keys from one objjects to others
// multiple objects can be useds
// var obj1 = {};
// var obj2 = {
//     name: 'vaibhav'
// };

// Object.assign(obj1,obj2);
// obj1;



// string repeat
// const string = '$'.repeat(13);
// string;



// includes
// const index = 'hi there world'.includes('world');
// index;

// ends with 

// const index = 'hi there world'.endsWith('world');
// index;



