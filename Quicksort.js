function quickSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Choose a pivot element (here we choose the last element)
    let pivot = arr[arr.length - 1];

    // Create arrays for elements less than and greater than the pivot
    let left = [];
    let right = [];

    // Partition the array into left and right sub-arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quickSort to the left and right sub-arrays
    // Concatenate the sorted left array, the pivot, and the sorted right array
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let values = [10, 7, 8, 9, 1, 5];
console.log("Original array:", values);
let sortedValues = quickSort(values);
console.log("Sorted array:", sortedValues);
