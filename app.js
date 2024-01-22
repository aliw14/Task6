// Destructuring array and object
const scores = [20, 55, 48, 80, 100];
let [firstScore, secondScore] = scores;
console.log(firstScore, secondScore);

const student = {
  name: "Ali",
  age: 19,
  isEnrolled: true,
};
let { name, age } = student;
console.log(name, age);

// typeof operator and Array length
console.log(typeof name);
console.log(typeof age);
console.log(scores.length);

// Arithmetic Comparison and Logical Operations
let sum = firstScore + secondScore;
console.log(sum);
let diff = firstScore - secondScore;
console.log(diff);
console.log(firstScore > secondScore);
console.log(firstScore < secondScore);

console.log(firstScore < secondScore && firstScore < age);
console.log(firstScore < secondScore || firstScore < age);
console.log(student.isEnrolled != false);
