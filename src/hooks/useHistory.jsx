import { useEffect, useState } from 'react';

export function useHistory() {
  const [historyList, setHistoryList] = useState([]);

    const loadHistory = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('historyList')) || [];
      setHistoryList(stored);
    } catch (e) {
      console.error('히스토리 불러오기 실패:', e);
      setHistoryList([]);
    }
  };

  useEffect(() => {
    loadHistory(); // 최초 로딩

    // 이벤트 리스너 등록
    // history.js에서 dispatchEvent('historyUpdated') 만듦
    window.addEventListener('historyUpdated', loadHistory);

    // 정리(cleanup)
    return () => {
      window.removeEventListener('historyUpdated', loadHistory);
    };
  }, []);
 

  return historyList;
}
