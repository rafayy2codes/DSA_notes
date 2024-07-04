

function findLowestValue(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return null; // or throw an error, or return a default value as needed
    }

    // Initialize the lowest value with the first element of the array
    let lowest = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Check if the current value is lower than the lowest value found so far
        if (arr[i] < lowest) {
            // Update the lowest value
            lowest = arr[i];
        }
    }

    // Return the lowest value found
    return lowest;
}

// Example usage:
let values = [3, 5, 1, 8, 2, 5];
let lowestValue = findLowestValue(values);
console.log("The lowest value is:", lowestValue);



function Myvaluechecker(arr) {

    if (arr.length === 0) {
        return null;
    }

    let lowest = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[1] < lowest) {
            lowest = arr[i];

        }
    }

}
let values2 = [2, 6, 6, 8, 2, 5];
let lowestValue2 = Myvaluechecker(values2);
console.log("The lowest value is:", lowestValue);