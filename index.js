console.log("hello");

// Exercise 1

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.

// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
// for (let i = 0; i<= 15; i++)
// if (i%2 ===0) {
//     console.log(`${i} is even number`);
// } else {
//     console.log(`${i} is odd number`);
// }

// Exercise 2

// 7. Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// 0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc
// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i%5 ===0) {
//     console.log(`${i} fizzbuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} buzz`);
//   } else {
//     console.log(i);
//   }
// }

// Exercise 3

// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
// let sumOfFirstarray = 0;
// let sumOfSecondarray = 0;
// for(let i = 0; i < arr_1.length; i++) {
//     sumOfFirstarray=sumOfFirstarray+arr_1[i];
//     console.log(`this is ${i} number`,arr_1[i]);
//     console.log(`this is the number of first array ${sumOfFirstarray}`);
//     sumOfSecondarray=sumOfSecondarray+arr_1[i];
//     console.log(`this is ${i} number`, arr_2[i]);
//     console.log(`this is the sum of second array ${sumOfSecondarray}`);
// }
// console.log(sumOfFirstarray+sumOfSecondarray);

// Exercise 4

// Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// for(let i = 0; i<=22; i++)
// if(i%2 ===0){
//     console.log(`${i} even`);
// }

// Exercise 5
 
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
 
// let str1 = "javascript";  
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes

// let str1="javascript";
// let text=''
// for (let i=0; i<str1.length; i++) 
// if((i+1) %2===0){
//     text += "Z"
// } else{
//     text += str1[i]
// }
// console.log(text);

// Exercise 6
 
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 
// let str2 = "don’t know why";
// Example output:
// “yes”


// Exercise 7
 
// Given a number n Calculate the factorial of the number
 
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

// let n2 = 4
// let sum = 1
// for(let i=1; i<=n2; i++){
//     sum = sum * i
// }
// console.log(sum);

