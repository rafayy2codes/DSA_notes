function bubbleSort(arr) {
    let n = arr.length;

    // Outer loop to control the number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for each pass
        for (let j = 0; j < n - 1 - i; j++) {
            // Swap if the current value is greater than the next value
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example usage:
let values = [5, 3, 8, 4, 2];
console.log("Original array:", values);
let sortedValues = bubbleSort(values);
console.log("Sorted array:", sortedValues);

/// Real life scenario

/*
Scenario:

You are a data analyst working for a small retail company. 
The company has a list of product prices, and they want to display the prices in ascending order 
on their website for a better customer experience. The list of prices is relatively small, and you 
decide to use the Bubble Sort algorithm to sort the prices.

Problem:

Given a list of product prices, implement the Bubble Sort algorithm to sort the prices 
in ascending order. Write a JavaScript function to achieve this and ensure it handles a typical 
use case efficiently.

*/




let Product_prices = [29.99, 19.99, 4.99, 49.99, 9.99, 24.99, 39.99];

function Price_sorter(arr) {

    n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}

const algo_work = Price_sorter(Product_prices)
console.log("Algorithm implemented", algo_work)