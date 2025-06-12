import { useEffect, useState } from 'react';

export default function HistoryList({ title, calValue, onOpenModal }) {
	const prev = JSON.parse(localStorage.getItem('historyList')) || [];

	// 중복 제거
	const filtered = prev.filter((item) => item.calValue !== calValue);

	// 새 기록을 앞에 추가
	const updated = [{ title, calValue }, ...filtered];

	// 저장
	localStorage.setItem('historyList', JSON.stringify(updated));
	
    const [historyList, setHistoryList] = useState([]);

  // 로컬스토리지에서 가져옴
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('historyList')) || [];
    setHistoryList(stored);
  }, []);

  // 아이템 클릭 시
  const handleClick = (item) => {
    onOpenModal(item.calValue); // 모달 열기
  };

  return (
    <div id="historyContainer" className="text-sm space-y-2">
      {historyList.map((item) => (
        <div
          key={item.calValue}
          className={`${item.calValue} historyModalOpenButton p-2 hover:bg-gray-50 rounded cursor-pointer`}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
