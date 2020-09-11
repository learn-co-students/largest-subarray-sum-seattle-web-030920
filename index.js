// function largestSubarraySum(arr) {
//     let max = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         let sum = arr[i]
//         for (let j = i + 1; j < arr.length; j++) {
//             sum += arr[j]
//             if (sum > max) {
//                 max = sum
//             }
//         }
//     }
//     return max
// }

function largestSubarraySum(arr) {
    let sum = 0
    let max = 0
    arr.forEach(elem => {
        if (sum + elem < 0) {
            sum = 0
        } else {
            sum += elem
            if (sum > max) {
                max = sum
            }
        }
    })
    return max
}
