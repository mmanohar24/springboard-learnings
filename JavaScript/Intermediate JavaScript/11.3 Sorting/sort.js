// Bubble Sort Algorithm
let nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
    23, 2, 453, 546, 75, 67, 4342, 32];

function bubbleSort(nums)
{
    // Get the length of the array.
    let n = nums.length;

    // Outer loop for each element in the array
    for(let i = 0; i < n - 1; i++)
    {
        // Before each pass, I'm assuming no swaps will happen. So, I set swapped to false.
        let swapped = false;
        // Inner loop to compare adjacent elements.
        for (let j = 1; j < n - i - 1 ; j++)
        {
            // Compare adjacent elements and swap them if they are in the wrong order.
            if( nums[j] < nums[j - 1])
            {
                // Swap elements at positions j and j-1.
                let temp = nums[j];
                // Move the larger element to the right side.
                nums[j] = nums[j-1];
                // Move the smaller element to the left side.
                nums[j-1] = temp;
                // If swapping occurred in the pass, set swapped to true.
                swapped = true;
            }
        }
        // If no swaps occured in the inner loop, it means the array is completely sorted. So, I can break out of the loop early.
        if(!swapped) break;
    }
    // Return the sorted array.
    return nums;
}

// ----------------------

// Merge Algorithm

function merge(arr1, arr2)
{
    // Empty array is initialized to store the merged array.
    let results = [];

    // i and j are pointers to track the elements in arr1 and arr2. 
    let i = 0;
    let j = 0;

    // This loops runs until all the elements in arr1 and arr2 are processed.
    while ( i < arr1.length && j < arr2.length)
    {
        // If the first element in arr1 is smaller, it is added to the results array and the pointer is incremented.
        if( arr1[i] < arr2[j])
        {
            results.push(arr1[i]);
            i++;
        }
        // If the first element in arr2 is smaller or equal, it is added to the results array and the pointer is incremented.
        else
        {
            results.push(arr2[j]);
            j++;
        }
    }

    // Check if any elements are left in arr1, so they are added to the results array.
    while (i < arr1.length)
    {
        results.push(arr1[i]);
        i++;
    }

    // Check if any elements are left in arr2, so they are added to the results array.
    while(j < arr2.length)
    {
        results.push(arr2[j]);
        j++;
    }

    // Returning the merged array.
    return results;
}

// -----------------

// Merge Sort Algorithm

function mergeSort(arr)
{
    // Base case: If the array has only one element or is empty, it is already sorted. Return the array.
    if(arr.length <= 1) return arr;

    // Find the middle index of the array.
    const mid = Math.floor(arr.length / 2);

    // Recursively split and sort the left half of the array.
    let left = mergeSort(arr.slice(0,mid));

    // Recursively split and sort the right half of the array.
    let right = mergeSort(arr.slice(mid));

    // Merge the sorted arrays into a single sorted array.
    return merge(left, right);
}

// -----------------

// Insertion Sort Algorithm

function insertionSort(arr)
{
    // If the array has 0 or 1 element, it is already sorted. Return the array.
    if (arr.length <=1 ) return arr;

    // We assume that the first element is already sorted and we start from the second element.
    for(let i = 1; i < arr.length; i++)
    {
        // We keep a copy of the current element.
        let key = arr[i];

        // j is the index of the last element in the sorted part of the array.
        let j = i - 1;

        // We're comparing the current element and the last element in the sorted part of the array.
        while(j >= 0 && arr[j] > key)
        {

            // If the current element is smaller, we shift the larger element one position to the right.
            arr[j + 1] = arr[j];

            // We move to the next element in the sorted part of the array.
            j--;
        }

        // After the while loop ends, j will be at the position where the current element should be inserted. 
        arr[j + 1] = key;
    }
    return arr;
}

// -----------------

// Selection Sort Algorithm

function selectionSort(arr)
{
    // If the array has 0 or 1 element, it is already sorted. Return the array.
    if(arr.length <= 1) return arr;

    // Outer loop starts at index 0 and ends at the second last element.
    for( let i = 0; i < arr.length - 1; i++)
    {

        // We assume the current element is the smallest and store its index.
        let temp = i;

        // Inner loop starts at the next element and goes to the end of the array.
        for(let j = i + 1; j < arr.length; j++)
        {

            // If we find an element smaller than the current smallest, we update the index of the smallest element.
            if(arr[j] < arr[temp])
            {
                // Update the index of the smallest element.
                temp = j;
            }
        }

        // If the smallest element is not the current element, we swap them.
        if (temp !== i)
        {
            [ arr[i], arr[temp] ] = [ arr[temp], arr[i] ];
        }
    }

    // Return the sorted array.
    return arr;
}

// -----------------

// Pivot Helper Function for Quick Sort

function pivot(arr, start = 0, end = arr.length - 1)
{
    // This is a simple function to select a pivot element from the array.

    const pivotValue = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i <= end; i++)
    {
        if(arr[i] < pivotValue)
        {
            swapIndex++;
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
}

// -----------------
// Quick Sort Algorithm

function quickSort(arr, start = 0, end = arr.length - 1)
{
    // Base case: If the array has 0 or 1 element, it is already sorted. Return the array.
    if(start >= end) return arr;

    // Partition the array and get the index of the pivot.
    const pivotIndex = pivot(arr, start, end);

    // Recursive calls on the left and right sides of the pivot.
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);

    return arr;
}

// -----------------

// Radix Sort Algorithm

function radixSort(arr)
{
    const maxNum = Math.max(...arr);

    let digit = 0;

    // Loop through each digit of the maximum number.
    while(Math.floor(maxNum / Math.pow(10, digit)) > 0)
    {
        helper(arr, digit);
        digit++;
    }
    return arr;
}

function helper(arr, digit)
{
    let countArray = new Array(10).fill(0);
    let sortedArray = new Array(arr.length).fill(0);

    let digitValue = Math.pow(10, digit);

    // For each number, extract the digit at the current place and count it.
    for (let num of arr)
    {
        const countIndex = Math.floor(num / digitValue) % 10;
        countArray[countIndex]++;
    }

    for(let i = 1; i < countArray.length; i++)
    {
        countArray[i] += countArray[i - 1];
    }

    for(let i = arr.length - 1; i >= 0; i--)
    {
        const countIndex = Math.floor(arr[i] / digitValue) % 10;
        sortedArray[countArray[countIndex] - 1] = arr[i];
        countArray[countIndex]--;
    }

    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = sortedArray[i];
    }
    return arr;
}