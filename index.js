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

