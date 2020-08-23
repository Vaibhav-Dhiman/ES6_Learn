const companies = [
{name: "one" , category:"Auto", start: 1974, end: 2005},
{name: "two" , category:"Finance", start: 1972, end: 2001},
{name: "three" , category:"Medical", start: 1979, end: 2000},
{name: "four" , category:"Technology", start: 1970, end: 2009},
{name: "five" , category:"Retail", start: 1945, end: 1998},
{name: "six" , category:"Auto", start: 1932, end: 20012},
{name: "seven" , category:"Auto", start: 1989, end: 20021},
{name: "eight" , category:"Retail", start: 1944, end: 2011},
{name: "nine" , category:"Finance", start: 1960, end: 2004},
{name: "ten" , category:"Medical", start: 1911, end: 2005},
{name: "eleven" , category:"Retail", start: 1876, end: 2006},
]

const ages = [32,45,56,7,34,34,5,6,77,8,7]


// filter
//let canDrink = [];

//using for
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >=21) {
//       canDrink.push(ages[i]);
//     }
// }

// using filter
const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);

const retailsCompanies = companies.filter(cmp=> cmp.category == 'Retail');
//console.log(retailsCompanies);

// map create new array from occure array 
const cmpNames = companies.map(cmp=> cmp.name);
//console.log(cmpNames);

// sort

const sortedCmp = companies.sort((a,b) => (a.start> b.start ? 1: -1));
//console.log(sortedCmp);

const sortAges = ages.sort((a,b) => b-a);
// console.log(sortAges);

// reduce

let ageSum = ages.reduce((total ,age) => total+age, 0)

console.log(ageSum);



// for each
// companies.forEach(function(cmp) {
//     console.log(cmp.name,cmp.category);
// });


// for loop
// for(let i=0;i<companies.length;i++) {
//      console.log(companies[i]);
// }