"use strict";

// function simpleArraySum(ar) {
//   // Write your code here
//   let results = 0;
//   for (let i = 0; i <= ar.length - 1; i++) {
//     results += ar[i];
//   }

//   console.log(results);
// }

// // console.log(simpleArraySum([1, 2, 3, 4]));

// simpleArraySum([1, 2, 3, 4, 10, 11]);

// function compareTriplets(firstArray, secondArray) {
//   let finalResultArray = [];
//   let bob = 0;
//   let alice = 0;
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] < secondArray[i]) {
//       bob++;
//     } else if (firstArray[i] === secondArray[i]) {
//       alice = alice;
//       bob = bob;
//     } else {
//       alice++;
//     }
//   }
//   finalResultArray.push(alice, bob);
//   return finalResultArray;
// }

// console.log(compareTriplets([1, 2, 55, 44], [3, 5, 33, 122]));

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // // console.log(arr[0].length - 1);
// // let leftDiagonal = (rightDiagonal = 0);

// // for (let i = arr.length - 1; i >= 0; i--) {
// //   leftDiagonal = arr[i][i];
// //   rightDiagonal = arr[i][arr.length - 1 - i];
// // }
// // return Math.abs(leftDiagonal-rightDiagonal),

// // // console.log(arr);

// function diagonalDifference(arr) {
//   // Write your code here
//   let leftDiagonal = 0;
//   let rightDiagonal = 0;

//   for (let i = 0; i < arr.length; i++) {
//     leftDiagonal += arr[i][i];
//     rightDiagonal += arr[i][arr.length - 1 - i];
//   }
//   console.log(leftDiagonal, rightDiagonal);
//   return Math.abs(leftDiagonal - rightDiagonal);
// }

// console.log(diagonalDifference(arr));

// let total = 0;

// for (let i = 0; i <= 1000; i++) {
//   total += i;
// }
// console.log(total);

// let num = 1000;

// let equate = (num / 2) * num + num / 2;
// console.log(equate);

// function closure() {
//   let counter = 0;
//   return () => counter++;
// }

// const test1 = closure();
// const test2 = closure();

// console.log(test1()); //test 1
// console.log(test1()); //test1
// console.log(test1()); //test1
// console.log("---------------=============--------");
// console.log(test2()); //test2
// console.log(test2()); //test2
// console.log(test2()); //test2

// function plusMinus(arr) {
//   // Write your code here
//   let positiveNum = 0;
//   let negativeNum = 0;
//   let zeros = 0;
//   let arrLength = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0) {
//       positiveNum++;
//     } else if (i < 0) {
//       negativeNum++;
//     } else {
//       zeros++;
//     }
//   }
//   return console.log(
//     positiveNum / arrLength,
//     negativeNum / arrLength,
//     zeros / arrLength
//   );
// }

// plusMinus([-4, 3, -9, 0, 4, 1]);

// let form = document.querySelector(".form");
// let submitter = document.querySelector(".submitter");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let formData = {};
//   let formGroup = new FormData(e.currentTarget);

//   for (let [key, value] of formGroup) {
//     formData[key] = value;
//   }
//   console.log(formData);
// });

// function plusMinus(arr) {
//   // Write your code here
//   let positiveNum = [];
//   let negativeNum = [];
//   let zeros = [];
//   let arrLength = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positiveNum.push(arr[i]);
//     } else if (arr[i] < 0) {
//       negativeNum.push(arr[i]);
//     } else {
//       zeros.push(arr[i]);
//     }
//   }

//   return console.log(
//     (positiveNum.length / arrLength).toFixed(5),
//     (negativeNum.length / arrLength).toFixed(5),
//     (zeros.length / arrLength).toFixed(5)
//   );
// }

// plusMinus([1, 1, 0, -1, -1]);

// function staircase(n) {
//   for (let i = n; i > 0; i--) {
//     for (let j = 1; j <= n; j++) {
//       if (j > i) {
//         console.log(" ");
//       } else {
//         console.log("#\n");
//       }
//     }
//   }
// }

// staircase(7);

// function staircase(n) {
//   for (let line = 1; line <= n; line++) {
//     let lineStr = "";
//     for (let sp = 0; sp < 6 - line; sp++) {
//       lineStr += " ";
//     }
//     for (let hash = 0; hash < line; hash++) {
//       lineStr += "#";
//     }
//     console.log(lineStr);
//   }
// }

// function staircase(n) {
//   for (let line = 1; line <= n; line++) {
//     let str = "";
//     for (let hash = 0; hash < line; hash++) {
//       if (hash < line) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }
//     console.log(str);
//   }
// }

// staircase(6);

let array = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

hourglassSum(array);

function hourglassSum(arr) {
  // Write your code here

  // let sum = 0;
  let totalSummarize = [];
  let sum = 0;
  let xLength = arr.length;
  let yLength = arr[0].length;
  let totalSum = 0;

  for (let i = 0; i < xLength - 2; i++) {
    for (let j = 0; j < yLength - 2; j++) {
      // console.log(arr[i + 1]);

      console.log(arr[i + 1][j + 1]);
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      totalSummarize.push(sum);
    }
  }
  console.log(Math.max(...totalSummarize));
}

// let x = [
//   [{ name: "test1" }, { name: "test2" }],
//   [{ name: "test3" }, { name: "test4" }],
// ];

// let listOfName = x.flatMap((name, idx) => {
//   return name.map((name) => name.name);
// });

// console.log(listOfName);
