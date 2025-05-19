// 두 좌표 사이 거리구하기 (주행 거리)
export function CalculateDistance(start, end) {
    let dx = end[0] - start[0];
    let dy = end[1] - start[1];

    return (Math.sqrt(dx * dx + dy * dy));
    // Math.sqrt() <- 결과의 제곱근을 리턴
}
