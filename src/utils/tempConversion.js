export function tempConversion(temp,checkedRadio){

    let result = 0;
    if(checkedRadio =='C'){
        result = (temp*1.8+32).toFixed(1);
    }
    else if(checkedRadio =='F'){
        result = ((temp-32)*1.8).toFixed(1);
    }

    alert(result);
}

// tempConversion('f',32);