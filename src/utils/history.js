export function saveHistory({ title, calValue }) {
  let historyArray = JSON.parse(localStorage.getItem('historyList')) || [];

  // 중복 제거
  historyArray = historyArray.filter(item => item.calValue !== calValue);
  historyArray.unshift({ title, calValue, id: `${calValue}-${Date.now()}` }); // 맨 앞에 추가
  historyArray = historyArray.slice(0, 5);   // 최대 5개 유지

  localStorage.setItem('historyList', JSON.stringify(historyArray));
  
    // ✅ 히스토리 변경 이벤트 발송
  window.dispatchEvent(new Event('historyUpdated'));
}
