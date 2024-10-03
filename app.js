// array ichidagi eng katta va eng kichik sonlarni topib beradigan function yarating


// function maxNumber(arr) {
//     if (arr.length === 0) {
//         return;
//     }

//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return {
//         min: min,
//         max: max
//     };
// }

// let numbers = [34, 7, 23, 32, 5, 62];
// let result = maxNumber(numbers);
// console.log("Eng kichik son:", result.min);
// console.log("Eng katta son:", result.max);

// array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring

// function maxNumber(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 2) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 0, -1, 8];
// let result = maxNumber(numbers);
// console.log("2 dan katta bo'lgan sonlar:", result);

// ixtiyoriy array yarating va uning ichidagi juft va toq sonlar nechtaligini toping
// function countEvenOdd(arr) {
//     let evenCount = 0; 
//     let oddCount = 0;   

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenCount++;  
//         } else {
//             oddCount++;   
//         }
//     }

//     return {
//         evenCount: evenCount,
//         oddCount: oddCount
//     };
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = countEvenOdd(numbers);
// console.log("Juft sonlar soni:", result.evenCount);
// console.log("Toq sonlar soni:", result.oddCount);

