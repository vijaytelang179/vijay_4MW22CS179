
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function findMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    if (arr[0] == null) {
        return null
    } else {
        return max
    }
}
let result = findMax(arr)
console.log(result)
