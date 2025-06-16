export function history(event) {
  let title;
  let calValue;

  // 히스토리에서 접근
  if (!(event.currentTarget.querySelector('h3'))) {
    title = event.currentTarget.textContent;
    calValue = event.currentTarget.id;
    console.log('h3 없을때 탐');
  } else {
    title = event.currentTarget.querySelector('h3').textContent;
    calValue = event.currentTarget.querySelector('h3').id;
    console.log('h3 있을때 탐');
  }

  const newHistoryItem = { t: title, id: calValue };

  // 기존 히스토리 불러오기
  const prevHistory = JSON.parse(localStorage.getItem("history")) || [];

  // 중복 제거 (같은 id가 있는 항목 삭제)
  const filtered = prevHistory.filter(item => item.id !== calValue);

  // 맨 앞에 추가하고 최대 5개로 자르기
  const updatedHistory = [newHistoryItem, ...filtered].slice(0, 5);

  // 저장
  localStorage.setItem("history", JSON.stringify(updatedHistory));

  // 화면에 히스토리 표시 ----------------------------------------
  // 먼저 기존 해당 항목은 제거
  const historyModal = document.querySelectorAll(`.${calValue}`);
  historyModal.forEach(h => h.remove());

  // 새로 DOM 요소 생성
  const createHistory = document.createElement('div');
  const historyContainer = document.getElementById('historyContainer');
  createHistory.textContent = title;
  createHistory.className = `${calValue} historyModalOpenButton p-2 hover:bg-gray-50 rounded`;
  createHistory.id = calValue;

  // 목록 맨 위에 추가
  historyContainer.prepend(createHistory);

  // 클릭 시 모달 열기
  createHistory.addEventListener('click', () => {
    const modal = document.getElementById(calValue + 'Modal');
    modal.classList.remove('hidden');
  });
}
