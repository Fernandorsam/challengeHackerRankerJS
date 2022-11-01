function migratoryBirds(arr){
    // declare an object void
    let counts = {};

    //create iterable to count elements inside  of array
     arr.forEach((count) => {
        counts[count] =  (counts[count] || 0) +1;

        
     });
     // to discover what greater value of counts
     const maxVal = Math.max(...Object.values(counts))
     // find  the amount of repeatetion that happen
     const num = Object.keys(counts).find((key) => counts[key] === maxVal);


     return num;
}
console.log(migratoryBirds([1,1,2,3,4,4,5,5,5,5,6,7,8,9]));