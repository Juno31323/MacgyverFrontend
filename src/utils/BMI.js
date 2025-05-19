export function calculateBMI(weight, height){

    // 예외처리
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert("정확한 숫자를 입력해주세요!");
        return;
    }

    let BMI = (weight/((height/100)**2)).toFixed(1);

    if(BMI<18.5){
        return(BMI+" 저체중입니다.")
    }
    else if(BMI>=18.5 && BMI<25){
        return(BMI+" 정상체중입니다.")
    }
    else if(BMI>=25 && BMI<30){
        return(BMI+" 과체중입니다.")
    }
    else if(BMI>=30){
        return(BMI+" 비만입니다.")
    }
}











