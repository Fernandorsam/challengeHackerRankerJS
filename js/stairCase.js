function starCaise(n){

    let symbol = '#';
    let inputline = '';
    let inputPosition = n - 1;

    for(let lineIndex = 0;lineIndex < n;lineIndex++){ //loops through the line

        for(let colunmIndex = 0;colunmIndex < n; colunmIndex++){ //loops through the colunm

            if(colunmIndex < inputPosition){
                inputline += " ";
            }else{
                inputline += symbol;
            }

        }

        console.log(inputline);
    //clean the line after of console run
        inputline = '';
    // decrement one index to run at down to up
        inputPosition -= 1;
    }
     

}

starCaise(10);