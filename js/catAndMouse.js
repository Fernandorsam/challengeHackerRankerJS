function catAndMouse(x,y,z){

    let catA = x;
    let catB = y;
    let mouse = z;

    if((mouse - catA) < (mouse - catB)){
        return 'catA';
    }else if((mouse - catA) === (mouse - catB)){
        return 'Mouse';
    }else{
        return 'catB';
    }

}
console.log(catAndMouse(18,71,17));