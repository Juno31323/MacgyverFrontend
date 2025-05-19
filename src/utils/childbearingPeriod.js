// 가임기 = 배란일-3일 ~ 배란일+5일일



export function calculateChildbearingP(period, lastMenstrual){
    
    const StartDay = new Date(lastMenstrual);
    const EndDay = new Date(lastMenstrual);

    StartDay.setMonth(StartDay.getMonth() + 1);
    StartDay.setDate(StartDay.getDate() + period -17);

    
    EndDay.setMonth(EndDay.getMonth() + 1);
    EndDay.setDate(EndDay.getDate() + period - 9);

    return('다음 예상 가임기는 ' + StartDay.getMonth() + '월 ' + StartDay.getDate() + '일 부터 ' +
    EndDay.getMonth() +  '월 ' + EndDay.getDate() + '일 까지입니다.');



}