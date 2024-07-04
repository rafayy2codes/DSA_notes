function linearSearch(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === target) {
            return index;
        }
    }
    return -1;
}

const array = [3, 5, 7, 9, 11];
const targetValue = 7;

const result = linearSearch(array, targetValue);
if (result !== -1) {
    console.log(`Target found at index ${result}`);
} else {
    console.log('Target not found');
}
