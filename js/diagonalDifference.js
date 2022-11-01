function diagonalDifference(arr){
    // create variable to make counts
 let leftDiagonal = 0;
 let rightDiagonal = 0;

 // create loop to interate in the array
 for(let index = 0; index < arr.length; index++){
    
    // making sum of elements inside array
    leftDiagonal += arr[index][index];
    rightDiagonal += arr[index][arr.length-1-index]
 }

return  Math.abs(leftDiagonal-rightDiagonal);
}

console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [7,8,9]]));