const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// console.log(tutorials.map(item => item))
// const titleCased = tutorials.map(function (tutorials) {
//   return tutorials.replace(tutorials[0], tutorials[0].toUpperCase())
// })
// console.log(newArr)
// // return newArr
// return tutorials.map(function (tutorials) {
//   return tutorials.replace(tutorials[0], tutorials[0].toUpperCase())


const titleCased = () => {
  // use the .map method on the tutorials to return a new array
  tutorials.map(tutorials => tutorials.replace(tutorials[0], tutorials[0].toUpperCase()))

  return tutorials
}
// console.log(newArr)
// return newArr



// const rollCall = students.map(function(student) {
//   return student + " the wizard";


// titleCased();
console.log(titleCased)
