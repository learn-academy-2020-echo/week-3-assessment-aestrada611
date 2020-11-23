// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//

//I need the logic to take the number and add the previous two values to try to get a sum of the new value.
//I then have to take that number and it to the array.
//I then have to take the last two numbers and keep the process going.
// //maybe create an empty array and .push values into it.
//


//I had a hard time with this one and I'm pretty sure that I was able to get very close to solving




var fibonacciArray = [0]
//
//

// const sumLog = (array) => {
//   let addedArray = array.map((value, index) => {
//     if(index === 0){
//       return value
//     } else{
// //might have to add if statment to address if first value to just drop the value
//     return value + array[index - 1 ] //[index - 1]
// }
//   })
//   return addedArray
// }

const fibonacci = (array) => {
  let newArray = []
  for(let i = 0; i <= 10; i++){
    if(i === 0){
      newArray.push(array[i])
    } else if (i > 0) {
      newArray.map((value,index) => {
  return value + array[index - 1]
}).push(array[i])
//newArray +
    //  newArray.push(array[i])
    }
  }
  return newArray
}

console.log(fibonacci(fibonacciArray));

//
// let mappedArray = fibonacci.map((value, index, array) => {
//   if(index === 0){
//     return value
//   } else
// })
// }






// const numberReturn = (num1, num2) => {
// let current = 0
// let next = 1
// for (i = 0; i <= 10; i++)
//   //if(num === 1 || num === 0)
//   return fibonacciArray.push(num)
// }
//
// console.log(numberReturn(2));
//
//   // if (num <= 1 && num > 0) {
  //   return num
  // }
  // return numberReturn[num-1] + numberReturn[num - 2]
  //let
//  let secondSum = num2 + sum





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//need a number sotring function
const oddNumberSorter = (array) => {
  //need to filter for numbers
  let filteredArray = array.filter(value =>{
    return typeof value === 'number'
  })
  //need to sort and filter for odd numbers only
  let sortedArray = filteredArray.sort(function (a, b) {return a-b})
  let oddsOnly = sortedArray.filter(value =>{
    return value % 2 !== 0
  })
  return oddsOnly
}

//
// const oddNumberSorter = (array) => {
//   let filteredArray = array.filter(value =>{
//     return typeof value === 'number'
//   }).sort(function (a, b) {
//     return a-b}).filter(value =>{
//     return value % 2 !== 0
//   })
//   return filtredArray
// }
//



console.log(oddNumberSorter(fullArr1));
console.log(oddNumberSorter(fullArr2));





// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”
var middleLetters3 = "yeot"
var middleLetters4 = "herliktomt"
var middleLetters5 ="thisisanevennumber"
//the funtion takes in stirngs that are words
//if word is even return two middle middleLetters
//else if return one middle letters
//.length in order to count the the middle
//use charAt() to get the middle letter

//function takes in strings
const middleFinger = (string) => {
  //need to find if string length is odd or even
  let lengthFinder = string.length
  if(lengthFinder % 2 != 0){
    //return charAt for the middle
    return string.charAt(lengthFinder *.5)
  }else{
    //return the middle letter and the one before that for two middle ones
    return string.substring(lengthFinder * .5 - 1, lengthFinder * .5) + string.charAt(string.length*.5)
    //substring
  }
}






// const middleFinder = (string) => {
//   let stringer = string.length
//   if(string.length % 2 === 0 ){
//     return charAt(string.length)
//   } else if(string.length % 2 !== 0){
//     return "yeet"//charAt(string.length * .5 && string.length *.5 + 1)
//   }
// }
//
 console.log(middleFinger(middleLetters1));
 console.log(middleFinger(middleLetters2));
 console.log(middleFinger(middleLetters3));
 console.log(middleFinger(middleLetters4));
 console.log(middleFinger(middleLetters5));
//

// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)

//the four and pie reamin constant
//need to create a variable for radisu and must make radius multiply with itself
//need to understand what classes are and how they work

//need a class
//pi and four are constant
class Area{
  constructor(constant, radius){
    this.constant = 12.56
    this.radius = radius
  }
  //method will carry out all the math.
  area (){
    return `${this.constant * this.radius * this.radius}`
 }
}
var sphere = new Area(12.56, 5)
var sphere2 = new Area(12.56, 10)
var sphere3 = new Area(12.56, 21)
var sphere4 = new Area(12.56, 15)
console.log(sphere.area());
console.log(sphere2.area());
console.log(sphere3.area());
console.log(sphere4.area());



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []




//I got this function to add the two previous numbers but had a hard time adding the value of the running sum instead of adding to the previous answers.




//function that takes in array and returns the accumulating sum
const sumLog = (array) => {
  let addedArray = array.map((value, index) => {
    if(index === 0){
      return value
    } else{
//might have to add if statment to address if first value to just drop the value
    return value + array[index - 1 ] //[index - 1]
}
  })
  return addedArray
}


// const sumLogLoop = (array) => {
// for(let i = 0; i < array.length); i++)
// }


console.log(sumLog(numbersToAdd1));
console.log(sumLog(numbersToAdd2));
console.log(sumLog(numbersToAdd3));
