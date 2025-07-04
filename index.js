
//THIS IS SRING MANIPULATION

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"



//Array Functions:

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}


//sum of array

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}



console.log(sumArray([1, 2, 3, 4])); // Output: 10


//Filter Array Based on a Condition

function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

//Factorial Function

function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}


//Prime Number Check

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}


//Fibonacci Sequence Generator

function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}