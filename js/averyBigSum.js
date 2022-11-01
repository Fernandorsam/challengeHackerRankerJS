// this function will sum all elements inside array
function aVeryBigSum(ar){ 
 
    //this variable will sum the elements of array
    let sum = 0; 

    // create loop to go through all elements inside array
    for(let index = 0;index < ar.length;index ++){

        // summing all elements inserted at array
        sum =  sum + ar[index];
    }
    //  returning sum dos elements of array
    return sum;


}
// print result at console
console.log(aVeryBigSum([1,2,3,10]));