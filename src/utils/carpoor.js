export async function carpoor(salary, model, country, history) {
  try {
    const response = await fetch('http://localhost:8080/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        salary: Number(salary),   // 연봉 (숫자형)
        model: model,             // 차종 (예: '소나타')
        type: country             // 'koreaCar' 또는 'foreignCar'
      }),
    });

    const data = await response.json();

    // 오류 응답일 경우
    if (!response.ok) {
      return data.message || '서버 오류가 발생했습니다.';
    }

    // 결과를 히스토리 추가
    if (history) {
      history(model);
    }

    return data.result || '결과를 받아오지 못했습니다.';
  }
  catch (error) {
    console.error('API 호출 실패:', error);
    return '서버와 연결할 수 없습니다.';
  }
}
