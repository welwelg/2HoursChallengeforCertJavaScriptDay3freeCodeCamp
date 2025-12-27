// 1. Declare num between 1 and 20
let num = 5;

// 2. Create factorialCalculator function
function factorialCalculator(number) {
  let result = 1;

  // 3. Loop from 1 to number (inclusive)
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

// 4. Call the function and store result
let factorial = factorialCalculator(num);

// 5. Create result message
let resultMsg = `Factorial of ${num} is ${factorial}`;

// 6. Output to console
console.log(resultMsg);
