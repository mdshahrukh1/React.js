function bubbleSort(arr){
    let n = arr.length;

    for(i = 0; i<n; i++){
        for(j = 0; j<n-1-i; j++){

            if(arr[j] > arr[j+1]){
            let temp ;
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            } 
        }
    }
    return arr;
}

let arr = [1, 5, 6, 2, 3];
let sorted = bubbleSort(arr);
console.log(sorted);