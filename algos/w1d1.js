function bubblesort(arr) {
    // two for loops running through the length of the array 
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i); j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }
    console.log(arr)
}


bubblesort([6, 4, 5, 2, 9, 3, 8, 11, 1]) //output: [2,3,4,5,6,8,9]