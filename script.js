// Do the below programs in anonymous function & IIFE
//   1.Print odd numbers in an array
//      Anonymous function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.filter(function (number) {
    return number % 2 !== 0;
});

console.log(arr.filter(function (number) {
    return number % 2 !== 0;
}));

// IIFE

(function () {
    let result = arr.filter(function (number) {
        return number % 2 !== 0;
    });
    console.log(result);
})();

// ------------------------------------------------------------------------------------------------

// 2.Convert all the strings to title caps in a string array

// Anonymous function

let arr1 = ["hello", "world", "how", "are", "you"];

arr1.map(function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
});

console.log(arr1.map(function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}));


// IIFE



(function () {
    let result = arr1.map(function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    });
    console.log(result);
})();

// ----------------------------------------------------------------------------

// 3.Sum of all numbers in an array

// Anonymous function

let numbers = [1, 2, 3, 4, 5];

let sum = (function (arr2) {
    let total = 0;
    for (let i = 0; i < arr2.length; i++) {
        total += arr2[i];
    }
    return total;
})(numbers);
console.log(sum);

// IIFE



let sum1 = (function (arr2) {
    let total = 0;
    for (let i = 0; i < arr2.length; i++) {
        total += arr2[i];
    }
    return total;
})(numbers);

console.log(sum1);
// ----------------------------------------------------------------------


// 4.Return all the prime numbers in an array
// Anonymous function

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(arr[i]);
        }
    }
    return result;
})(numbers);

console.log(primeNumbers);

// IIFE



let primeNumbers1 = (function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(arr[i]);
        }
    }
    return result;
})(numbers);

console.log(primeNumbers);

// ---------------------------------------------------------------

// 5.Return all the palindromes in an array
// Anonymous function

let arra = ["level", "radar", "hello", "world"];
let palindromes = arra.filter(function (word) {
    return word === word.split("").reverse().join("");
});
console.log(palindromes);

//   IIFE


let palindromes1 = (function () {
    return arra.filter(function (word) {
        return word === word.split("").reverse().join("");
    });
})();
console.log(palindromes1);

// --------------------------------------------------------------------

// Do the below programs in arrow functions.
// 1.Print odd numbers in an array

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers4.filter(num => num % 2 !== 0);
console.log(oddNumbers);
// -----------------------------------------------------------------------
// 2.Convert all the strings to title caps in a string array

const strings = ['hello', 'world', 'of', 'javascript'];
const titleCasedStrings = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(titleCasedStrings);
// -------------------------------------------------------------------------------------------
// 3.Sum of all numbers in an array
const numbers5 = [1, 2, 3, 4, 5];

const sum2 = numbers5.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);
// ------------------------------------------------------------------------------
// 4.Return all the prime numbers in an array
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};

const primeNumbers5 = numbers6.filter(num => isPrime(num));

console.log(primeNumbers5);
// -----------------------------------------------------------------------

// 5.Return all the palindromes in an array

const words = ['level', 'radar', 'hello', 'world'];

const isPalindrome = word => word === word.split('').reverse().join('');

const palindromes7 = words.filter(word => isPalindrome(word));

console.log(palindromes7);












