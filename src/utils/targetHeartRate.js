// 입력창 :  나이(만나이)

export function calcultaeTargetHeartRate(age){
    
    let maxHeartRate = 220 - age;
    let minTarget = (maxHeartRate * 50 / 100).toFixed(0);
    let maxTarget = (maxHeartRate * 85 / 100).toFixed(0);

    return('목표심박수는 ' + minTarget + '(회/분)부터 ' + maxTarget + '(회/분)까지입니다.');
}