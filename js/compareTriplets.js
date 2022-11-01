//create function to compare elements of array
function compareTriplates(v,f){

    // create variable to start score 
    let vivi = 0;
    let Fernando = 0;

    // create loop to go through the elements inside of array
    for(let index = 0;index < v.length;index++){
        //create condition to compare the score of array
        if(v[index] > f[index]){
            vivi++;

        }
        else if(v[index] < f[index]){
            Fernando++;
        }
    }

   return [vivi,Fernando];

}
console.log(compareTriplates([100,87,96],[55,98,99]));