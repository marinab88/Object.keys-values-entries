/*******  Objects    *******/
console.log("----- Objects -----");
// ------ Task 1:
console.log("-----Task 1:");
// Sum the properties

const sumSalaries = (obj) => {
  let sumSal = 0;
  for ( let value of Object.values(obj)) {
    sumSal += value;
  }
  return sumSal;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650


// -----Task 2:
console.log("-----Task 2:");
// Count properties

const count = (obj) => {
  let nr = 0;
  for ( let value of Object.entries(obj)) {
    nr++;
  }
  return nr;
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2
    
