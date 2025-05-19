// 입력창 : 키(cm 기준)


export function calculateNormalWeight(height){

    let changeHeight = parseFloat(height/100)
    let minWeight = parseFloat((18.5 * changeHeight * changeHeight).toFixed(1));
    let maxWeight = parseFloat((25 * changeHeight * changeHeight).toFixed(1));
    
    return('정상체중은 ' + minWeight + 'kg부터 ' + maxWeight + 'kg까지입니다.');
}
