export function tempConversion(temp,beforeUnit,afterUnit){

    let result = 0;
    if(beforeUnit =='C'){
        result = temp
        if(afterUnit == 'F'){
            result =(temp*1.8+32).toFixed(1);
        }
    }
    else if(beforeUnit =='F'){
        result = temp
        if(afterUnit == 'C'){
            result = ((temp-32)*1.8).toFixed(1);
        }
    }

    return(result);
}
