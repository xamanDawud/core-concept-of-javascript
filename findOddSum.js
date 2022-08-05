// Find array to odd number and than all odd number total sum

// function getArrayToOddToSum(arrayNum) {
//     let sum = 0;
//     for (let i = 0; i < arrayNum.length; i++) {
//         if (arrayNum[i] % 2 == 1) {
//             console.log(i, arrayNum[i]);
//             sum += arrayNum[i];
//         }
//     }
//     return "This Array Total Sum is " + sum;
// }

// console.log(getArrayToOddToSum([20, 54, 35, 23, 65]));#

function arrayToSum(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        let element = arr[i];
        sum += arr[i];
        console.log(index, element, sum);
    }
    // console.log(element, sum )
}

arrayToSum([12, 65, 45, 78, 32, 45, 91]);